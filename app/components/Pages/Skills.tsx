import React from 'react';
import Section from '@/app/components/Section';
import SkillCard from '@/app/components/Cards/SkillCard';

const Skills = () => {
    return (
        <Section id={'skills'}>
            <div className={'w-full h-full flex flex-col'}>
                <h1 className={'text-center text-6xl text-main mb-8'}>My skills</h1>
                <div className={'w-full grow gap-4 grid grid-cols-4'}>
                    <SkillCard image={'/skills/next.png'} title={'NextJS'} />
                    <SkillCard image={''} title={''} />
                    <SkillCard image={''} title={''} />
                    <SkillCard image={''} title={''} />
                    <SkillCard image={''} title={''} />
                    <SkillCard image={''} title={''} />
                    <SkillCard image={''} title={''} />
                    <SkillCard image={''} title={''} />
                </div>
            </div>
        </Section>
    );
};

export default Skills;