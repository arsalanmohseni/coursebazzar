/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                dana: ["Dana", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
