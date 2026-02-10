function ResultsDisplay({ result }) {
    if (!result) return null

    // Handle not found case
    if (!result.success) {
        return (
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">No Certificate Found</h3>
                        <p className="mt-1 text-gray-600">{result.message}</p>
                        <p className="mt-3 text-sm text-gray-500">
                            Please check the certificate number and try again. If you believe this is an error,
                            please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const { data } = result

    // Status styling configuration
    const statusConfig = {
        Valid: {
            bgColor: 'bg-success-50',
            borderColor: 'border-success-200',
            textColor: 'text-success-700',
            badgeBg: 'bg-success-500',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            )
        },
        Expired: {
            bgColor: 'bg-warning-50',
            borderColor: 'border-warning-100',
            textColor: 'text-warning-600',
            badgeBg: 'bg-warning-500',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            )
        },
        Suspended: {
            bgColor: 'bg-danger-50',
            borderColor: 'border-danger-200',
            textColor: 'text-danger-700',
            badgeBg: 'bg-danger-500',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            )
        },
        Invalid: {
            bgColor: 'bg-danger-50',
            borderColor: 'border-danger-200',
            textColor: 'text-danger-700',
            badgeBg: 'bg-danger-500',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            )
        }
    }

    const config = statusConfig[data.status] || statusConfig.Invalid

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    return (
        <div className={`mt-8 ${config.bgColor} ${config.borderColor} border-2 rounded-xl overflow-hidden`}>
            {/* Status Banner */}
            <div className={`${config.badgeBg} px-6 py-4 flex items-center justify-between`}>
                <div className="flex items-center text-white">
                    {config.icon}
                    <span className="ml-3 text-lg font-semibold">Certificate Status: {data.status}</span>
                </div>
                <span className="text-white text-sm opacity-90">
                    Verified on {new Date().toLocaleDateString('en-GB')}
                </span>
            </div>

            {/* Certificate Details */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Certificate Number */}
                    <div>
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Certificate Number</dt>
                        <dd className="mt-1 text-lg font-semibold text-gray-900">{data.certificateNumber}</dd>
                    </div>

                    {/* Organization */}
                    <div>
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Organization</dt>
                        <dd className="mt-1 text-lg font-semibold text-gray-900">{data.organizationName}</dd>
                    </div>

                    {/* Certification Standard */}
                    <div>
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Certification Standard</dt>
                        <dd className="mt-1 text-lg font-semibold text-gray-900">{data.certificationStandard}</dd>
                    </div>

                    {/* Accreditation Body */}
                    <div>
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Accreditation Body</dt>
                        <dd className="mt-1 text-lg font-semibold text-gray-900">{data.accreditationBody}</dd>
                    </div>

                    {/* Issue Date */}
                    <div>
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Issue Date</dt>
                        <dd className="mt-1 text-lg text-gray-900">{formatDate(data.issueDate)}</dd>
                    </div>

                    {/* Expiry Date */}
                    <div>
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Expiry Date</dt>
                        <dd className={`mt-1 text-lg font-semibold ${data.status === 'Expired' ? 'text-warning-600' : 'text-gray-900'}`}>
                            {formatDate(data.expiryDate)}
                        </dd>
                    </div>

                    {/* Scope - Full Width */}
                    <div className="md:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">Scope of Certification</dt>
                        <dd className="mt-1 text-gray-700">{data.scope}</dd>
                    </div>
                </div>

                {/* Status specific messages */}
                {data.status === 'Expired' && (
                    <div className="mt-6 p-4 bg-warning-100 rounded-lg">
                        <p className="text-warning-700 text-sm">
                            <strong>Note:</strong> This certificate has expired. Please contact the organization for current certification status.
                        </p>
                    </div>
                )}

                {data.status === 'Suspended' && (
                    <div className="mt-6 p-4 bg-danger-100 rounded-lg">
                        <p className="text-danger-700 text-sm">
                            <strong>Warning:</strong> This certificate is currently suspended. The organization may not be meeting certification requirements.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResultsDisplay
