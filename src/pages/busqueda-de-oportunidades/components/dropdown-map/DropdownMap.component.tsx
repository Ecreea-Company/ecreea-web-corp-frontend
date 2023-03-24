import { useFetchData } from '@/hooks'
import { DropdownOption } from '@/models'
import DropdownOP from '../dropdown/Dropdown.component'

export interface WidthProp{
  width?: string
}

const Dropdowns = ({ width }: WidthProp): JSX.Element => {
  const { data: ubicaciones } = useFetchData<{ data: DropdownOption[] }>('http://localhost:1337/api/ubicacions')

  const ubicacionesOptions = ubicaciones?.data.map((ubicacion) => ({
    id: ubicacion.id,
    name: ubicacion.attributes.nombre
  }))

  return (
    <div>
      <DropdownOP name="Ubicaciones" data={{ options: ubicacionesOptions }} width={width} />
    </div>
  )
}

export default Dropdowns
