import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const MainButton = ({ children, ...props }: ButtonProps) => {
    const { className, ...propsWithoutClass } = props;

    return (
        <button
            className={'bg-main text-white py-3 px-5 rounded-full cursor-pointer border-2 border-solid border-transparent hover:border-main hover:bg-transparent hover:text-white transition-all ' + className} {...propsWithoutClass}>
            {children}
        </button>
    );
};

export default MainButton;