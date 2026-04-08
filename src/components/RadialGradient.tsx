import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

interface RadialGradientProps {
  scale: string;
  opacity: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  scale,
  opacity,
  position,
  overflow,
}) => {
  const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    let rafId: number | null = null;
    const handleMouseMove = (event: MouseEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        setMouseXPercentage(Math.round((event.pageX / windowWidth) * 100));
        setMouseYPercentage(Math.round((event.pageY / windowHeight) * 100));
        rafId = null;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const radialGradientStyle: React.CSSProperties = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #ff6a3d, ${
      theme === "light" ? "#9daaf2" : "#0c1220"
    })`,
  };

  return (
    <React.Fragment>
      <div
        className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1]   ${opacity} ${scale} ${overflow}`}
        style={radialGradientStyle}
      ></div>
    </React.Fragment>
  );
};

export default RadialGradient;
