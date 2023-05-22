import DropdownOP from '../dropdown/Dropdown.component'
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
        <DropdownOP
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
