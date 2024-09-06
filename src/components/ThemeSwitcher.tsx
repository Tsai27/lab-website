/*
 * @Author: Mr.Car
 * @Date: 2024-09-06 20:38:18
 */
'use client';
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>('system');
  const [overrideTheme, setOverrideTheme] = useState<string>('');
  const htmlElement = document.documentElement;

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        // 修改 theme
        htmlElement.setAttribute('class', 'override-dark-theme');
        setOverrideTheme('override-dark-theme');
      } else if (storedTheme === 'light') {
        htmlElement.setAttribute('class', 'override-light-theme');
        setOverrideTheme('override-light-theme');
      }
    }
  }, []);

  const handleThemeToggle = () => {
    if (theme === 'system') {
      setTheme('dark');
      setOverrideTheme('override-dark-theme');
      htmlElement.setAttribute('class', 'override-dark-theme');
    } else if (theme === 'dark') {
      setTheme('light');
      setOverrideTheme('override-light-theme');
      htmlElement.setAttribute('class', 'override-light-theme');
    } else if (theme === 'light') {
      setTheme('system');
      setOverrideTheme('');
    }

    localStorage.setItem('theme', theme);
  };

  return (
    <div>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
      {/* Your app content here */}
    </div>
  );
};

export default ThemeSwitcher;