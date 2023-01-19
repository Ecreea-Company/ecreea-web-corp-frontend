import styles from './Somos.module.scss'
import { Chart as ChartJS, registerables } from 'chart.js'
import type { ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { createGradient } from '@/utilities'
import { useRef, useState, useEffect } from 'react'
ChartJS.register(...registerables)

interface SomosProps {
  mode: string
}

const data = {
  labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL'],
  datasets: [
    {
      label: 'Crecimiento',
      data: [99995, 209000, 178000, 520000, 515000, 440000, 518000],
      pointRadius: 8
    }
  ]
}

function Somos ({ mode }: SomosProps): JSX.Element {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    datasets: []
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart) {
      return
    }
    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea)
      }))
    }
    setChartData(chartData)
  }, [])

  const [options, setOptions] = useState({})

  useEffect(() => {
    const options = {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: mode === 'dark' ? '#dddddd' : 'black'
          },
          grid: {
            color: '#423f3f80'
          }
        },
        y: {
          ticks: {
            color: mode === 'dark' ? '#dddddd' : 'black'
          },
          grid: {
            color: '#423f3f80'
          }
        }
      }
    }

    setOptions(options)
  }, [mode])

  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>Somos lo que medimos</h1>
      <p className={styles.Section__p1}>
        Medimos nuestro progreso, el progreso desarrolla nuestro aprendizaje y
        así llegamos al éxito.
      </p>
      <p className={styles.Section__titleGraf}>
        Promedio de crecimiento mensual del <b>43%</b>
      </p>
      <div className={styles.Section__graf}>
        <Line
          options={options}
          data={chartData}
          ref={chartRef}
          className={styles.ChartLine}
        />
      </div>
    </div>
  )
}

export default Somos
