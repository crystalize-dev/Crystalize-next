'use client';
import React from 'react';
import Section from '@/app/components/Section';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Section id={'projects'}>
            <div className={'flex h-full w-full flex-col'}>
                <motion.h1
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    className={'mb-8 text-center text-6xl text-main'}
                >
                    Projects
                </motion.h1>
            </div>
        </Section>
    );
};

export default Projects;
