import { useEffect } from 'react'

// Sets the browser tab title for a page
export function usePageTitle(title) {
  useEffect(function () {
    document.title = title
  }, [title])
}
