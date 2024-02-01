'use client';
import React from 'react';
import Section from '@/app/components/Section';
import Image from 'next/image';
import MainButton from '@/app/components/UI/Buttons/MainButton';
import Link from 'next/link';
import TypingText from '@/app/components/utility/TypingText/TypingText';

const Main = () => {
    return (
        <Section id={'home'}>
            <div
                className={'max-w-screen h-full flex justify-end items-end lg:justify-center lg:items-center lg:flex-row flex-col-reverse gap-8'}>
                <div className={'w-full h-fit px-16 flex flex-col items-start gap-8'}>
                    <TypingText text={'Front-end developer'}
                                className={'z-20 font-bold text-white text-center lg:text-start text-4xl lg:text-6xl'} />
                    <p
                        className={'z-20 text-zinc-500 text-balance lg:text-start'}>Welcome to my React
                        Front-end Developer
                        Portfolio! Elevate your digital presence with cutting-edge web experiences. Based in Moscow, I
                        specialize in crafting dynamic and responsive user interfaces. Explore my projects and witness
                        the fusion of creativity and technology, bringing ideas to life through the power of React.
                        Let&apo;s build something extraordinary together!
                    </p>
                    <div
                        className={'z-20 lg:mx-[unset] mx-auto'}>
                        <Link href={'#projects'}><MainButton>Check out my projects</MainButton></Link>
                    </div>
                </div>
                <div className={'w-full h-fit flex items-center justify-center'}>
                    <div
                        className={'animateBubble relative w-72 z-20 h-72 rounded-full overflow-hidden bg-gradient bg-main'}>
                        <Image src={'/me.png'} alt={'My Photo'} width={250} height={250} draggable={false}
                               className={'object-contain object-bottom w-full h-full'} />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Main;