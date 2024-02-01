import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const MainButton = ({ children, ...props }: ButtonProps) => {
    const { className, ...propsWithoutClass } = props;

    return (
        <button
            className={
                'cursor-pointer rounded-full border-2 border-solid border-transparent bg-main px-5 py-3 text-white transition-all hover:border-main hover:bg-transparent hover:text-white ' +
                className
            }
            {...propsWithoutClass}
        >
            {children}
        </button>
    );
};

export default MainButton;