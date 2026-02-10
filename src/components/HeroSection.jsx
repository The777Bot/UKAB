function HeroSection() {
    return (
        <section className="relative bg-slate-900 pt-20 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
                            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            {/* Bloom Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-1000"></div>

            <div className="relative container-section text-center z-10">
                {/* Badge */}
                <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 animate-[fadeInUp_0.8s_ease-out_forwards] border border-white/10 bg-white/5 backdrop-blur-md text-primary-200"
                >
                    <span className="w-2 h-2 rounded-full bg-success-500 mr-2 animate-pulse"></span>
                    Official Verification Portal
                </div>

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
                        Trust through
                    </span>
                    Verification
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] leading-relaxed">
                    Access the definitive registry of UKAB accredited certifications.
                    Ensure validity, enforce quality, and build confidence.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                    <div className="flex items-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <svg className="w-5 h-5 text-success-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-slate-200">Instant Verification</span>
                    </div>
                    <div className="flex items-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="font-medium text-slate-200">Bank-Grade Security</span>
                    </div>
                    <div className="flex items-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <svg className="w-5 h-5 text-accent-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-medium text-slate-200">Recognized Globally</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
