
export const getArticulos = async (page: string | number | string[]) => {
  const res = await fetch(
        `https://strapi-production-d105.up.railway.app/api/articulos?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=6`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
          }
        }

  )

  return await res.json()
}

export const getArticulo = async (id: string | string[] | undefined) => {
  const res = await fetch(
    `https://strapi-production-d105.up.railway.app/api/articulos/${id}?populate[autor][populate][0]=area&populate[autor][populate][1]=fotoPerfil&populate[imagen][populate][2]=*&populate[categoria][populate][3]=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  )

  return await res.json()
}
