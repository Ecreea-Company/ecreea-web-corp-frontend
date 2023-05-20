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
// refact
export const getTrabajosByPage = async (page: string | number | string[], filters: Record<string, any> = {}) => {
  const filterQuery = filtersToQueryString(filters)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=5&${filterQuery}`
  ).then(async (res) => await res.json())

  return res
}

interface GetJobs {
  page: number
}

export const getJobsByPage = async ({ page }: GetJobs) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=5`
  ).then(async (res) => await res.json())

  return res
}

export const getJob = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*`
  ).then(async (res) => await res.json())

  return res
}

// refact
export const getJobBySlug = async (url: string | string[] | undefined) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?filters[slug][$eq]=${url}&populate=*`
  ).then(async (res) => await res.json())

  return res
}
