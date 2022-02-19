import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts';

export const useTheme = () => {
     return useContext(ThemeContext);
}