import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <div className="py-8">
                <div className="pb-4">
                    <h4 className="font-bold">Bean of the Day</h4>
                    <p>Cubita</p>
                </div>
                <div className="pb-4">
                    <h4 className="font-bold">Sale Price</h4>
                    <p>$11.00</p>
                </div>
                <div className="pb-4">
                    <h4 className="font-bold">Description</h4>
                    <p>Cubita Coffee is sun dried and hand sorted. It originates from an elevation of over 2000 meters in the Andes Mountains of Ecuador, which is located closest to the sun on the Equator. Superb aroma and rich Flavor</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;