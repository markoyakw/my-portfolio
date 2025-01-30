function removeMatchingEnding(string: string, ending: string) {
    if (string.endsWith(ending)) {
        return string.slice(0, -ending.length);
    }
    return string;
}

export default removeMatchingEnding