export interface FiltersQuery {
  property: string
  value: string | string[]
}

const filtersToQueryString = (filters: FiltersQuery[]) => {
  const filterQuery = filters
    .map((filter) => {
      const { property, value } = filter
      return value === '' ? '' : property === 'compania' ? `filters[empresa][$eq]=${value}` : `filters[${property}][slug][$eq]=${value}`
    })
    .join('&')

  return filterQuery
}

export const getJobsByPage = async ({
  page,
  filters
}: {
  page: number
  filters: FiltersQuery[]
}) => {
  const filterQuery = filtersToQueryString(filters)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=5&${filterQuery}`
  ).then(async (res) => await res.json())

  return res
}

export const getJob = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*`
  ).then(async (res) => await res.json())

  return res
}

export const getJobDestacado = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?filters[destacado][$eq]=true&populate=*`
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
