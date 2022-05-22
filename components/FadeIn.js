import React from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function FadeIn({ isVisible, children }) {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    zIndex: 6,
    position: 'absolute',
    top: 0,
    left: 0,
  });

  return <animated.div style={styles}>{children}</animated.div>;
}
