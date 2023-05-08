import { getFetcherSWR } from '@/services'
import DropdownOP from '../dropdown/Dropdown.component'
import useSWR from 'swr'
import { useRouter } from 'next/router'

interface DropdownsProps {
  width?: string
}

const useEndpointData = (endpoint: string) => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, getFetcherSWR)
  return data?.data.map((item: any) => ({
    slug: item.attributes.slug,
    name: item.attributes.nombre
  }))
}

const DropdownsMapOP = ({ width }: DropdownsProps) => {
  const router = useRouter()

  const ubicaciones = useEndpointData('ubicacions')
  const tipoContrato = useEndpointData('tipo-contratoes')
  const areaTrabajo = useEndpointData('area-trabajos')
  const modalidadTrabajo = useEndpointData('modalidad-trabajos')
  const compania = useEndpointData('companias')

  const itemsDrops = [
    { name: 'Empresa', options: compania },
    { name: 'Ubicación', options: ubicaciones },
    { name: 'Tipo de Contrato', options: tipoContrato },
    { name: 'Área de Trabajo', options: areaTrabajo },
    { name: 'Modalidad', options: modalidadTrabajo }
  ]

  return (
    <div>
      {ubicaciones && tipoContrato && areaTrabajo && modalidadTrabajo && compania &&
        itemsDrops.map((item, index) => (
          <DropdownOP
            key={index}
            name={item.name}
            options={item.options}
            width={width}
            router={router}
          />
        ))}
    </div>
  )
}

export default DropdownsMapOP
