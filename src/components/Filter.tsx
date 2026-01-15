import { useState } from "react"

type Filterprops={
    onSortChange:(sortby:string)=>void;
}

export default function Filter({onSortChange}:Filterprops){
    const[sortby, setSortBy] = useState<string>('popularity');

    const handleSort=(value:string)=>{
        setSortBy(value);
        onSortChange(value);
    }

    return(
        <>
        <div className="dropdown text-end mb-5">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By:{
                    sortby ==='publishedAt'?'Latest':sortby
                }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" onClick={()=>handleSort('popularity')}>Popularity</button>
                <button className="dropdown-item" onClick={()=>handleSort('relevancy')}>Relevancy</button>
                <button className="dropdown-item" onClick={()=>handleSort('publishedAt')}>Latest</button>
            </div>
        </div>
        </>
    )
}