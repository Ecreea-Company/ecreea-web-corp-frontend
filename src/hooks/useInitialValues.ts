import { localStorageFooter, localStorageNavbar } from '@/services'
import { useEffect } from 'react'

export default function useInitialValues () {
  useEffect(() => {
    localStorageFooter()
      .then(() => console.log('Footer Inicializada'))
      .catch(() => console.log('Error al inicializar el footer'))

    localStorageNavbar()
      .then(() => console.log('Navbar Inicializada'))
      .catch(() => console.log('Error al inicializar el navbar'))
  }, [])
}
