const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')({ preset: 'default' })

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./public/**/*.html'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {

    plugins: [
        tailwindcss('./tailwind.config.js'),

        ...(process.env.NODE_ENV === 'production' ? [cssnano, purgecss] : []),
    ]
}