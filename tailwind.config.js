function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}

module.exports = {
  mode: 'jit',
  purge: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-base": withOpacity('--color-text-base'),
        "text-muted": withOpacity('--color-text-muted'),
        primary: withOpacity('--color-primary'),
        green: withOpacity('--color-green'),
        red: withOpacity('--color-red'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
