const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./**/*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            screens: {
                'xs': '360px'
            },
            fontFamily: {
                poppins: ['Poppins', ...defaultTheme.fontFamily.mono],
                opensans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': '.55rem',
            },
            colors: {
                'strong-pink': 'hsl(322, 100%, 66%)',

                'pale-cyan': 'hsl(193, 100%, 96%)',
                'dark-cyan': 'hsl(192, 100%, 9%)',

                'grayish-blue': 'hsl(208, 11%, 55%)'      
            },
            borderRadius: {
                'xl': '1rem'
            }
        },
    },
    variants: {},
    plugins: []
}