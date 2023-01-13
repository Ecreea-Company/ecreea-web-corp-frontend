import { CardBlogProps } from '@/models'

export const cardBlogAdapter = (obj: any): CardBlogProps[] => {
  const data = obj.data.map((obj: any) => {
    return {
      slug: obj.attributes.slug,
      title: obj.attributes.titulo,
      fecha_publicacion: obj.attributes.publishedAt,
      categoria: obj.attributes.categoria.data.attributes.nombre,
      imagen: obj.attributes.imagen.data.attributes.url
    }
  })

  return data
}
