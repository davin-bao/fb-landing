
const getTheme = () => {
  const _default = {
    fonts: { sans: 'InterVariable' },
    colors: {
      default: '#FFFFFF',
      header: '#FFFFFF',
      footer: '#FFFFFF',
      primary: '#000000',
      secondary: '#283CFF',
      accent: '#8B00FF',
      info: '#3b82f6',
      success: '#65a30d',
      warn: '#F59E0B',
      danger: '#dc2626',
      link: '#0B0B0B',
    }
  }
  return _default
}

export const THEME = getTheme()