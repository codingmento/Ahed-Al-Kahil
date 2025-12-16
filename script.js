const ctx = document.getElementById("skillsChart");

new Chart(ctx, {
  type: "bar", // رسم عمودي
  data: {
    labels: ["canva", "Illustration", "photoshop"],
    datasets: [
      {
        label: "Skill Level (%)",
        data: [90, 85, 70], // النسب %
        backgroundColor: [" #e426b4ff", "#f7df1e", "#34cf31ff"],
        borderRadius: 6,
        barThickness: 20, // نحافة العمود
        maxBarThickness: 25,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => value + "%",
        },
      },
      x: {
        ticks: {
          font: { size: 16 },
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
