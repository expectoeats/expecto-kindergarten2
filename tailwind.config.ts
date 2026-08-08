import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: {
          DEFAULT: "#FFC93C",
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#FFAB91",
          300: "#FF8A80",
        },
        skyteal: {
          DEFAULT: "#2EC4B6",
          50: "#E0F7FA",
          100: "#B2EBF2",
          200: "#80DEEA",
          300: "#4DD0E1",
        },
        grass: {
          DEFAULT: "#7BC950",
          50: "#F1F8E9",
          100: "#DCEDC8",
          200: "#C5E1A5",
          300: "#AED581",
        },
        cream: {
          DEFAULT: "#FFF8EC",
          50: "#FFFDF9",
          100: "#FFFBF2",
          200: "#FFF6E0",
        },
        berry: {
          DEFAULT: "#7C5CBF",
          50: "#EDE7F6",
          100: "#D1C4E9",
          200: "#B39DDB",
        },
        ink: {
          DEFAULT: "#4A3428",
          50: "#EFEBE9",
          100: "#D7CCC8",
          200: "#BCAAA4",
        },
        deepberry: {
          DEFAULT: "#3D2952",
        },
        forestteal: {
          DEFAULT: "#1F4E4A",
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-nunito)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-nunito)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        blob1: "60% 40% 30% 70% / 60% 30% 70% 40%",
        blob2: "30% 70% 70% 30% / 30% 30% 70% 70%",
        blob3: "50% 50% 30% 70% / 50% 70% 30% 50%",
        blob4: "40% 60% 70% 30% / 40% 50% 60% 50%",
        scallop: "50px 50px 0 0 / 100% 100% 0 0",
        postcard: "12px 40px 12px 40px",
        speech: "28px 28px 28px 4px",
        pill: "9999px",
      },
      boxShadow: {
        paper: "0 8px 30px -10px rgba(74, 52, 40, 0.25), 0 2px 6px -2px rgba(74, 52, 40, 0.1)",
        paperlift: "0 20px 50px -15px rgba(74, 52, 40, 0.3), 0 4px 12px -4px rgba(74, 52, 40, 0.15)",
        soft: "0 4px 20px -4px rgba(255, 107, 107, 0.2)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        floatySlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-6px) scale(1.03)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          to: { "stroke-dashoffset": "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.12) translate(-1%, -1%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        popIn: {
          "0%": { transform: "scale(0) rotate(-10deg)", opacity: "0" },
          "70%": { transform: "scale(1.1) rotate(3deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        cursorPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.4)", opacity: "1" },
        },
        pencilDraw: {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
        loadingSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        floatySlow: "floatySlow 8s ease-in-out infinite",
        wiggle: "wiggle 0.6s ease-in-out infinite",
        bounceSoft: "bounceSoft 1.2s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite",
        kenburns: "kenburns 12s ease-in-out infinite",
        popIn: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        slideUp: "slideUp 0.4s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        cursorPulse: "cursorPulse 2s ease-in-out infinite",
        countUp: "countUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
