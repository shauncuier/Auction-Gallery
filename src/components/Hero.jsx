import React from "react";

const Hero = () => {
    return (
        <div className='hero-overlay bg-[url("https://i.ibb.co/DDsZgMdD/1998242776bc.jpg")] min-h-full lg:min-h-[730px] bg-cover bg-center bg-no-repeat relative flex justify-center flex-col text-white lg:px-[120px] p-20 lg:p-0'>
            <h1 className="sm:text-5xl text-2xl font-semibold">
                Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="py-6 font-light sm:text-2xl opacity-80">
                Discover rare collectibles, luxury goods, and vintage <br /> treasures
                in our curated auctions
            </p>
            <div>
                <button className="btn rounded-2xl">Explore Auctions</button>
            </div>
        </div>
    );
};

export default Hero;
