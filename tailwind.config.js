/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{jsx,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                flowkit: {
                    green: "#29CC6A",
                    yellow: {
                        400: "#E3A008",
                    },
                },
                primary: {
                    50: "#F5FFFF",
                    100: "#EBFFFF",
                    200: "#D7FEFD",
                    300: "#BCFBFA",
                    400: "#92F6F5",
                    500: "#78EDEB",
                    600: "#55D8D6",
                    700: "#43C7C4",
                    800: "#389f9d",
                    900: "#016479",
                    1000: "#004251",
                },
                green: {
                    100: "#DEF7EC",
                    200: "#BCF0DA",
                    300: "#84E1BC",
                    400: "#31C48D",
                    500: "#0E9F6E",
                    600: "#057A55",
                    700: "#046C4E",
                    800: "#03543F",
                    900: "#014737",
                },
                orange: {
                    50: "#FFF8F1",
                    100: "#FEECDC",
                    200: "#FCD9BD",
                    300: "#FDBA8C",
                    400: "#FF8A4C",
                    500: "#FF5A1F",
                    600: "#D03801",
                    700: "#B43403",
                    800: "#8A2C0D",
                    900: "#771D1D",
                },
                cream: { 100: "#C7BCA5", 400: "#F9F7F3" },
                gold: {
                    400: "#E8BA0F",
                    500: "#F2D053",
                },
                tier: {
                    basic: "#A2A2A2",
                    gold: "#E8BA0F",
                    platinum: "#6F8BC4",
                    diamond: "#70BEEF",
                    saver: "rgb(138, 213, 79)",
                },
                "tier-bg": {
                    basic: "#E5E7EB",
                },
            },
            boxShadow: {
                "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.15)",
                panel: "0px 1px 2px rgba(0, 0, 0, 0.08)",
            },
            dropShadow: {
                tooltip: "0 1px 2px rgba(0, 0, 0, 0.32)",
            },
            screens: {
                xs: "430px",
                xxs: "320px",
                "phone-lg": "431px",
                wide: "1536px",
            },
            spacing: {
                2.5: "0.625rem",
                100: "25rem",
            },
            zIndex: {
                1: "1",
                2: "2",
            },
            fontSize: {
                "6xl": ["3.75rem", "1.25"],
                xxs: ".625rem",
            },
            animation: {
                enter: "fadeInTop 300ms ease-out",
                leave: "fadeOutTop 300ms ease-in forwards",
                "arrow-pulse": "arrow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeInTop: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-2rem)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(0)",
                    },
                },
                fadeOutTop: {
                    "0%": {
                        opacity: "1",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
                arrow: {
                    "0%, 100%": {
                        opacity: 1,
                    },
                    "50%": {
                        opacity: 0,
                    },
                },
            },
        },
    },
    plugins: [],
};
