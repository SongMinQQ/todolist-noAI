import { create } from "zustand";

type theme = 'primary' | 'dark';
interface themeStore {
  theme: theme,
  toggleTheme: () => void
}
const useTheme = create<themeStore>((set) => ({
  theme: 'primary',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'primary' ? 'dark' : 'primary' })),
}))

export default useTheme;