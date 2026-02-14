import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseClass} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
