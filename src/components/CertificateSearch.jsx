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
        <section id="verify" className="pb-20 bg-slate-50 relative">
            <div className="container-section">
                <div className="max-w-3xl mx-auto">
                    {/* Search Form Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-slate-100 relative z-20 -mt-24">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                Verify a Certificate
                            </h2>
                            <p className="text-slate-500">
                                Enter the certificate number to instantly validate its authenticity
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                {/* Certificate Number Input */}
                                <div className="relative group">
                                    <label
                                        htmlFor="certificateNumber"
                                        className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary-600 transition-colors"
                                    >
                                        Certificate Number <span className="text-danger-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            id="certificateNumber"
                                            value={certificateNumber}
                                            onChange={(e) => setCertificateNumber(e.target.value)}
                                            placeholder="e.g., CERT-001, UK-QMS-12345"
                                            className="input-field pl-10 py-3 text-lg"
                                            disabled={isLoading}
                                            aria-describedby={error ? 'cert-error' : undefined}
                                        />
                                    </div>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div
                                        id="cert-error"
                                        className="flex items-center p-4 bg-danger-50 border border-danger-100 rounded-xl text-danger-700 animate-[fadeInUp_0.3s_ease-out_forwards]"
                                        role="alert"
                                    >
                                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">{error}</span>
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="btn-primary flex-1 flex items-center justify-center text-lg py-3 shadow-lg shadow-primary-500/30"
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
                                            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Results Display */}
                    {result && (
                        <div className="mt-8 animate-[fadeInUp_0.5s_ease-out_forwards]">
                            <ResultsDisplay result={result} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CertificateSearch
