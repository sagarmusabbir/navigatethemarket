/**
navigatethemarket.com
Author: Musabbir Sagar | musabbirsagar.com
*/
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/lib/esm/**/*.js',
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 5px 20px 0 rgba(37,24,9,.2)',
      },
      dropShadow: {
        '3xl': '5px 5px 20px 0 rgba(37,24,9,.2)',

      }
    

      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { "50": "#f8fafc", "100": "#f8fafc", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950":"#020617" }
      }
      }
     

    },
    fontFamily: {
      'body': [
    'Montserrat', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Montserrat', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }

  
    
  






