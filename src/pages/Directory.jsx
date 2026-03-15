import CertificateSearch from '../components/CertificateSearch'

function Directory() {
    return (
        <section className="min-h-screen bg-slate-50 pt-12 pb-24">
            <div className="container-section max-w-3xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-4">
                        Certificate Directory
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">
                        Find an Accredited Organisation
                    </h1>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Enter a certificate number to verify whether an organisation is accredited
                        by UKAB and view the full details of their certification.
                    </p>
                </div>

                {/* Search */}
                <CertificateSearch />
            </div>
        </section>
    )
}

export default Directory
