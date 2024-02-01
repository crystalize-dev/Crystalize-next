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
            initial={{bottom: '1rem'}}
            animate={open ? { bottom: '1rem' } : { bottom: '-4rem' }}
            className={`fixed mx-auto rounded-full px-4 py-2 z-50 backdrop-blur-lg justify-center bg-black/15 flex items-center gap-4`}>

            <Icon onClick={() => setOpen(!open)} icon={'arrowUp'}
                  className={`active:!hover-105 hover:scale-110 transition-all absolute text-white cursor-pointer -top-0 -translate-y-full !max-w-8 !max-h-8 ${open && 'rotate-180'}`} />

            {
                options.map(option => <WithHint key={option.link} hint={option.link} direction={'top'}>
                    <motion.a href={'#' + option.link}
                              whileHover={{ scale: 1.1, boxShadow: '3px 3px 12px 3px rgba(0,0,0,0.1)' }}
                              initial={{ color: 'white' }}
                              className={'bg-main rounded-full min-w-12 min-h-12 max-h-12 max-w-12 flex items-center justify-center p-3'}>
                        <Icon
                            icon={option.icon} /></motion.a>
                </WithHint>)
            }
        </motion.nav>
    );
};

export default Navbar;