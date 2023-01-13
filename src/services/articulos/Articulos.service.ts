export const getArticulosByPage = async (page: string | number | string[]) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=6`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  )

  return await res.json()
}

export const getArticulosBySize = async (size: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?populate=*&sort[0]=id%3Adesc&pagination[page]=1&pagination[pageSize]=${size}&populate[0]=imagen`
  )

  return await res.json()
}

export const getArticulos = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  )

  return await res.json()
}

export const getArticuloBySlug = async (url: string | string[] | undefined) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?filters[slug][$eq]=${url}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  ).then(async (res) => await res.json())

  return res
}

export const getArticulosForSWR = async (url: string) => {
  const res = await fetch(url)

  return await res.json()
}
