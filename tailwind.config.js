/**
navigatethemarket.com
Author: Musabbir Sagar | musabbirsagar.com
*/
/** @type {import('tailwindcss').Config} */


module.exports = {

  darkMode: 'class',
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
  
  
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
      }
     

    },
    fontFamily: {
      primary: ['Trebuchet', 'sans-serif'],
      sans: ['Trebuchet', 'sans-serif'],
      serif: ['Trebuchet', 'serif'],
      trebuchet: ['Trebuchet', 'sans-serif'],
      
     
    }
  }

  
    
  






