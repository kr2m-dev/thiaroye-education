/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a56db",
        secondary: "#7c3aed",
      },
      textShadow: {
        '3d': '2px 2px 0 #4338ca, 4px 4px 0 #3730a3, 6px 6px 0 #312e81',
      },
      animation: {
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-image': 'linear-gradient(45deg, #4f46e5, #818cf8, #4f46e5)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-size': '200% 200%',
        },
        '.text-3d': {
          'text-shadow': `
            1px 1px 0 #4f46e5,
            2px 2px 0 #818cf8,
            3px 3px 0 #4f46e5,
            4px 4px 0 rgba(79, 70, 229, 0.2)
          `,
        }
      };
      addUtilities(newUtilities, ['hover', 'responsive']);
    },
  ],
}
