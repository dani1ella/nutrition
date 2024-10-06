// Data for the pie chart
const data = {
    labels: ['Protein', 'Carbohydrates', 'Fats', 'Vitamins', 'Minerals'],
    datasets: [{
        label: 'Nutrient Intake',
        data: [25, 45, 15, 10, 5],  // Percentages for each nutrient
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',  // Protein
            'rgba(54, 162, 235, 0.6)',  // Carbohydrates
            'rgba(255, 206, 86, 0.6)',  // Fats
            'rgba(75, 192, 192, 0.6)',  // Vitamins
            'rgba(153, 102, 255, 0.6)'  // Minerals
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for the pie chart
const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
};

// Render the pie chart
window.onload = function() {
    const ctx = document.getElementById('nutritionChart').getContext('2d');
    new Chart(ctx, config);
};
