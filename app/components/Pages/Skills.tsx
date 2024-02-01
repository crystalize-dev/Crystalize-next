'use client';
import React from 'react';
import Section from '@/app/components/Section';
import { motion } from 'framer-motion';
import SkillCard from '@/app/components/Cards/SkillCard';
import { skills } from '@/app/global-data';

const Skills = () => {
    return (
        <Section id={'skills'}>
            <div className={'flex h-full w-full flex-col'}>
                <motion.h1
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    className={'mb-8 text-center text-6xl text-main'}
                >
                    My skills
                </motion.h1>
                <div
                    className={
                        'mx-auto grid w-fit grow grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-4'
                    }
                >
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.title}
                            image={skill.image}
                            title={skill.title}
                            index={index}
                            progress={skill.progress}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
