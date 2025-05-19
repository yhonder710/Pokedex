import { create } from 'zustand';

interface Theme {
  theme: string
  toggleTheme: () => void
}

export const useThemeStore = create<Theme>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
})
);
