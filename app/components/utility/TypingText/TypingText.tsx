import React from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import CursorBlinker from '@/app/components/utility/TypingText/CursorBlinker';

interface TypingProps {
    text: string;
    duration?: number;
    className?: string;
}

const TypingText = ({ text, duration = 2, className }: TypingProps) => {
    const animationDuration = duration;

    const baseText = text;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    React.useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: 'tween', // Not really needed because adding a duration will force "tween"
            duration: animationDuration,
            ease: 'easeInOut'
        });
        return controls.stop;
    }, [animationDuration, baseText.length]);

    return (
        <span className={className}>
            <motion.span>{displayText}</motion.span>
            <CursorBlinker />
        </span>
    );
};

export default TypingText;