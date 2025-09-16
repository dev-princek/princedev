"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectCategory = 'all' | 'Laravel' | 'Django' | 'Wordpress'| 'NextJs';

const Project = () => {
    const [activeTab, setActiveTab] = useState<ProjectCategory>('all');

    const projects: Record<ProjectCategory, { title: string; image: string; link: string }[]> = {
        all: [
            { title: 'Arriveo', image: '/images/arriveo.png', link: '#' },
            { title: 'Dream Dezine Ecommerce', image: '/images/dreamdzine.png', link: '#' },
            { title: 'Growcart', image: '/images/growcart.png', link: '#' },
            { title: 'FinTrack', image: '/images/fintrack.png', link: '#' },
            { title: 'Elvations', image: '/images/elvations-wp.png', link: '#' }, 
            { title: 'Galmamadidoumbouya', image: '/images/galmamd.png', link: 'https://galmamadidoumbouya.com/' },
            { title: 'Dahiya Group', image: '/images/dahiya.png', link: 'https://dahiyagroup.com/' }
        ],
        Laravel: [
            { title: 'Arriveo', image: '/images/arriveo.png', link: 'https://example.com/web1' },
            { title: 'Dream Dezine Ecommerce', image: '/images/dreamdzine.png', link: 'https://dreamdzine.com/densu/' },
            { title: 'Growcart', image: '/images/growcart.png', link: 'https://example.com/web3' }
        ],
        Django: [
            { title: 'FinTrack', image: '/images/fintrack.png', link: 'https://example.com/mobile1' }
        ],
        
        Wordpress: [
            { title: 'Elvations', image: '/images/elvations-wp.png', link: 'https://dreamdzine.com/' },
            { title: 'Galmamadidoumbouya', image: '/images/galmamd.png', link: 'https://galmamadidoumbouya.com/' }
        ],
        NextJs: [
            { title: 'Dahiya Group', image: '/images/dahiya.png', link: 'https://dahiyagroup.com/' }
        ]
    };  

    return (
        <div className="row text-white py-5 px-3 mt-5">
            <h1 className="text-4xl font-bold text-center text-white">
                MY <span className="text-yellow-500">PORTFOLIO</span>
            </h1>
            <div className="text-center mb-4 gap-4 mt-5">
                <div className="btn-group" role="group">
                    {Object.keys(projects).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as ProjectCategory)}
                            className={`btn ${activeTab === tab ? 'btn-activeNow' : 'btn-secondary'}`}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row g-3">
                <AnimatePresence mode="wait">
                    {projects[activeTab].map((project, index) => (
                        <motion.div
                            key={index}
                            className="col-12 col-md-6 col-lg-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="card bg-dark text-white shadow-sm hover-overlay">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt={project.title} className="card-img-top projectimg" />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Project;
