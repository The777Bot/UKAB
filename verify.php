<?php
// ============================================================
//  UKAB Certificate Verification API
//  Upload this file to your cPanel public_html folder
// ============================================================

// --- CORS: Allow your frontend to call this script ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Database Configuration ---
define('DB_HOST',     'localhost');
define('DB_NAME',     'icbuumwf_wp545');
define('DB_USER',     'icbuumwf_wp545');
define('DB_PASS',     '57@vSt-!MuCX.p!4');
define('DB_CHARSET',  'utf8mb4');

// --- Field ID mapping (from wpd9_frm_item_metas) ---
define('FIELD_COMPANY_NAME', 44);
define('FIELD_STANDARD',     43);
define('FIELD_STATUS',       45);
define('FIELD_CERT_NUMBER',  46);
define('FIELD_AWARD_DATE',   47);
define('FIELD_EXPIRY_DATE',  48);

// --- Get certificate number from query string ---
$certNumber = isset($_GET['cert']) ? trim($_GET['cert']) : '';

if (empty($certNumber)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Certificate number is required.']);
    exit();
}

// --- Connect to MySQL ---
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit();
}

// --- Step 1: Find the item_id for this certificate number ---
$stmt = $pdo->prepare(
    "SELECT item_id FROM wpd9_frm_item_metas 
     WHERE field_id = :fieldId AND meta_value = :certNumber 
     LIMIT 1"
);
$stmt->execute([
    ':fieldId'    => FIELD_CERT_NUMBER,
    ':certNumber' => $certNumber,
]);
$row = $stmt->fetch();

if (!$row) {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'No certificate found with that number.']);
    exit();
}

$itemId = $row['item_id'];

// --- Step 2: Fetch all 6 fields for that item_id ---
$stmt = $pdo->prepare(
    "SELECT field_id, meta_value FROM wpd9_frm_item_metas
     WHERE item_id = :itemId
       AND field_id IN (:f44, :f43, :f45, :f46, :f47, :f48)"
);
$stmt->execute([
    ':itemId' => $itemId,
    ':f44'    => FIELD_COMPANY_NAME,
    ':f43'    => FIELD_STANDARD,
    ':f45'    => FIELD_STATUS,
    ':f46'    => FIELD_CERT_NUMBER,
    ':f47'    => FIELD_AWARD_DATE,
    ':f48'    => FIELD_EXPIRY_DATE,
]);
$rows = $stmt->fetchAll();

// --- Step 3: Map field_id → value ---
$data = [];
foreach ($rows as $r) {
    $data[(int)$r['field_id']] = $r['meta_value'];
}

// --- Step 4: Return structured JSON ---
echo json_encode([
    'success' => true,
    'data'    => [
        'companyName'   => $data[FIELD_COMPANY_NAME] ?? '',
        'standard'      => $data[FIELD_STANDARD]     ?? '',
        'status'        => $data[FIELD_STATUS]        ?? '',
        'certNumber'    => $data[FIELD_CERT_NUMBER]   ?? $certNumber,
        'awardDate'     => $data[FIELD_AWARD_DATE]    ?? '',
        'expiryDate'    => $data[FIELD_EXPIRY_DATE]   ?? '',
    ]
]);
