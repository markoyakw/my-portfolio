import { FC, ReactNode } from "react"

export type TMyGridItemProps = {
    children: ReactNode
}

const MyGridItem: FC<TMyGridItemProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MyGridItem