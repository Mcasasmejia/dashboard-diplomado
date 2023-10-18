<template>
    <div class="p-6">
        <Bar :data="chartData" />
    </div>
</template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Estandar', 'Junior', 'Suite'],
          datasets: [
            {
                label: ['Estandar'],
                backgroundColor: ['rgb(59, 130, 246)'],
                data: [40],
            },
            {
                label: ['Junior'],
                backgroundColor: ['rgb(16, 185, 129)'],
                data: [20],
            },
            {
                label: ['Suite'],
                backgroundColor: ['rgb(244, 63, 94)'],
                data: [12],
            }
          ]
        }
      }
    }
  }

  
  </script>