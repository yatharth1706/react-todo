import React from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';

function Motion() {
    const x = useMotionValue(130);
    const y = useTransform(x,val => val*2);
    const xInput = [-200,-100,100,200];
    const opacityRange = [0,1,1,0];
    const opacity = useTransform(x,xInput,opacityRange);

    return (
        <motion.div style={{x, opacity, backgroundColor: "red", height : 100 + 'px', width: 200 + 'px'}}
        whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
        drag= "y"
        />
    )
}

export default Motion;