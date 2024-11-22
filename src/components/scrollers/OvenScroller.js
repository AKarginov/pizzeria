import { useEffect, useState } from 'react';

export const OvenScroller = () => {
  const [ovenScrollerBlock, setOvenScrollerBlock] = useState(false);

  const scrollCounter = () => {
    if (window.scrollY >= 1000) {
      setOvenScrollerBlock(true);
    } else if
        (window.scrollY <= 1000)
        {
        setOvenScrollerBlock(false);  
        }
    
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollCounter);
  }, []);

  return ovenScrollerBlock;
};