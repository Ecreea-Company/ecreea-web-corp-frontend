import styles from './CrecimientoSostenible.module.scss'
import { Chart as ChartJS, registerables } from 'chart.js'
import type { ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useEffect, useRef, useState } from 'react'
import { createGradient } from '@/utilities'
ChartJS.register(...registerables)

interface CrecimientoSostenibleProps {
  mode: string
}

const data = {
  labels: ['2020', '2021', '2022'],
  datasets: [
    {
      label: 'ARR',
      data: [900000, 1982000, 2450000],
      pointRadius: 8
    }
  ]
}

function CrecimientoSostenible ({
  mode
}: CrecimientoSostenibleProps): JSX.Element {
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
        title: {
          display: true,
          text: 'Annual Recurring Revenue Ingresos recurrentes anuales.',
          color: mode === 'dark' ? '#dddddd' : 'black'
        },
        legend: {
          labels: {
            color: mode === 'dark' ? '#dddddd' : 'black'
          }
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
      <h1 className={styles.Section__title}>Crecimiento sostenible</h1>
      <p className={styles.Section__p1}>
        Creamos valor agregado sosteniendo un equilibrio entre el crecimiento
        económico y el bienestar industrial.
      </p>
      <div className={styles.Section__descr}>
        <h4>ARR</h4>
        <p><span>Annual Recurring Revenue </span>
         <span>{'(Ingresos recurrentes anuales)'}</span></p>
      </div>
      <p className={styles.Section__titleGraf}>
        Crecimiento Anual del <b>98%</b>
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

export default CrecimientoSostenible
