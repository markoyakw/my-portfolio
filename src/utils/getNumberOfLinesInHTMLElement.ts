const getNumberOfLinesInHTMLelement = (element: HTMLElement) => {
    if (!element) return 0;
    const computedStyle = window.getComputedStyle(element);
    const elementHeight = element.clientHeight;
    let lineHeight = parseFloat(computedStyle.lineHeight);

    if (isNaN(lineHeight)) {
        lineHeight = parseFloat(computedStyle.fontSize) * 1.2;
    }
    return Math.round(elementHeight / lineHeight);
}

export default getNumberOfLinesInHTMLelement