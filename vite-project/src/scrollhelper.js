import { useRef } from 'react';

const createScrollHandler = (ref) => () => {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const useSmoothScroll = () => {
  return (targetRef) => {
    const ref = useRef(null);
    const scrollHandler = createScrollHandler(ref);

    return {
      ref,
      onClick: () => scrollHandler(targetRef),
    };
  };
};

export default useSmoothScroll;
