/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './styles/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            textColor: {
                skin: {
                    primary: 'var(--clr-primary)',
                    secondary: 'var(--clr-secondary)',
                    background: 'var(--clr-bg)',
                }
            },
            borderColor: {
                skin: {
                    primary: 'var(--clr-primary)',
                    secondary: 'var(--clr-secondary)',
                }
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
