
import { useEffect, useRef, useState } from "react";

const Animation = ({
  children,
  className = "",
  threshold = 0.1,
  once=false,
  variant = "fade" // "fade" (default) or "about"
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.unobserve(element);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  // 👉 define styles for different animation variants
  const variants = {
    fade: {
      hidden: "opacity-0 scale-0 rotate-0",
      visible: "opacity-100 scale-100 rotate-0",
    },
    scroll: {
      hidden: "opacity-0 scale-0 -rotate-180",
      visible:"opacity-100 scale-100 rotate-0",
    },
  };

  const current = variants[variant] || variants.fade;

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
        isVisible ? current.visible : current.hidden
      }`}
    >
      {children}
    </div>
  );
};

export default Animation;
