 "use client";
import { useEffect } from 'react';
import Script from 'next/script';
const Custom = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursorinner = document.querySelector('.cursor2');
        const links = document.querySelectorAll('a');


        document.addEventListener('mousemove', function (e) {
            const x = e.clientX;
            const y = e.clientY;

            cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            cursorinner.style.left = `${x}px`;
            cursorinner.style.top = `${y}px`;

            createBubble(x, y); // Bubble creation function
        });

        function createBubble(x, y) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            document.body.appendChild(bubble);

            bubble.style.left = `${x}px`;
            bubble.style.top = `${y}px`;

            setTimeout(() => bubble.remove(), 1000);
        }

        document.addEventListener('mousedown', function () {
            cursor.classList.add('click');
            cursorinner.classList.add('cursorinnerhover');
        });

        document.addEventListener('mouseup', function () {
            cursor.classList.remove('click');
            cursorinner.classList.remove('cursorinnerhover');
        });

        links.forEach(item => {
            item.addEventListener('mouseover', () => {
                cursor.classList.add('hover');
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
        document.querySelector('.menu-btn').addEventListener('click', function () {
            document.querySelector('.menu-items').classList.toggle('active');
        });
        
 
    }, []);

    return (
        <>
        <Script
                src="/assets/js/customScript.js"
                strategy="afterInteractive" // Ensures the script runs after the page is fully loaded
            />
            <div className="cursor"></div>
            <div className="cursor2"></div> 
             
        </>
    );
};

export default Custom;




