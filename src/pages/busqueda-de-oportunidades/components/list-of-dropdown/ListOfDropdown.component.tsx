import { Dropdown } from '@/pages/busqueda-de-oportunidades/components'
import { useRouter } from 'next/router'

const ListOfDropdown = ({ filters }: any) => {
  const router = useRouter()

  const filterKeyMap: any = {
    ubicacions: 'Ubicación',
    'tipo-contratoes': 'Tipo de Contrato',
    'area-trabajos': 'Área de Trabajo',
    'modalidad-trabajos': 'Modalidad',
    companias: 'Empresa'
  }

  return (
    <div>
      {filters.map((filter: any) => (
        <Dropdown
          key={filter.name}
          name={filterKeyMap[filter.name]}
          options={filter.options}
          router={router}
        />
      ))}
    </div>
  )
}

export default ListOfDropdown
