<template>
  <div>
  <Pie
      :chart-options="chartOptions"
      :chart-data="getChartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    data: {
      type: Array,
    },
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: ['Total Interest', 'Principal Loan Amount'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: this.data
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed:{
    getChartData() {
      return {
        labels: ['Total Interest', 'Principal Loan Amount'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: this.data
          }
        ]
      }
    },
  },
  watch : {
    data (val) {
      console.log(this.chartData)
      this.chartData.datasets.data = val
    }
  },
  mounted(){}
}
</script>
