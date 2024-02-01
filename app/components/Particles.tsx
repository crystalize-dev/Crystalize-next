'use client';
//@ts-ignore
import 'particles.js/particles';
import { useEffect } from 'react';
//@ts-ignore
const particlesJS = window.particlesJS;

const Particles = () => {
    useEffect(() => {
        particlesJS.load('particles-js', '/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }, [])

    return (
            <div className={'w-full h-full'} id="particles-js"></div>
    );
};

export default Particles;