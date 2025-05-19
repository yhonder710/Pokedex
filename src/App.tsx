import { MyRouter } from "./router/router"

import { useEffect } from "react";
import { useThemeStore } from "./store/ThemeStore";



function App() {
  const { theme } = useThemeStore()
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <MyRouter />
  )
}

export default App
