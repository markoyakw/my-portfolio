import useObserver from "@hooks/useObserveIntersection";
import { FC, useEffect, useState } from "react";
import classes from "./MyVideo.module.css"
import MyLoaderSpinner from "../MyLoaderSpinner/MyLoaderSpinner";

type MyVideoProps = {
    src: string;
    poster?: string;
    preload?: "auto" | "metadata" | "none";
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    className?: string;
    type?: string

    isLoadingStarted: boolean | undefined;
    startLoadingWhenVisible?: boolean;
};

const MyVideo: FC<MyVideoProps> = ({
    src,
    poster,
    preload = "metadata",
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    className = "",
    type = "video/mp4",

    isLoadingStarted,
    startLoadingWhenVisible,
}) => {

    const [isLoadingStartedState, setIsLoadingStartedState] = useState(false)
    const [videoRef, isVideoInView] = startLoadingWhenVisible ? useObserver<HTMLVideoElement>() : [null, false];
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isLoadingStarted) {
            setIsLoadingStartedState(true)
        }
        if (isVideoInView) {
            setIsLoadingStartedState(true)
        }
    }, [isLoadingStarted, isVideoInView, startLoadingWhenVisible])

    const containerClassName = `${className}`
    const loaderClassName = `${classes["loader__container"]}`
    const videoClassName = `${classes["video"]} ${isLoading ? classes["video--loading"] : ""}`

    const handleVideoEnd = () => {
        if (!videoRef?.current) return
        videoRef.current.play()
    }

    const handleLoadedData = () => {
        setIsLoading(false)
    }

    return (
        <div className={containerClassName}>
            {isLoading &&
                <div className={loaderClassName}>
                    <MyLoaderSpinner />
                </div>
            }
            <video
                className={videoClassName}
                ref={videoRef}
                poster={poster}
                preload={preload}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                onLoadedData={handleLoadedData}
                onEnded={handleVideoEnd}
            >
                {isLoadingStartedState && <source src={src} type={type} />}
            </video>
        </div>
    );
};

export default MyVideo;
