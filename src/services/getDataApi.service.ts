
export const getFechtApi = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`).then(
    async (res) => await res.json()
  )

  return res
}
