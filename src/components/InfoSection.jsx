function InfoSection() {
    const reasons = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Ensure Authenticity',
            description: 'Confirm that certificates are genuine and have been issued by accredited certification bodies.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Check Validity',
            description: 'Verify that certifications are current and have not expired or been suspended.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Protect Your Business',
            description: 'Make informed decisions when selecting suppliers, partners, or service providers.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: 'Regulatory Compliance',
            description: 'Meet due diligence requirements and demonstrate compliance with industry standards.'
        }
    ]

    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container-section">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Why Certificate Verification Matters
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Verifying certifications is essential for maintaining trust and ensuring quality in business relationships
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-200 transition-colors"
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                                    {reason.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center p-4 bg-primary-50 rounded-lg border border-primary-100">
                        <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm text-primary-700">
                            <strong>Need help?</strong> Contact our support team for assistance with certificate verification.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection
