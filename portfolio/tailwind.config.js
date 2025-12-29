export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea',      // Deep purple
        accent: '#ec4899',       // Pink
        background: '#fdf4ff',   // Light background
        darkText: '#1e1b4b',
        mutedText: '#64748b',
        frontendBg: '#e0e7ff',   // Light blue for Frontend badges
        backendBg: '#f3e8ff',    // Light purple for Backend
        databaseBg: '#fce7f3',   // Light pink for Databases
      },
      // Add responsive screens for all device sizes
      screens: {
        // Mobile-first approach with fine-grained control
        'xs': '375px',      // Small phones (iPhone SE, etc.)
        'sm': '640px',      // Small tablets
        'md': '768px',      // Tablets
        'lg': '1024px',     // Laptops
        'xl': '1280px',     // Desktops
        '2xl': '1536px',    // Large desktops
        '3xl': '1920px',    // Full HD / 2K
        '4xl': '2560px',    // QHD / 4K
        '5xl': '3840px',    // Ultra-wide / 8K
      },
      // Extend spacing and sizing for ultra-wide support
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      maxWidth: {
        '8xl': '88rem',     // 1408px
        '9xl': '96rem',     // 1536px
        '10xl': '108rem',   // 1728px
        'none': 'none',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        // Extended font sizes for ultra-wide displays
        '2xs': ['0.625rem', '0.75rem'],
        '10xl': ['9rem', '1'],
        '11xl': ['10rem', '1'],
        '12xl': ['12rem', '1'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 70px -20px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};