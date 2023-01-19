import styles from './Proyeccion.module.scss'
import { Chart as ChartJS, ChartData, registerables } from 'chart.js'
import { createGradient } from '@/utilities'
import { useRef, useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables)

interface ProyeccionProps {
  mode: string
}

const data = {
  labels: [2022, 2023, 2024, 2025, 2026, 2027],
  datasets: [
    {
      label: 'Proyección',
      data: [5000000, 6000000, 10000000, 15000000, 20500000, 30500000],
      pointRadius: 8
    }
  ]
}

function Proyeccion ({ mode }: ProyeccionProps): JSX.Element {
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
      <h1 className={styles.Section__title}>Proyección de ingresos</h1>
      <p className={styles.Section__p1}>Con base en Data Real.</p>
      <p className={styles.Section__titleGraf}>
        Siguiendo la tendencia se estima anualmente que, para el 2027
        alcanzaremos los <b>28 mill</b>
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

export default Proyeccion
