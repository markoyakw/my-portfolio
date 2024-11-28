import { ReactNode, CSSProperties, FC, HTMLAttributes } from 'react';
import getSpacingStyles, { TSpacingProp } from './getMyContainerSpacingStyles';
import { TCssSizeProp } from '../../../types/cssVariables';

type TContainerProps = {
    children: ReactNode;
    style?: CSSProperties;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: TCssSizeProp;
    minHeight?: TCssSizeProp;
    width?: TCssSizeProp;
    height?: TCssSizeProp;
    margin?: TSpacingProp;
    padding?: TSpacingProp
    addedClassName?: string;
    aspectRatio?: CSSProperties["aspectRatio"]
} & HTMLAttributes<HTMLDivElement>;

const MyContainer: FC<TContainerProps> = ({
    children,
    style,
    maxWidth,
    maxHeight,
    margin,
    padding,
    height,
    width,
    aspectRatio,
    addedClassName,
    minHeight,
    minWidth,
    ...props
}) => {

    const containerStyle: CSSProperties = {
        maxWidth,
        maxHeight,
        width,
        height,
        aspectRatio,
        ...getSpacingStyles("margin", margin),
        ...getSpacingStyles("padding", padding)
    }

    return (
        <div
            style={containerStyle}
            className={`${props.className} ${addedClassName || ""}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default MyContainer;
