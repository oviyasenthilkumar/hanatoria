
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your folder structure
  theme: {
    extend: {
      animation: {
        typing: "typing 3s steps(20, end) forwards", // 'forwards' ensures it runs only once
        blink: "blink 0.8s steps(2, start) infinite", // Cursor blinking effect
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        tickers: "tickers 40s linear infinite",
        "infinite-scroll": "infinite-scroll 100s linear infinite",
        "home-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        tickers: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
        "rotate-yt-logo": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        typing: {
          from: { width: "0%" },
          to: { width: "var(--typing-width)" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #fdd3c8, #fde6dc, #fff5f0)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "4rem",
       
      },
    },
  },
};


