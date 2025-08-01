import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    type = 'button',
    icon : Icon
}: ButtonProps) => {
    const baseClasses = 'font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center';

    const variantClasses = {
        primary: 'bg-[#FC004E] text-white hover:bg-[#E91E63] focus:ring-pink-500 shadow-custom',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            {Icon && <Icon />}
        </button>
    );
};

export default Button;