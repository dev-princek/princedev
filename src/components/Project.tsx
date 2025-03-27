"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

const Project = () => {
    const [activeTab, setActiveTab] = useState<ProjectCategory>('web');

    const projects: Record<ProjectCategory, { title: string; image: string; link: string }[]> = {
        all: [
            { title: 'Web Project 1', image: '/images/web_project1.jpg', link: 'https://example.com/web1' },
            { title: 'Web Project 2', image: '/images/web_project2.jpg', link: 'https://example.com/web2' },
            { title: 'Web Project 3', image: '/images/web_project3.jpg', link: 'https://example.com/web3' },
            { title: 'Mobile App 1', image: '/images/web_project4.jpg', link: 'https://example.com/mobile1' },
            { title: 'Mobile App 2', image: '/images/web_project5.jpg', link: 'https://example.com/mobile2' },
            { title: 'Design Project 1', image: '/images/web_project1.jpg', link: 'https://example.com/design1' },
            { title: 'Design Project 2', image: '/images/web_project3.jpg', link: 'https://example.com/design2' }
        ],
        web: [
            { title: 'Web Project 1', image: '/images/web_project1.jpg', link: 'https://example.com/web1' },
            { title: 'Web Project 2', image: '/images/web_project2.jpg', link: 'https://example.com/web2' },
            { title: 'Web Project 3', image: '/images/web_project3.jpg', link: 'https://example.com/web3' }
        ],
        mobile: [
            { title: 'Mobile App 1', image: '/images/web_project4.jpg', link: 'https://example.com/mobile1' },
            { title: 'Mobile App 2', image: '/images/web_project5.jpg', link: 'https://example.com/mobile2' }
        ],
        design: [
            { title: 'Design Project 1', image: '/images/web_project1.jpg', link: 'https://example.com/design1' },
            { title: 'Design Project 2', image: '/images/web_project3.jpg', link: 'https://example.com/design2' }
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
                                    <img src={project.image} alt={project.title} className="card-img-top" />
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
