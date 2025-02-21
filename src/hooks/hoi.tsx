import { useEffect, useState } from "react";

const useURLChange = () => {
    const [url, setUrl] = useState(window.location.pathname);

    useEffect(() => {
        const handleUrlChange = () => {
            setUrl(window.location.pathname);
        };

        window.addEventListener("popstate", handleUrlChange);
        window.addEventListener("pushstate", handleUrlChange);
        window.addEventListener("replacestate", handleUrlChange);

        return () => {
            window.removeEventListener("popstate", handleUrlChange);
            window.removeEventListener("pushstate", handleUrlChange);
            window.removeEventListener("replacestate", handleUrlChange);
        };
    }, []);

    return url;
};

export default useURLChange;