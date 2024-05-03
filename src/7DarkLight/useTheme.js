import React, { useEffect, useState } from 'react';

function useTheme(key, value) {
  function handleTheme(key, value) {
    const savedTheme = JSON.parse(localStorage.getItem(key));
    if (savedTheme) return savedTheme;

    if (value instanceof Function) return value();

    return value;
  }

  const [theme, setTheme] = useState(() => handleTheme(key, value));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}

export default useTheme;
