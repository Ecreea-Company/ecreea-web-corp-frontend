import type { ChartArea } from 'chart.js'

export function createGradient (ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = '#ea7344'
  const colorEnd = '#741758'

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(1, colorEnd)

  return gradient
}