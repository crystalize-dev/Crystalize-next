import React from 'react';
import { icons, IconsType } from '@/app/components/Icon/icons-database';
import { motion } from 'framer-motion';

interface IconProps {
    icon: keyof IconsType,
    size?: number
    className?: string
    onClick?: (param?: unknown) => void
}

const Icon = ({ icon, className, size = 8, onClick }: IconProps) => {
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor"
                    onClick={onClick}
                    className={`w-${size} max-w-${size} min-w-${size} max-h-${size} min-h-${size} h-${size} ${className && className}`}>
            <motion.path strokeLinecap="round" className={'pointer-events-none'} strokeLinejoin="round"
                         d={icons[icon]} />
        </motion.svg>

    );
};

export default Icon;