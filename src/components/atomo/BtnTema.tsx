import { useThemeStore } from "../../store/ThemeStore";

export function BtnTema() {
  const { theme, toggleTheme } = useThemeStore()
  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
    </button>
  );
};
