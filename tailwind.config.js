/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",         // 如果你偶尔在 html 里直接写类名
    "./src/**/*.{js,jsx,ts,tsx}",  // React 组件 / 任何 TS 版本
  ],
  theme: { extend: {} },
  plugins: [],
};
