import { RefObject, useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"


const useGetActiveNavLinkRect = (navBarRef: RefObject<HTMLElement>) => {
    const [activeLinkRect, setActiveLinkRect] = useState<DOMRectReadOnly>()
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
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

    //Handle updating window size state on window size change
    //to trigger calculating new active link highlight rect 
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            console.log("bebra")
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect();
        };
    }, [])

    //Handle adding pathnames to HTML <a> element map on mount
    useEffect(() => {
        const navBar = navBarRef.current
        if (!navBar) return
        const navChildrenArr = Array.from(navBar.children)
        addPathnamesToHTMLAncorMap(navChildrenArr)
    }, [navBarRef])

    //Changes active link highlight rect on params change
    useEffect(() => {
        const activeAnchorHTML = URIToHTMLAnchorMap.get(params.pathname)
        if (!activeAnchorHTML) return
        const activeLinkRect = activeAnchorHTML.getBoundingClientRect()
        setActiveLinkRect(activeLinkRect)
    }, [params, windowSize])

    return { activeLinkRect }
}

export default useGetActiveNavLinkRect