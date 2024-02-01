'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
    image: string,
    title: string
}

const SkillCard = ({ image, title }: CardProps) => {
    return (
        <motion.div className={'w-full h-full bg-zinc-800 shadow-lg flex items items-center justify-center z-20'}>
            <div className={'w-36 h-36 '}>
                <Image src={image} alt={'Skill logo'} width={250} height={250} className={'object-contain'} />
                <h1 className={'text-center text-white text-3xl'}>{title}</h1>
            </div>
        </motion.div>
    );
};

export default SkillCard;