import { ReactNode, CSSProperties, FC, HTMLAttributes } from 'react';
import getSpacingStyles, { TSpacingProp } from './getMyContainerSpacingStyles';
import { TCssSizeProp } from '../../../types/cssVariables';

type TContainerProps = {
    children: ReactNode;
    style?: CSSProperties;
    maxWidth?: string;
    maxHeight?: string;
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
    ...props
}) => {

    const containerStyle: CSSProperties = {
        ...style,
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
