import React, {useState, useContext} from "react";

interface SearchbarProps{
    onSearch: (name: string | undefined) => Promise<void>;
}

const Searchbar = (props: SearchbarProps) => {
    const[search, setSearch] = useState("")
    const {onSearch} = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)

        // se a barra estiver vazia
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        if(search){
          onSearch(search);  
        }
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