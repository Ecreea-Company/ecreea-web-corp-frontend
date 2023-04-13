import DropdownOP from '../dropdown/Dropdown.component'
import { getFetcherSWR } from '@/services'
import useSWR from 'swr'

interface DropdownsProps {
  width?: string
}

const Dropdowns = ({ width }: DropdownsProps) => {
  const { data: ubicacionesData } = useSWR('http://127.0.0.1:1337/api/ubicacions', getFetcherSWR)
  const ubicaciones = ubicacionesData?.data.map((ubicacion: any) => ({
    id: ubicacion.id,
    name: ubicacion.attributes.nombre
  }))

  const { data: tipoContratoData } = useSWR('http://127.0.0.1:1337/api/tipo-contratoes', getFetcherSWR)
  const tipoContrato = tipoContratoData?.data.map((ubicacion: any) => ({
    id: ubicacion.id,
    name: ubicacion.attributes.nombre
  }))

  const { data: areaTrabajoData } = useSWR('http://127.0.0.1:1337/api/area-trabajos', getFetcherSWR)
  const areaTrabajo = areaTrabajoData?.data.map((ubicacion: any) => ({
    id: ubicacion.id,
    name: ubicacion.attributes.nombre
  }))

  const { data: modalidadTrabajoData } = useSWR('http://127.0.0.1:1337/api/modalidad-trabajos', getFetcherSWR)
  const modalidadTrabajo = modalidadTrabajoData?.data.map((ubicacion: any) => ({
    id: ubicacion.id,
    name: ubicacion.attributes.nombre
  }))

  const itemsDrops = [
    { name: 'Ubicación', options: ubicaciones },
    { name: 'Tipo de Contrato', options: tipoContrato },
    { name: 'Área de Trabajo', options: areaTrabajo },
    { name: 'Modalidad', options: modalidadTrabajo }
  ]

  return (
    <div>
      {itemsDrops.map((item, index) => (
        <DropdownOP key={index} name={item.name} options={item.options} width={width} />
      ))}
    </div>
  )
}

export default Dropdowns
