//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RealTors from "./components/RealTors";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return(
        <div className="container">
            <Sidebar />

            <Header />
            <RealTors />
            <Component {...pageProps} />

            <Footer />
        </div>
    )
}