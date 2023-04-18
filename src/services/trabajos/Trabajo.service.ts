export const getTrabajosByPage = async (page: string | number | string[]) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=5`
  )

  return await res.json()
}

export const getTrabajos = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*`
  )

  return await res.json()
}

export const getTrabajosBySlug = async (url: string | string[] | undefined) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?filters[slug][$eq]=${url}&populate=*`
  ).then(async (res) => await res.json())

  return res
}
