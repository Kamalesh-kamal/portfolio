export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element && element.id !== "home") {
    element.scrollIntoView({
      behavior: "smooth",
      // transition:"1ms"
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      // transition:"2ms",
    });
  }
};
