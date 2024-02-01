'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import WithHint from '@/app/components/utility/WithHint/WithHint';

interface CardProps {
    index: number;
    image: string;
    title: string;
    progress: number;
}

const SkillCard = ({ index, image, title, progress }: CardProps) => {
    return (
        <WithHint hint={title} direction={'bottom'}>
            <motion.div
                className={
                    'items z-20 flex h-40 w-40 items-center justify-center rounded-full bg-zinc-800 shadow-lg'
                }
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
            >
                <div className={'h-fit w-full overflow-hidden p-2'}>
                    <div
                        className={
                            'relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full'
                        }
                    >
                        <Image
                            src={image}
                            alt={'Skill logo'}
                            width={250}
                            height={250}
                            className={'h-20 w-20 object-contain'}
                        />
                        <CircularProgressbar
                            value={progress}
                            className={'absolute'}
                            styles={buildStyles({
                                rotation: 1,
                                strokeLinecap: 'round',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `var(--main)`,
                                trailColor: '#1f1f1f',
                                backgroundColor: 'transparent'
                            })}
                        />
                    </div>
                </div>
            </motion.div>
        </WithHint>
    );
};

export default SkillCard;
