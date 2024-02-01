import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    children?: React.ReactNode;
}

const Section = ({ id, children, ...props }: SectionProps) => {
    const { className, ...otherProps } = props;

    return (
        <section
            {...otherProps}
            id={id}
            className={
                'min-w-screen max-w-screen h-screen max-h-screen min-h-screen w-screen px-8 py-8 lg:py-14 ' +
                className
            }
        >
            {children}
        </section>
    );
};

export default Section;