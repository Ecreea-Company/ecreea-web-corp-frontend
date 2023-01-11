const urlNavbar = `${process.env.NEXT_PUBLIC_API_URL}/navbar?populate=*`

export const localStorageNavbar = async () =>
  await fetch(urlNavbar)
    .then(async (res) => await res.json())
    .then((json) => json.data.attributes.items)
    .then((json) => {
      if (window === undefined) return json
      window.localStorage.setItem('navbarData', JSON.stringify(json))
    })
    .catch((error) => {
      console.error('Error Interno', error)
    })
