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
                className={
                    'max-w-screen flex h-full flex-col-reverse items-end justify-end gap-8 lg:flex-row lg:items-center lg:justify-center'
                }
            >
                <div
                    className={
                        'flex h-fit w-full flex-col items-start gap-8 px-16'
                    }
                >
                    <TypingText
                        text={'Front-end developer'}
                        className={
                            'z-20 text-center text-4xl font-bold text-white lg:text-start lg:text-6xl'
                        }
                    />
                    <p
                        className={
                            'z-20 text-balance text-zinc-500 lg:text-start'
                        }
                    >
                        Welcome to my React Front-end Developer Portfolio!
                        Elevate your digital presence with cutting-edge web
                        experiences. Based in Moscow, I specialize in crafting
                        dynamic and responsive user interfaces. Explore my
                        projects and witness the fusion of creativity and
                        technology, bringing ideas to life through the power of
                        React. Let&apo;s build something extraordinary together!
                    </p>
                    <div className={'z-20 mx-auto lg:mx-[unset]'}>
                        <Link href={'#projects'}>
                            <MainButton>Check out my projects</MainButton>
                        </Link>
                    </div>
                </div>
                <div
                    className={'flex h-fit w-full items-center justify-center'}
                >
                    <div
                        className={
                            'animateBubble bg-gradient relative z-20 h-72 w-72 overflow-hidden rounded-full bg-main'
                        }
                    >
                        <Image
                            src={'/me.png'}
                            alt={'My Photo'}
                            width={250}
                            height={250}
                            draggable={false}
                            className={
                                'h-full w-full object-contain object-bottom'
                            }
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Main;