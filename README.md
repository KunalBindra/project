# project
---

# 📊 Footballer Stats Visual Charts

A comprehensive and interactive web-based dashboard showcasing key statistics of top football players using various data visualizations powered by [Chart.js](https://www.chartjs.org/). This project offers insights into performance metrics like goals, assists, and matches through engaging visual formats.

## 🚀 Features

- **Bar Chart** – Matches played by each footballer.
- **Scatter Plot** – Correlation between assists and goals.
- **Pie Chart** – Distribution of goals among players.
- **Stacked Bar Chart** – Combined goals and assists per player.
- **Radar Chart** – Skill comparison of top 5 footballers.
- **Line Chart** – Simulated cumulative goals over time.
- **Heatmap (Matrix)** – Player intensity distribution across days of the week.

## 📁 File Structure

```bash
├── charts.html       # Main HTML file containing all visualizations and logic
├── README.md         # Project documentation (this file)
```

## 📦 Technologies Used

- **HTML5** & **CSS3** – For structure and styling
- **JavaScript** – For chart logic
- **Chart.js** – Core chart rendering library
- **chartjs-chart-matrix** – For matrix-style heatmaps

## 📸 Sample Visuals

Each chart is built into a responsive grid layout that adapts to screen size. Charts include hover tooltips, legends, and interactive styling.

## 📂 Usage

1. Clone or download this repository.
2. Open `charts.html` in any modern web browser.
3. Interact with the visualizations.

```bash
git clone https://github.com/your-username/footballer-stats-dashboard.git
cd footballer-stats-dashboard
open charts.html  # or simply double-click the file
```

## 🔧 Customization

To add or update player data, modify the `players` array within the `<script>` tag:

```js
const players = [
  { name: "Cristiano Ronaldo", goals: 850, assists: 240, matches: 1200 },
  ...
];
```

## 🔄 Navigation

At the bottom of the page, a **Back to Dashboard** link allows easy navigation if linked to a broader project.

## 🧠 Insights

This dashboard helps football fans, analysts, and developers understand how different visualization techniques can enhance data storytelling, especially in sports analytics.

## 📄 License

MIT License – feel free to fork, modify, and use as needed.

---
