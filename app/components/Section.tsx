import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string,
    children?: React.ReactNode
}

const Section = ({ id, children, ...props }: SectionProps) => {
    const { className, ...otherProps } = props;

    return (
        <section {...otherProps} id={id}
                 className={'lg:py-14 px-8 py-8 min-w-screen w-screen min-h-screen h-screen max-w-screen max-h-screen ' + className}>
            {children}
        </section>
    );
};

export default Section;