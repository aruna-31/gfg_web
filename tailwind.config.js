/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gfg: {
                    primary: '#00895e',
                    secondary: '#105d95',
                    accent: '#3ab284',
                    darkBg: '#0b233a',
                    navyBg: '#105d95',
                }
            },
            fontFamily: {
                sans: ['"Source Sans 3"', 'sans-serif'],
                heading: ['"Sofia Pro"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
