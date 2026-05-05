export interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  danger: string;
  background: string;
  surface: string;
  radius: string;
}

export const govTheme: ThemeConfig = {
  name: "gov",
  primary: "#1a5fb4",
  secondary: "#3584e4",
  accent: "#f5c211",
  success: "#26a269",
  warning: "#e5a50a",
  danger: "#c01c28",
  background: "#f6f8fc",
  surface: "#ffffff",
  radius: "0.5rem",
};

export const schoolTheme: ThemeConfig = {
  name: "school",
  primary: "#3370ff",
  secondary: "#7eb8ff",
  accent: "#ff9f43",
  success: "#00d26a",
  warning: "#ffba00",
  danger: "#f54a45",
  background: "#f2f3f5",
  surface: "#ffffff",
  radius: "0.75rem",
};

export function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme.name);
}
