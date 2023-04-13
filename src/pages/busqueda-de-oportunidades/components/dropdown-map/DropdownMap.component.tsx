import { getFetcherSWR } from '@/services'
import DropdownOP from '../dropdown/Dropdown.component'
import useSWR from 'swr'

interface DropdownsProps {
  width?: string
}

const useEndpointData = (endpoint: string) => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, getFetcherSWR)
  return data?.data.map((item: any) => ({
    id: item.id,
    name: item.attributes.nombre
  }))
}

const Dropdowns = ({ width }: DropdownsProps) => {
  const ubicaciones = useEndpointData('ubicacions')
  const tipoContrato = useEndpointData('tipo-contratoes')
  const areaTrabajo = useEndpointData('area-trabajos')
  const modalidadTrabajo = useEndpointData('modalidad-trabajos')

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
