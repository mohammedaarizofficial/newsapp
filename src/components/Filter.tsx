import { useState } from "react"

type Filterprops={
    onFilterChange:(filterby:string)=>void;
}

export default function Filter({onFilterChange}:Filterprops){
    const[filterby, setFilterBy] = useState<string>('general');

    const handleFilter=(value:string)=>{
        setFilterBy(value);
        onFilterChange(value);
    }

    return(
        <>
        <div className="dropdown text-start mb-5">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories:{filterby}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="list-group">
    <label className="list-group-item d-flex gap-2">
        <input
            className="form-check-input flex-shrink-0"
            type="radio"
            name="listGroupRadios"
            id="listGroupRadios1"
           checked={filterby==='business'}
            onChange={()=>handleFilter('business')}
        />
        <span>
            Business
        </span>
    </label>
    <label className="list-group-item d-flex gap-2">
        <input
            className="form-check-input flex-shrink-0"
            type="radio"
            name="listGroupRadios"
            id="listGroupRadios2"
            checked={filterby==='entertainment'}
            onChange={()=>handleFilter('entertainment')}
        />
        <span>
            Entertainment
        </span>
    </label>
    <label className="list-group-item d-flex gap-2">
        <input
            className="form-check-input flex-shrink-0"
            type="radio"
            name="listGroupRadios"
            id="listGroupRadios3"
            checked={filterby==='general'}
            onChange={()=>handleFilter('general')}
        />
        <span>
            General
        </span>
    </label>
    <label className="list-group-item d-flex gap-2">
        <input
            className="form-check-input flex-shrink-0"
            type="radio"
            name="listGroupRadios"
            id="listGroupRadios3"
            checked={filterby==='health'}
            onChange={()=>handleFilter('health')}
        />
        <span>
            Health
        </span>
    </label>
    <label className="list-group-item d-flex gap-2">
        <input
            className="form-check-input flex-shrink-0"
            type="radio"
            name="listGroupRadios"
            id="listGroupRadios3"
            checked={filterby==='science'}
            onChange={()=>handleFilter('science')}
        />
        <span>
            Science
        </span>
    </label>
    <label className="list-group-item d-flex gap-2">
        <input
            className="form-check-input flex-shrink-0"
            type="radio"
            name="listGroupRadios"
            id="listGroupRadios3"
            checked={filterby==='sports'}
            onChange={()=>handleFilter('sports')}
        />
        <span>
            Sports
        </span>
    </label>
</div>

            </div>
        </div>
        
        </>
    )
}