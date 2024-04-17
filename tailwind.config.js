/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#8B5CF6",
        "custom-silver": "#E4E6EB",
        "custom-purple-light": "#A280FF,",
        "email-background": "#FFC107",
        "footer-color": "#94A3B8",
        "user-text-color": "#334155",
      },
    },
  },
  plugins: [],
};
