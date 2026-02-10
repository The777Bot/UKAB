import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CertificateSearch from './components/CertificateSearch'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <CertificateSearch />
                <InfoSection />
            </main>
            <Footer />
        </div>
    )
}

export default App
