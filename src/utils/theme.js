const THEME_KEY = 'app-theme';

export const THEMES = [
  { value: 'standard', label: '标准色', className: 'theme-standard' },
  { value: 'dark', label: '黑暗模式', className: 'theme-dark' }
];

const THEME_VALUES = THEMES.map(theme => theme.value);
const THEME_CLASSES = THEMES.map(theme => theme.className);

export function getInitialTheme() {
  const saved = window.localStorage.getItem(THEME_KEY);
  return THEME_VALUES.includes(saved) ? saved : 'standard';
}

export function applyTheme(themeName) {
  const targetTheme = THEME_VALUES.includes(themeName) ? themeName : 'standard';
  const body = document.body;
  if (!body) {
    return targetTheme;
  }

  body.classList.remove(...THEME_CLASSES);
  const themeConfig = THEMES.find(item => item.value === targetTheme);
  body.classList.add(themeConfig.className);
  window.localStorage.setItem(THEME_KEY, targetTheme);
  return targetTheme;
}

export function getThemeLabel(themeName) {
  const matched = THEMES.find(item => item.value === themeName);
  return matched ? matched.label : '标准色';
}

