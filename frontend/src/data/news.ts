export interface News{
    source: {
    id: string,
    name: string
    },
    author: string,
    title: string,
    description: string,
    url:string,
    image: string,
    date: string,
    content: string
}

export interface Apiresponse{
    status:string,
    totalResult:number,
    articles:News[]
}