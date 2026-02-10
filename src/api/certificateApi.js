/**
 * Mock API service for certificate verification
 * In production, this would call real backend APIs
 */

// Simulates network delay
const simulateNetworkDelay = (ms = 1500) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Verify a certificate by certificate number and optional organization name
 * @param {string} certificateNumber - The certificate number to verify
 * @param {string} organizationName - Optional organization name for additional validation
 * @returns {Promise<Object>} - Certificate verification result
 */
export async function verifyCertificate(certificateNumber, organizationName = '') {
    // Simulate API call delay
    await simulateNetworkDelay(1500)

    // Normalize the certificate number for lookup
    const normalizedCertNumber = certificateNumber.trim().toUpperCase()

    // Simulate API endpoint: GET /api/verify/{certificateNumber}
    // This mock simulates different responses based on input patterns

    // Pattern matching for mock responses
    if (normalizedCertNumber.startsWith('CERT-001') || normalizedCertNumber.startsWith('UK-QMS')) {
        return {
            success: true,
            data: {
                certificateNumber: normalizedCertNumber,
                organizationName: organizationName || 'Acme Manufacturing Ltd',
                certificationStandard: 'ISO 9001:2015',
                status: 'Valid',
                issueDate: '2024-03-15',
                expiryDate: '2027-03-14',
                scope: 'Design and manufacture of industrial components',
                accreditationBody: 'UKAB',
            }
        }
    }

    if (normalizedCertNumber.startsWith('CERT-002') || normalizedCertNumber.startsWith('UK-EMS')) {
        return {
            success: true,
            data: {
                certificateNumber: normalizedCertNumber,
                organizationName: organizationName || 'Green Solutions PLC',
                certificationStandard: 'ISO 14001:2015',
                status: 'Expired',
                issueDate: '2021-06-01',
                expiryDate: '2024-05-31',
                scope: 'Environmental management for waste processing services',
                accreditationBody: 'UKAB',
            }
        }
    }

    if (normalizedCertNumber.startsWith('CERT-003') || normalizedCertNumber.startsWith('UK-ISMS')) {
        return {
            success: true,
            data: {
                certificateNumber: normalizedCertNumber,
                organizationName: organizationName || 'SecureData Technologies',
                certificationStandard: 'ISO 27001:2022',
                status: 'Valid',
                issueDate: '2023-09-10',
                expiryDate: '2026-09-09',
                scope: 'Information security management for cloud services',
                accreditationBody: 'UKAB',
            }
        }
    }

    if (normalizedCertNumber.startsWith('CERT-004') || normalizedCertNumber.startsWith('UK-OHS')) {
        return {
            success: true,
            data: {
                certificateNumber: normalizedCertNumber,
                organizationName: organizationName || 'BuildRight Construction',
                certificationStandard: 'ISO 45001:2018',
                status: 'Suspended',
                issueDate: '2022-11-20',
                expiryDate: '2025-11-19',
                scope: 'Occupational health and safety for construction projects',
                accreditationBody: 'UKAB',
            }
        }
    }

    // Certificate not found
    return {
        success: false,
        error: 'NOT_FOUND',
        message: 'No certificate found with the provided details.'
    }
}
