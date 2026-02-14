import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', onClick, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.4 }}
            className={`card ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default Card;
