const getRelativeRect = (rect: DOMRectReadOnly, parentRect: DOMRectReadOnly) => {
    return new DOMRectReadOnly(
        rect.x - parentRect.x,
        rect.y - parentRect.y,
        rect.width,
        rect.height
    )
}

export default getRelativeRect