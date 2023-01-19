import styles from './Costo.module.scss'
import { Chart as ChartJS, registerables } from 'chart.js'
import type { ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { createGradient } from '@/utilities'
import { useRef, useState, useEffect } from 'react'
ChartJS.register(...registerables)

interface CostoProps {
  mode: string
}

const data = {
  labels: ['Costos de Adquisición', 'Beneficios Obtenidos'],
  datasets: [
    {
      label: 'CRECIMIENTO',
      data: [4500, 55000]
    }
  ]
}

function Costo ({ mode }: CostoProps): JSX.Element {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
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
        backgroundColor: createGradient(chart.ctx, chart.chartArea)
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
      <h1 className={styles.Section__title}>Costo - Beneficio</h1>
      <p className={styles.Section__p1}>
        Medimos nuestro progreso, el progreso desarrolla nuestro aprendizaje y
        así llegamos al éxito.
      </p>
      <p className={styles.Section__titleGraf}>
        Siguiendo la tendencia se estima anualmente, que para el 2027 llegaremos
        a los <b> 28 mill.</b>
      </p>
      <div className={styles.Section__graf}>
        <Bar
          options={options}
          data={chartData}
          ref={chartRef}
          className={styles.ChartLine}
        />
      </div>
    </div>
  )
}

export default Costo
