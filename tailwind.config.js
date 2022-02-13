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
        "primary-accent": withOpacity('--color-primary-accent'),
        base: withOpacity('--color-base'),
        muted: withOpacity('--color-muted'),
        accent: withOpacity('--color-accent'),
        primary: withOpacity('--color-primary'),
        green: withOpacity('--color-green'),
        grey: withOpacity('--color-gray'),
        red: withOpacity('--color-red'),
        bar: withOpacity('--color-bar'),
      },
      width: {
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
