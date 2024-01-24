import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Catalog = () => {

    const data = [
        {
            id: 1,
            bean: 'Cubita',
            desctipsion: 'Cubita Coffee is sun dried and hand sorted. It orignates from an elevation of over 2000 meters in the Andes Mountains of Ecuador, which is located closest to the sun on the Ecuador. Superb aroma and rich Flavor.',
            price: '$12.00',
        },
        {
            id: 2,
            bean: ' Colombian Supremo',
            desctipsion: 'This smooth, full-flavored coffee from Colombia boasts a sweet delicate aroma and a rich balanced flavor. A classic coffee appropriate for any occasion.',
            price: '$13.50',
        },
        {
            id: 3,
            bean: 'Pure Kona Fancy',
            desctipsion: 'Grown in the Big Island of Hawai, this coffee is known for its tantalizing aroma. This medium bodied brew offers a rich flavor with subtle winery tones.',
            price: '$15.90',
        },
        {
            id: 4,
            bean: 'Kenyan',
            desctipsion: 'he complex coffee from the highlands of East Africa features a winey, full flavor coupled with an intriguing aroma. A delightfully delicate selection for coffee lovers.',
            price: '$24.00',
        },
        {
            id: 5,
            bean: 'Costa Rican',
            desctipsion: 'Arabicas normally set aside for the demanding Nothern European market produce this lively, well-balanced coffee distinguished by its snappy, clean taste.',
            price: '$12.30',
        },
        {
            id: 6,
            bean: 'Kona Peaberry',
            desctipsion: 'occationally coffee fruit produces a single, rather than a double, bean. These "peaberries" provide all the flavor and aroma of their larger, regular cousins, but in a smaller package.',
            price: '$10.00',
        },
        {
            id: 7,
            bean: 'Sumatra',
            desctipsion: 'The wonderful cocoa-like finish of this smooth, full-boodied coffee is reminiscent of rich, dark chocolate. Its unique characteristics can only be captured from the rich soils of this isle of Indonesia.',
            price: '$9.50',
        },
        {
            id: 8,
            bean: 'Kona Blend',
            desctipsion: '25% Kona, 25% Sumatra and 50% Colombian. This combination unites the fragrant aroma of Kona with the full body of Sumatra and the dry snap of Colombian.',
            price: '$12.15',
        },
        {
            id: 9,
            bean: 'Kona Espresso',
            desctipsion: 'Some like it dark roasted to give it the smokey, bittersweet tan that espresso drinkers crave.',
            price: '$13.00',
        },
        {
            id: 10,
            bean: 'Italian Roast',
            desctipsion: 'Roasted in the Southern Italian tradition, this blodly flavored dark roast is a perfect choice for either a hearty cup of drip coffee or a shot of espresso.',
            price: '$11.90',
        },
    ]

    return (
        <>
        <Header />
        
            <form className="w-full my-8">
                <table className="mx-4">
                    <thead>
                    <tr>
                        <td className="px-2 text-center">
                            Bean
                        </td>
                        <td className="px-2 text-center">
                            Description
                        </td>
                        <td className="px-2 text-center">
                            price/unit
                        </td>
                    </tr>
                    </thead>
                    {data.map((item) => (
                    <tbody>
                        <tr>
                            <td className="px-2">
                                {item.bean}
                            </td>
                            <td className="px-2">
                                {item.desctipsion}
                            </td>
                            <td className="px-2">
                                {item.price}
                            </td>
                        </tr>
                        
                    </tbody>
                    ))}
                </table>
            </form>
        <Footer />
        </>
    )
}

export default Catalog;