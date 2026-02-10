import { useState } from 'react'
import { verifyCertificate } from '../api/certificateApi'
import ResultsDisplay from './ResultsDisplay'

function CertificateSearch() {
    const [certificateNumber, setCertificateNumber] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Reset previous state
        setError('')
        setResult(null)

        // Validation
        if (!certificateNumber.trim()) {
            setError('Please enter a certificate number')
            return
        }

        setIsLoading(true)

        try {
            const response = await verifyCertificate(certificateNumber)
            setResult(response)
        } catch (err) {
            setError('An error occurred while verifying the certificate. Please try again.')
            console.error('Verification error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleReset = () => {
        setCertificateNumber('')

        setResult(null)
        setError('')
    }

    return (
        <section id="verify" className="py-16 bg-white">
            <div className="container-section">
                <div className="max-w-2xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                            Verify a Certificate
                        </h2>
                        <p className="text-gray-600">
                            Enter the certificate details below to verify its authenticity
                        </p>
                    </div>

                    {/* Search Form */}
                    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
                        <div className="space-y-5">
                            {/* Certificate Number Input */}
                            <div>
                                <label
                                    htmlFor="certificateNumber"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Certificate Number <span className="text-danger-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="certificateNumber"
                                    value={certificateNumber}
                                    onChange={(e) => setCertificateNumber(e.target.value)}
                                    placeholder="Enter Certificate Number (e.g., CERT-001, UK-QMS-12345)"
                                    className="input-field"
                                    disabled={isLoading}
                                    aria-describedby={error ? 'cert-error' : undefined}
                                />
                            </div>



                            {/* Error Message */}
                            {error && (
                                <div
                                    id="cert-error"
                                    className="flex items-center p-4 bg-danger-50 border border-danger-200 rounded-lg text-danger-700"
                                    role="alert"
                                >
                                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn-primary flex-1 flex items-center justify-center"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Verifying...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            Verify Certificate
                                        </>
                                    )}
                                </button>

                                {(result || error) && (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>

                    {/* Results Display */}
                    {result && <ResultsDisplay result={result} />}
                </div>
            </div>
        </section>
    )
}

export default CertificateSearch
