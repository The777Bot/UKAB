function LocationMap() {
    return (
        <section id="location" className="py-20 bg-slate-50">
            <div className="container-section">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                        Visit Our Office
                    </h2>
                    <p className="text-slate-500">
                        We are located in New Town, Tasmania
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 h-96 w-full bg-slate-100 transform hover:scale-[1.01] transition-transform duration-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.87100420654!2d147.30723197595796!3d-42.854456871151235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e74e1fedf5011%3A0x20d946abb1f07491!2sFlat%202%2F44%20Bay%20Rd%2C%20New%20Town%20TAS%207008%2C%20Australia!5e0!3m2!1sen!2s!4v1732553742482!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="UKAB Location"
                        className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default LocationMap
