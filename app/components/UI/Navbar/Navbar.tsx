'use client';
import React, { useState } from 'react';
import { LinkType } from '@/app/types/LinkTypes';
import Icon from '@/app/components/Icon/Icon';
import { motion } from 'framer-motion';
import WithHint from '@/app/components/utility/WithHint/WithHint';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    options: Array<LinkType>;
}

const Navbar = ({ options }: NavbarProps) => {
    const [open, setOpen] = useState(true);

    return (
        <motion.nav
            initial={{ bottom: '1rem' }}
            animate={open ? { bottom: '1rem' } : { bottom: '-4rem' }}
            className={`fixed z-50 mx-auto flex items-center justify-center gap-4 rounded-full bg-black/15 px-4 py-2 backdrop-blur-lg`}
        >
            <Icon
                onClick={() => setOpen(!open)}
                icon={'arrowUp'}
                className={`active:!hover-105 absolute -top-0 !max-h-8 !max-w-8 -translate-y-full cursor-pointer text-white transition-all hover:scale-110 ${open && 'rotate-180'}`}
            />

            {options.map((option) => (
                <WithHint
                    key={option.link}
                    hint={option.link}
                    direction={'top'}
                >
                    <motion.a
                        href={'#' + option.link}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '3px 3px 12px 3px rgba(0,0,0,0.1)'
                        }}
                        initial={{ color: 'white' }}
                        className={
                            'flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-main p-3'
                        }
                    >
                        <Icon icon={option.icon} />
                    </motion.a>
                </WithHint>
            ))}
        </motion.nav>
    );
};

export default Navbar;