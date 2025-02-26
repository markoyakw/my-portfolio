import { MOBILE_WINDOW_WIDTH } from "@/constants";
import useWindowSize from "./useWindowSize";

const useIsMobileWindowSize = () => {
    const { width } = useWindowSize();
    return width <= MOBILE_WINDOW_WIDTH;
};

export { useIsMobileWindowSize };