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
        <section id="about" className="py-24 bg-white">
            <div className="container-section">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
                        Why Verify?
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Why Certificate Verification Matters
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Verifying certifications is essential for maintaining trust and ensuring quality in business relationships
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-14 h-14 bg-white text-primary-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                                    {reason.icon}
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{reason.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200">
                        <span className="bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
                            Need help?
                        </span>
                        <span className="px-4 text-sm text-slate-600">
                            Contact our support team for assistance <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection
