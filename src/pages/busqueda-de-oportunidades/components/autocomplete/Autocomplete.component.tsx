import { autocomplete } from '@algolia/autocomplete-js'
import React, { createElement, Fragment, useEffect, useRef } from 'react'
import { render } from 'react-dom'

export function Autocomplete (props: any) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment },
      render ({ children }, root) {
        render(children, root)
      },
      ...props
    })

    return () => {
      search.destroy()
    }
  }, [props])

  return <div ref={containerRef} />
}
