import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";

export const UseScroll = () => {
  const controls = useAnimationControls();
  const [element, view] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  },[controls, view]);
  return[element, controls];
};
