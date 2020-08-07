import React from 'react';
import {motion, useMotionValue} from 'framer-motion';

function Motion() {
    const x = useMotionValue(100);
    return (
        <motion.div style={{x,backgroundColor: "red", height : 100 + 'px', width: 200 + 'px'}}
        whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  
        />
    )
}

export default Motion;