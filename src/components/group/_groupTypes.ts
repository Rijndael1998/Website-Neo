export type GroupPreviewContent = {
    title: string,
    desc: string | JSX.Element,
    isDemo: boolean,
    url?: string,
    image?: string,
}

export type GroupViewArray = Array<GroupPreviewContent>;