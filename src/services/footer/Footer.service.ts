const urlFooter = `${process.env.NEXT_PUBLIC_API_URL}/footer?populate[list][populate][0]=item`

export const localStorageFooter = async () =>
  await fetch(urlFooter)
    .then(async (res) => await res.json())
    .then((json) => json.data.attributes.list)
    .then((json) => {
      if (window === undefined) return json
      window.localStorage.setItem('footerData', JSON.stringify(json))
    })
    .catch((error) => {
      console.error('Error Interno', error)
    })
