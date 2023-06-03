type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}

type Filetree = {
    tree: [
        {
            path: string,
        }
    ]
}

type ErrorPage = {
    error: Error;
    reset: () => void;
}