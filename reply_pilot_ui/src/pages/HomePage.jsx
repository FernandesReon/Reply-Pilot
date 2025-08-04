import Header from "../components/Header";
import PilotConsole from "../components/PilotConsole";
import Features from "../components/Features";
import Footer from "../components/Footer";

const HomePage = () => {
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <Header />
                {/* Main Content */}
                <PilotConsole />
                {/* Features */}
                <Features />
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;