import { useFetchData } from '@/hooks'
import { DropdownOPProps } from '@/models'
import { DropdownOp } from '..'

export interface WidthProp{
  width?: string
}

const TextField = ({ width }: WidthProp): JSX.Element => {
  const { data: dataDrop, error, loading } = useFetchData<{ data: DropdownOPProps[] }>('http://localhost:1337/api/drops')

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
    {dataDrop?.data.map((item: any) => (
      <DropdownOp key={item.id} nombre={item.attributes.nombre} data={item} width={width} />
    ))}
    </>
  )
}

export default TextField
