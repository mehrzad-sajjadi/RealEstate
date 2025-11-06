//components
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import RealTors from "@/components/layout/RealTors";

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