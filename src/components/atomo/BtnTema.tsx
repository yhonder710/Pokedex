import './css/btnTema.css'
import { useThemeStore } from "../../store/ThemeStore";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


export function BtnTema() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button onClick={toggleTheme} className="btnTema">
      {theme === 'light'
        ? <span className='icon on'><FaMoon /></span>
        : <span className='icon'><FaSun /></span>}
    </button>
  );
};
