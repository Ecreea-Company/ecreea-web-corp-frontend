export const getTrabajos = async () => {
  const res = await fetch(
    'http://localhost:1337/api/jobs?populate=*'
  )

  return await res.json()
}

export const getTrabajosByPage = async (page: string | number | string[]) => {
  const res = await fetch(
    `http://localhost:1337/api/posts?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=6`
  )

  return await res.json()
}
