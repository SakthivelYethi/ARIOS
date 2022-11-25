import { ReactNode } from "react"

export type RouteType = {
    element: ReactNode,
    state: string,
    index?: boolean,
    path?: string,
    isNotMenu?: boolean,
    child?: RouteType[],
    sidebarProps: {
        displayText: string,
        icon?: ReactNode
    }
}