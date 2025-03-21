// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="container h-screen overflow-hidden">
            <div className="row h-screen bg-black text-white">

                {/* Image Section */}
                <div className="col-md-4 d-flex justify-center align-items-center">
                    <div className="position-relative">
                        {/* Yellow Border Layer */}
                        <div
                            className="border-custom-radius border-layer position-absolute top-0 start-0 w-100 h-100 border-4 border-yellow-500 rounded-tr-3xl rounded-br-3xl"
                        ></div>

                        {/* Image */}
                        <Image
                            src="/images/dark.jpg"
                            alt="Steve Milner"
                            width={400} // Adjust for best fit
                            height={500} // Adjust for best fit
                            className="relative z-10  image-border rounded-tr-3xl rounded-br-3xl"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="col-md-8 d-flex justify-content-center align-items-center" style={{ paddingLeft: '85px' }}>
                    <div className="text-start">
                        <h1 className="text-6xl font-bold text-yellow-500">I'M PRINCE </h1>
                        <h2 className="text-4xl font-bold">Software Developer</h2>
                        <p className="mt-4 text-gray-400">
                            I'm a Tunisian-based web designer & front-end developer focused on crafting
                            clean & user-friendly experiences. I am passionate about building excellent
                            software that improves the lives of those around me.
                        </p>
                       

                        <button className="button">
                            <p className="title">Hire Me!</p>
                            <Image className="button-img"
                                src="/images/Handshake.png"
                                alt="Handshake"
                                width={50}
                                height={30}
                            />
                            <p className="description">Enjoy Unlimited<br />Benefits</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
