import { Dropdown } from '@/pages/busqueda-de-oportunidades/components'
import { useRouter } from 'next/router'

const ListOfDropdown = ({
  width,
  filters
}: {
  width?: string
  filters: any
}) => {
  const router = useRouter()

  return (
    <div>
      {filters.map((filter: any) => (
        <Dropdown
          key={filter.name}
          name={filter.name}
          options={filter.options}
          width={width}
          router={router}
        />
      ))}
    </div>
  )
}

export default ListOfDropdown
