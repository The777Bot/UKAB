import { Link } from 'react-router-dom'

function AccredVsCert() {
    const items = [
        {
            side: 'accreditation',
            title: 'Accreditation',
            color: 'primary',
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            points: [
                'Granted to <strong>certification bodies, labs & inspection bodies</strong>',
                'Confirms competence to <strong>assess others</strong>',
                'Awarded by a national accreditation body (e.g. UKAB)',
                'Based on international standards such as <strong>ISO/IEC 17021, ISO 17025</strong>',
                'Gives confidence that <strong>certifiers are qualified</strong> to certify',
            ],
        },
        {
            side: 'certification',
            title: 'Certification',
            color: 'accent',
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            points: [
                'Granted to <strong>companies & organisations</strong>',
                'Confirms conformance to a <strong>specific standard</strong> (e.g. ISO 9001)',
                'Awarded by an accredited certification body',
                'Based on management system or product standards',
                'Gives confidence that <strong>products/services meet requirements</strong>',
            ],
        },
    ]

    return (
        <section className="py-24 bg-slate-50">
            <div className="container-section">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
                        Understand the Difference
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Accreditation <span className="text-primary-500">vs</span> Certification
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg">
                        Two related but distinct concepts that form the backbone of quality assurance.
                    </p>
                </div>

                {/* Cards + VS divider */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-4xl mx-auto">
                    {/* Accreditation Card */}
                    <div className="flex-1 bg-white rounded-2xl md:rounded-r-none border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-primary-50 text-primary-600">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Accreditation</h3>
                        <ul className="space-y-3">
                            {['Granted to <strong>certification bodies, labs & inspection bodies</strong>',
                              'Confirms competence to <strong>assess others</strong>',
                              'Awarded by a national accreditation body (e.g. UKAB)',
                              'Based on international standards such as <strong>ISO/IEC 17021, ISO 17025</strong>',
                              'Gives confidence that <strong>certifiers are qualified</strong> to certify',
                            ].map((pt, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-500" />
                                    <span className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: pt }} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* VS divider */}
                    <div className="flex md:flex-col items-center justify-center py-4 md:py-0 px-0 md:px-2 z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-lg flex-shrink-0">
                            VS
                        </div>
                    </div>

                    {/* Certification Card */}
                    <div className="flex-1 bg-white rounded-2xl md:rounded-l-none border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-amber-50 text-amber-600">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Certification</h3>
                        <ul className="space-y-3">
                            {['Granted to <strong>companies & organisations</strong>',
                              'Confirms conformance to a <strong>specific standard</strong> (e.g. ISO 9001)',
                              'Awarded by an accredited certification body',
                              'Based on management system or product standards',
                              'Gives confidence that <strong>products/services meet requirements</strong>',
                            ].map((pt, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-amber-500" />
                                    <span className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: pt }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 text-lg font-medium mb-4">
                        Ready to get accredited or verify an existing certificate?
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/directory"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-primary-500/30"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Verify a Certificate
                        </Link>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-200 hover:border-primary-400 text-slate-700 hover:text-primary-600 font-semibold rounded-xl transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccredVsCert
