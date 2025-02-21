import React, { FC, ReactElement, useEffect, useRef, useCallback } from "react";
import classes from "./MyNavLink.module.css";
import useURLChange from "@hooks/hoi";

type TNavLinkProps = {
    icon: ReactElement;
    children: string;
    href: string;
    addedClassName?: string;
    setHoveredLinkRect: (rect: DOMRectReadOnly | null) => void;
    onClick?: () => void;
};

const MyNavLink: FC<TNavLinkProps> = React.memo(({
    icon,
    children,
    href,
    addedClassName,
    setHoveredLinkRect,
    onClick
}) => {
    const NavLinkRef = useRef<HTMLAnchorElement>(null);
    const prevRectRef = useRef<DOMRectReadOnly | null>(null);
    const params = useURLChange();

    const getNavLinkClasses = useCallback((isActive: boolean) => {
        return `${classes["container"]} ${addedClassName} ${isActive ? classes["container--active"] : ""}`;
    }, [addedClassName]);

    const handleMouseEnter = useCallback(() => {
        if (!NavLinkRef.current || !setHoveredLinkRect) return;
        const rect = NavLinkRef.current.getBoundingClientRect();
        if (
            !prevRectRef.current ||
            prevRectRef.current.x !== rect.x ||
            prevRectRef.current.y !== rect.y ||
            prevRectRef.current.width !== rect.width ||
            prevRectRef.current.height !== rect.height
        ) {
            setHoveredLinkRect(rect);
            prevRectRef.current = rect;
        }
    }, [setHoveredLinkRect]);

    const handleMouseLeave = useCallback(() => {
        if (!setHoveredLinkRect || !NavLinkRef.current) return;
        const rect = NavLinkRef.current.getBoundingClientRect();
        const newRectCenteredX = rect.x + rect.width / 2;
        const newRectCenteredY = rect.y + rect.height / 2;
        const newRect = new DOMRect(newRectCenteredX, newRectCenteredY, 0, 0);
        if (
            !prevRectRef.current ||
            prevRectRef.current.x !== newRect.x ||
            prevRectRef.current.y !== newRect.y
        ) {
            setHoveredLinkRect(newRect);
            prevRectRef.current = newRect;
        }
    }, [setHoveredLinkRect]);

    useEffect(() => {
        if (href === params && NavLinkRef.current) {
            const rect = NavLinkRef.current.getBoundingClientRect();
            setHoveredLinkRect({
                ...rect,
                height: 0,
                width: 0,
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2,
            });
        }
    }, [params, href, setHoveredLinkRect]);

    return (
        <a
            href={href}
            ref={NavLinkRef}
            // className={({ isActive }) => getNavLinkClasses(isActive)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <div className={classes["icon"]}>{icon}</div>
            <span className={classes["label"]}>{children}</span>
        </a>
    );
});

export default MyNavLink;