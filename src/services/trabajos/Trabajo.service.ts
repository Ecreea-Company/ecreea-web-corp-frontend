export const getTrabajos = async () => {
  const res = await fetch(
    'http://127.0.0.1:1337/api/jobs?populate=*'
  )

  return await res.json()
}

export const getTrabajosBySlug = async (url: string | string[] | undefined) => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/jobs?filters[slug][$eq]=${url}&populate=*`
  ).then(async (res) => await res.json())

  return res
}
