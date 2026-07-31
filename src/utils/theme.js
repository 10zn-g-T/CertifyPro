export const setTheme = (theme) => {
  const html = document.documentElement;

  if (theme === "dark") {
    html.classList.add("dark");
  } else if (theme === "light") {
    html.classList.remove("dark");
  } else {
    // System theme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    html.classList.toggle("dark", prefersDark);
  }

  localStorage.setItem("theme", theme);
};

export const loadTheme = () => {
  const saved = localStorage.getItem("theme") || "system";
  setTheme(saved);
};