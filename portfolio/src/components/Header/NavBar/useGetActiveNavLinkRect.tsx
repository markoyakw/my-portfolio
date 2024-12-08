import { RefObject, useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"


const useGetActiveNavLinkRect = (navBarRef: RefObject<HTMLElement>) => {
    const [activeLinkRect, setActiveLinkRect] = useState<DOMRectReadOnly>()
    const URIToHTMLAnchorMap = useMemo(() => new Map<string, HTMLAnchorElement>(), [])
    const params = useLocation()

    const addHTMLAnchorToMap = (HTMLAnchor: HTMLAnchorElement) => {
        const href = HTMLAnchor.href
        if (!href) return
        const pathname = new URL(href).pathname
        URIToHTMLAnchorMap.set(pathname, HTMLAnchor)
    }

    const addPathnamesToHTMLAncorMap = (HTMLArr: Element[]) => {
        HTMLArr.forEach(HTMLItem => {
            if (HTMLItem.tagName === "A") {
                const HTMLAnchor = HTMLItem as HTMLAnchorElement
                addHTMLAnchorToMap(HTMLAnchor)
            }
            else {
                const secondaryHTMLArr = Array.from(HTMLItem.children) as HTMLElement[]
                secondaryHTMLArr.forEach(nestedHTMLItem => {
                    if (nestedHTMLItem.tagName === "A") {
                        const HTMLAnchor = nestedHTMLItem as HTMLAnchorElement
                        addHTMLAnchorToMap(HTMLAnchor)
                    }
                    else {
                        addPathnamesToHTMLAncorMap(Array.from(nestedHTMLItem.children))
                    }
                })
            }
        })
    }

    useEffect(() => {
        const navBar = navBarRef.current
        if (!navBar) return
        const navChildrenArr = Array.from(navBar.children)
        addPathnamesToHTMLAncorMap(navChildrenArr)
    }, [navBarRef])

    useEffect(() => {
        const activeAnchorHTML = URIToHTMLAnchorMap.get(params.pathname)
        if (!activeAnchorHTML) return
        const activeLinkRect = activeAnchorHTML.getBoundingClientRect()
        setActiveLinkRect(activeLinkRect)
    }, [params])

    return { activeLinkRect }
}

export default useGetActiveNavLinkRect