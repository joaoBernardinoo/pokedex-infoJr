import React from "react";

const Searchbar = () => {
    let search = "Charizard"
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("pokemon: ", e.target.value)
        search = e.target.value
    }
    
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>
                {search}
            </div>
        </div>
    )
}

export default Searchbar;