import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string,
    children?: React.ReactNode
}

const Section = ({id, children}: SectionProps) => {
    return (
        <section id={id} className={'w-full min-h-screen'}>
            {children}
        </section>
    );
};

export default Section;