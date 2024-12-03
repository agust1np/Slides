import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      colors: {
        primary: '#2B90B6',
        secondary: '#4EC5D4',
      },
    },
  },
}))