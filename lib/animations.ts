export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export const scaleOnHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

export const tiltOnHoverVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
  },
  hover: (custom: { x: number; y: number }) => ({
    rotateX: custom.y * 10,
    rotateY: custom.x * 10,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
}

export const parallaxVariants = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export const counterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.6, 0.4],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const rotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}
