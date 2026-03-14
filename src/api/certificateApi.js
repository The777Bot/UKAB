/**
 * Certificate Verification API
 * Calls verify.php hosted on cPanel to retrieve real certificate data.
 *
 * IMPORTANT: Replace YOUR_DOMAIN below with your actual website domain
 * e.g. 'https://icb-uk.biz' or 'https://www.yourdomain.com'
 */

const API_BASE_URL = 'https://icb-uk.biz/verify.php'

/**
 * Verify a certificate by certificate number
 * @param {string} certificateNumber - e.g. "CE-UK-2024002"
 * @returns {Promise<Object>} - Certificate result or error
 */
export async function verifyCertificate(certificateNumber) {
    const certTrimmed = certificateNumber.trim()

    if (!certTrimmed) {
        return { success: false, message: 'Please enter a certificate number.' }
    }

    try {
        const url = `${API_BASE_URL}?cert=${encodeURIComponent(certTrimmed)}`
        const response = await fetch(url)

        // Handle HTTP-level errors
        if (!response.ok) {
            if (response.status === 404) {
                return {
                    success: false,
                    error: 'NOT_FOUND',
                    message: 'No certificate found with that number.'
                }
            }
            throw new Error(`Server responded with status ${response.status}`)
        }

        const json = await response.json()
        return json

    } catch (err) {
        console.error('Certificate API error:', err)
        return {
            success: false,
            error: 'NETWORK_ERROR',
            message: 'Could not reach the verification server. Please try again.'
        }
    }
}
