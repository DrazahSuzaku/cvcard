// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'sans': ['"Roboto"', 'sans-serif'],
        }
    }
};