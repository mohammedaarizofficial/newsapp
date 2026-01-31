export interface Article{
    source:{
        id:string|null,
        name:string
    }
    author: string,
    title: string,
    description: string,
    url: string,
    image: string,
    date: string,
    content: string
}

export interface Apiresponse{
    status:string,
    totalResults:number
    articles:Article[]
}