function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
            <div className="container-section text-center">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Official Verification Portal
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Certificate Verification
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    Verify the authenticity of certification records issued by UKAB accredited bodies
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Secure & Reliable
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Real-time Verification
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Official Records
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
