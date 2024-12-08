const getPathnameFromURI = (URI: string) => {
    return `/${URI.split("/").splice(3).join("/")}/`
}

export default getPathnameFromURI