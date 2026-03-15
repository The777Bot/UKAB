function AboutSection() {
    return (
        <section id="about-ukab" className="py-20 bg-white">
            <div className="container-section max-w-4xl mx-auto">
                {/* Bordered info card */}
                <div className="border-2 border-primary-100 rounded-2xl p-10 text-center shadow-sm bg-primary-50/30">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
                        Who We Are
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-3">
                        United Kingdom Accreditation Board
                    </h2>
                    {/* Short tagline — moved from header */}
                    <p className="text-primary-500 font-semibold text-base tracking-wide mb-6">
                        We assess and accredit organisations that provide services including
                        certification, testing, inspection, calibration, validation and verification.
                    </p>
                    <div className="w-16 h-0.5 bg-primary-200 mx-auto mb-6" />
                    <p className="text-primary-700 text-lg leading-relaxed max-w-2xl mx-auto mb-5">
                        UKAB is an independent accreditation board operating in the United Kingdom.
                        We evaluate organisations against internationally recognised standards and
                        accredit those who demonstrate the required level of technical competence,
                        impartiality, and integrity.
                    </p>
                    <p className="text-primary-600 text-base leading-relaxed max-w-2xl mx-auto">
                        Our mission is to foster confidence in the quality and reliability of products
                        and services that businesses and individuals depend on every day — upholding the
                        highest standards of conformity assessment across the UK and internationally.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
