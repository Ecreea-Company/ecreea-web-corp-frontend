import { Dropdown } from '@/pages/busqueda-de-oportunidades/components'
import { DropdownComponentProps } from '@/pages/busqueda-de-oportunidades/components/dropdown/Dropdown.component'

const ListOfDropdown = ({ filters }: { filters: DropdownComponentProps[] }) => {
  return (
    <div>
      {filters.map((filter: DropdownComponentProps) => (
        <Dropdown
          key={filter.name}
          name={filter.name}
          slug={filter.slug}
          options={filter.options}
        />
      ))}
    </div>
  )
}

export default ListOfDropdown
