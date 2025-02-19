import { CSSProperties, FC, ReactNode, useMemo, useRef, memo } from 'react';
import classes from "./MyAnimatedIconStack.module.css";
import { TMouseCoordinates } from './MyAnimatedIconStack';

type TMyAnimatedIconStackItemProps = {
    children: ReactNode;
    mousePosition: TMouseCoordinates;
    containerRect: DOMRectReadOnly | null;
    iconId: number;
};

const MyAnimatedIconStackItem: FC<TMyAnimatedIconStackItemProps> = ({ children, mousePosition, containerRect, iconId }) => {
    const stackItemRef = useRef<HTMLDivElement>(null);

    const getStackItemSpacing = useMemo((): CSSProperties => {
        const initialStyles: CSSProperties = {
            transform: "translateY(0px)",
        };

        if (!stackItemRef.current || !containerRect || !mousePosition) {
            return initialStyles;
        }

        const itemRect = stackItemRef.current.getBoundingClientRect();
        const relativeToContainerMouseX = mousePosition.x - containerRect.x;
        const relativeItemPositionX = itemRect.x - containerRect.x;
        const centerOfItemX = relativeItemPositionX + itemRect.width / 2;
        const distanceFromCenter = relativeToContainerMouseX - centerOfItemX;

        const distanceFactor = 1 - Math.abs(distanceFromCenter / containerRect.width);

        const marginX = Math.pow(3, distanceFactor * 3.5) / 7;
        const marginBottom = -marginX * 2;

        return {
            marginLeft: iconId === 0 ? 0 : marginX,
            marginRight: marginX,
            transform: `translateY(${marginBottom}px)`,
        };
    }, [mousePosition, containerRect, iconId]);

    return (
        <div ref={stackItemRef} className={classes["animated-stack-item__container"]}>
            <div className={classes["animated-stack-item"]} style={getStackItemSpacing}>
                {children}
            </div>
        </div>
    );
};

export default memo(MyAnimatedIconStackItem);
