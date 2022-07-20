import React from "react";

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [scroll, setScroll] = React.useState(window.pageYOffset)

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    const handleWindowScroll = () => setScroll(window.pageYOffset);
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return { width, scroll };
};

export default useViewport