const filtersToQueryString = (filters: Record<string, any>) => {
  return Object.entries(filters)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `filters[${key}][slug][$eq]=${v}`).join('&')
      }
      return `filters[${key}][slug][$eq]=${value}`
    })
    .join('&')
}

export const getTrabajosByPage = async (page: string | number | string[], filters: Record<string, any> = {}) => {
  const filterQuery = filtersToQueryString(filters)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=5&${filterQuery}`
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
