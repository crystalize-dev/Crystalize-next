import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DirectionType, getDirection } from './getDirection';

interface IProps {
    children: React.ReactNode;
    hint: string;
    className?: string;
    direction: DirectionType;
    breakWord?: boolean;
}

export default function WithHint({
    hint,
    direction,
    children,
    className,
    breakWord
}: IProps) {
    const [isHover, setHover] = React.useState(false);

    const directionObj = getDirection(direction);

    className = className ? ' ' + className : '';

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={
                `relative flex  h-fit w-fit items-center capitalize ${directionObj.align}` +
                className
            }
        >
            {children}

            <AnimatePresence initial={false}>
                {isHover && (
                    <motion.h1
                        initial={'hidden'}
                        exit={'hidden'}
                        animate={'visible'}
                        variants={directionObj.variants}
                        className={`${
                            directionObj.margin
                        } dark:bg-darker-bg pointer-events-none absolute z-40 h-fit w-fit select-none whitespace-nowrap rounded-lg !bg-black px-3 py-1 font-semibold text-zinc-400 shadow-lg ${
                            breakWord ? '!whitespace-pre' : ''
                        }`}
                    >
                        {hint}
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
}