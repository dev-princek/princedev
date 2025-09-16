// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
       
            <div className="row h-screen text-white">

                {/* Image Section */}
                <div className="col-md-4 d-flex justify-center align-items-center">
                    <div className="position-relative">
                        {/* Yellow Border Layer */}
                        <div
                            className="border-custom-radius border-layer position-absolute top-0 start-0 w-100 h-100 border-4 border-yellow-500 rounded-tr-3xl rounded-br-3xl"
                        ></div>

                        {/* Image */}
                        <Image
                            src="/images/profile.jpg"
                            alt="Steve Milner"
                            width={400} // Adjust for best fit
                            height={500} // Adjust for best fit
                            className="relative z-10  image-border rounded-tr-3xl rounded-br-3xl"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="col-md-8 mt-5 d-flex justify-content-center align-items-center" style={{ paddingLeft: '85px' }}>
                    <div className="text-start">
                        <h1 className="text-6xl font-bold text-yellow-500">I'M PRINCE </h1>
                        <h2 className="text-4xl font-bold">Software Developer</h2>
                        <p className="mt-4 text-gray-400">
                            A full-stack software developer with 5+ years of experience in Laravel, PHP, Wordpress, Next.js, 
                            and Python, Django. I specialize in building clean, scalable, and user-friendly web applications that solve real business problems.
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
        
    );
};

export default Hero;
