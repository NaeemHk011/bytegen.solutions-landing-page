module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
          move: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' }
          },
          'border-rotate': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' }
          },
          moveDown: {
            '0%': { transform: 'translateY(-100%)', opacity: 0 },
            '50%': { transform: 'translateY(0)', opacity: 1 },
            '100%': { transform: 'translateY(100%)', opacity: 0 }
          },
          moveUp: {
            '0%': { transform: 'translateY(100%)', opacity: 0 },
            '50%': { transform: 'translateY(0)', opacity: 1 },
            '100%': { transform: 'translateY(-100%)', opacity: 0 }
          },
          moveRight: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '50%': { transform: 'translateX(0)', opacity: 1 },
            '100%': { transform: 'translateX(100%)', opacity: 0 }
          },
          moveLeft: {
            '0%': { transform: 'translateX(100%)', opacity: 0 },
            '50%': { transform: 'translateX(0)', opacity: 1 },
            '100%': { transform: 'translateX(-100%)', opacity: 0 }
          },
          cursor: {
            '0%': { 
              opacity: 0,
              transform: 'translate(0px, 0px)'
            },
            '20%': {
              opacity: 1,
              transform: 'translate(100px, 50px)'
            },
            '40%': {
              transform: 'translate(200px, 50px)'
            },
            '60%': {
              transform: 'translate(100px, 100px)'
            },
            '80%': {
              transform: 'translate(50px, 50px) scale(0.9)'
            },
            '100%': {
              transform: 'translate(0px, 0px)'
            }
          }
        },
        animation: {
          marquee: "marquee 15s linear infinite",
          blink: "blink 1s step-end infinite",
          move: "move 3s linear infinite",
          'border-rotate': 'border-rotate 4s ease infinite',
          'move-down': 'moveDown 2s ease-in-out infinite',
          'move-up': 'moveUp 2s ease-in-out infinite',
          'move-right': 'moveRight 2s ease-in-out infinite',
          'move-left': 'moveLeft 2s ease-in-out infinite',
          cursor: 'cursor 3s ease-in-out infinite'
        }
      },
    },
    plugins: [],
  };
  