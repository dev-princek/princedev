import React from 'react';
import {LocationOn, Phone, Email, Send } from "@mui/icons-material"; 
const ContactUs = () => {
    return (
        <div className="container h-screen  mt-5">
             <h1 className="text-4xl font-bold text-center text-white">CONTACT <span className="text-yellow-500">US</span></h1>
        <div className="row bg-black text-white py-10 px-5 gx-10 gy-10 mt-5" >
       
                <div className="col-md-6 ">
                    <h2 className="text-4xl font-bold mb-4">DON'T BE SHY!</h2>
                    <p className="mb-6">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-yellow-500"><LocationOn /></span>
                            <p><strong>123 Street New York City, United States Of America 750065.</strong></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-yellow-500"><Email /></span>
                            <p><strong>steve@mail.com</strong></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-yellow-500"><Phone /></span>
                            <p><strong>+216 21 184 010</strong></p>
                        </div>
                    </div>
                </div>
                <div  className="col-md-6">
                    <div className="row">
                         <form className="space-y-4">
                            <div className="col-md-12">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="p-3 w-full bg-gray-800 text-white rounded-lg" />
                            <input type="email" placeholder="Your Email" className="p-3 w-full bg-gray-800 text-white rounded-lg" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <input type="text" placeholder="Your Subject" className="p-3 w-full bg-gray-800 text-white rounded-lg" />
                        </div>
                     
                        <div className="col-md-12">
                               <textarea placeholder="Your Message" rows="5" className="p-3 w-full bg-gray-800 text-white rounded-lg"></textarea>
                        </div>
                     
                        <div className="col-md-12">
                        <button type="submit" className="bg-yellow-500 text-black py-3 px-6 rounded-lg flex items-center gap-2">
                            SEND MESSAGE <span><Send /></span>
                        </button>
                        </div>
                       
                    </form>

                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
