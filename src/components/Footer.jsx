function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container-section py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Organization Info */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white">UKAB</span>
                                <p className="text-xs text-gray-400">United Kingdom Accreditation Body</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Providing trusted certificate verification services for UK accredited certifications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#verify" className="hover:text-white transition-colors">
                                    Verify Certificate
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors">
                                    About Verification
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@ukab.org.uk" className="hover:text-white transition-colors">
                                    info@ukab.org.uk
                                </a>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+44 (0) 123 456 7890</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>London, United Kingdom</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-section py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                        <p className="text-gray-400">
                            © {currentYear} UKAB. All rights reserved.
                        </p>
                        <p className="text-gray-500 mt-2 sm:mt-0 text-xs max-w-lg text-center sm:text-right">
                            <strong>Disclaimer:</strong> This is a demonstration verification portal.
                            Certificate data shown is for illustrative purposes only.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
