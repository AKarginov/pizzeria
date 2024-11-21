import { useEffect, useState } from 'react';

export const RollingPizzaScroller = () => {
  const [scrollerBlock, setScrollerBlock] = useState(false);

  const scrollCounter = () => {
    if (window.scrollY >= 190) {
      setScrollerBlock(true);
    } else if
        (window.scrollY <= 190)
        {
        setScrollerBlock(false);  
        }
    
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollCounter);
    // return () => {
    //   window.removeEventListener('scroll', scrollCounter);
    // };
  }, []);

  return scrollerBlock;
};
