import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type theme = 'primary' | 'dark';
interface ThemeStore {
  theme: theme
}
type ThemeActions = {
  toggleTheme: () => void;
}
const useTheme = create<ThemeStore & ThemeActions>()(
  persist(
    (set) => ({
      theme: 'primary',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'primary' ? 'dark' : 'primary' })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(()=> localStorage),
    }
  )
)

export default useTheme;