import React, {useState} from "react";
import '@/styles/Searchbar.css';

const Searchbar = () => {
    const[search, setSearch] = useState("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("pokemon: ", search)
    }
    
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>
                <div className="searchbar-btn">
                    <button onClick={onButtonClickHandler}>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;