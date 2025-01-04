import { RefObject, useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"

const useGetActiveNavLinkRect = (
    navBarRef: RefObject<HTMLElement>,
    navBarItemAligmentRef: RefObject<HTMLElement>
) => {

    const [activeLinkRect, setActiveLinkRect] = useState<DOMRectReadOnly>()
    const [isNavBarMutationObserved, setIsNavBarMutationObserved] = useState(false)
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

    //Recalculate active link highlight rect ow window size change 
    useEffect(() => {
        if (isNavBarMutationObserved) {
            return
        }
        const resizeObserver = new ResizeObserver(() => {
            recalculateHighlightRect()
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
    const recalculateHighlightRect = () => {
        const activeAnchorHTML = URIToHTMLAnchorMap.get(params.pathname)
        if (!activeAnchorHTML) return
        const activeLinkRect = activeAnchorHTML.getBoundingClientRect()
        setActiveLinkRect(activeLinkRect)
    }
    useEffect(() => {
        recalculateHighlightRect()
    }, [params])


    useEffect(() => {
        // const navBarItemAligment = navBarItemAligmentRef.current
        if (!navBarRef.current) {
            return
        }
        const mutationObserver = new MutationObserver(() => {
            setIsNavBarMutationObserved(true)
        });

        mutationObserver.observe(navBarRef.current,
            {
                attributes: true, // Watch for style or class changes
                attributeFilter: ['style', 'class'], // Specific attributes
                subtree: false,
            }
        );

        navBarRef.current.addEventListener("transitionend", () => {
            setIsNavBarMutationObserved(false)
        })

        return () => {
            mutationObserver.disconnect();
        };
    }, [])

    return { activeLinkRect, recalculateHighlightRect, isNavBarMutationObserved }
}

export default useGetActiveNavLinkRect