// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './extension/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif']
            }
        }
    },
    plugins: []
};
