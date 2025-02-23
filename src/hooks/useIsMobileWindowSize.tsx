import { MOBILE_WINDOW_WIDTH } from "@/constants";
import useWindowWidth from "./useWindowWidth";

const useIsMobileWindowSize = () => {
    const width = useWindowWidth();
    return width <= MOBILE_WINDOW_WIDTH;
};

export { useIsMobileWindowSize };