import { CSSProperties, FC, ReactNode, useMemo, useRef } from 'react'
import classes from "./MyAnimatedIconStack.module.css"
import { TMouseCoordinates } from './MyAnimatedIconStack'

type TMyAnimatedIconStackItem = {
    children: ReactNode,
    mousePosition: TMouseCoordinates,
    containerRect: DOMRectReadOnly | null
}

const MyAnimatedIconStackItem: FC<TMyAnimatedIconStackItem> = ({ children, mousePosition, containerRect }) => {

    const stackItemRef = useRef<HTMLDivElement>(null)
    const getStackItemSpacing = useMemo((): CSSProperties => {
        const initialStyles: CSSProperties = {
            transition: "padding-left 0.2s, padding-right 0.2s, transform 0.2s",
            paddingLeft: "var(--spacing-s)",
            transform: "translateY(0px)"
        };

        if (!stackItemRef.current || !containerRect || !mousePosition) {
            return initialStyles;
        }

        const stackItem = stackItemRef.current;
        const itemRect = stackItem.getBoundingClientRect();
        const relativeToContainerMouseX = mousePosition.x - containerRect.x;

        const relativeItemPositionX = itemRect.x - containerRect.x;
        const centerOfItemX = relativeItemPositionX + itemRect.width / 2;
        const itemCenterToMouseXPx = relativeToContainerMouseX - centerOfItemX;
        const itemCenterToMouseFactorX = 1 - Math.abs(itemCenterToMouseXPx / containerRect.width);

        const marginX = Math.pow(3, itemCenterToMouseFactorX * 3.5) / 7;
        const marginBottom = -marginX * 2;

        return { marginLeft: marginX, marginRight: marginX, transform: `translateY(${marginBottom}px)` };
    }, [mousePosition, containerRect, stackItemRef]);

    return (
        <div ref={stackItemRef} className={classes["animated-stack-item__container"]} >
            <div className={classes["animated-stack-item"]} style={getStackItemSpacing} >
                {children}
            </div>
        </div>
    )
}

export default MyAnimatedIconStackItem