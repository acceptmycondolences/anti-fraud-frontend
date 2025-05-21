import { useCallback, useEffect, useState } from 'react'

export function useMediaQueryList(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  const handleChange = useCallback(() => {
    setMatches(window.matchMedia(query).matches)
  }, [query])

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    handleChange()

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [query, handleChange])

  return matches
}
