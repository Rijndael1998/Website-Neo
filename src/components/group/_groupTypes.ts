export type GroupPreviewContent = {
    title: string | JSX.Element,
    desc: string | JSX.Element,
    isDemo: boolean,
    url?: string,
    image?: string,
}

export type GroupViewArray = Array<GroupPreviewContent>;