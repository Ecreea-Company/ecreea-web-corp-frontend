export const localStorageFooter = async (url: string) =>
  await fetch(url)
    .then(async (res) => await res.json())
    .then((json) => json.data)
    .then((json) => json.attributes)
    .then((json) => json.list)
    .then((json) => window.localStorage.setItem('footerData', JSON.stringify(json)))
