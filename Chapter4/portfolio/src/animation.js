export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25, 
    },
  },

  exit: {
    opacity: 0,
    //y: 300, Slide page down when navigating to other pages
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: {
  y: 300,
  },
  show: {
    y: 0,
    transition : {duration : 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition : { ease: "easeOut", duration: 0.75  },
  },
};


export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75,},
  },
};

export const LineAnim = {
  hidden: {
    width: '0%'
  },

  show: {
    width: '100%',
    transition: {duration: 0.8},
  },
}
 

export const Slider = {
  hidden: {x: '-120%', skew: '45deg'},
  show: {
    x: '100%',
    skew: '0deg',
    transition: {ease: "easeOut", duration: 1},
  }
}

export const SliderContainer = {
  hidden: {opacity: 1},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.10, ease: 'easeOut'}
  }
}

export const ScrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    }
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}