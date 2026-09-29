import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center border-2 border-ice-navy bg-ice-bg text-ice-navy cursor-pointer transition-all duration-200 hover:bg-ice-frost hover:scale-110 hover:shadow-[2px_2px_0_var(--color-ice-primary)]"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
        >
            <span className="text-sm leading-none">
                {isDark ? '☀' : '🌙'}
            </span>
        </button>
    );
};

export default ThemeToggle;
