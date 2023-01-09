export interface FooterApiProps {
  id: number
  title: string
  item: FooterItemProps[]
}

export interface FooterItemProps {
  id: number
  desactivar: boolean
  name: string
  url: string
}
