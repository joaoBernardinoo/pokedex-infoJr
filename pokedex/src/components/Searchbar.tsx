import React, {useState, useContext} from "react";
import '@/styles/Home.module.css';
import Pokelogo from '@/images/lupa.png';
import Image from 'next/image';


interface SearchbarProps{
    onSearch: (name: string | undefined) => Promise<void>;
}

const Searchbar = (props: SearchbarProps) => {
    const [search, setSearch] = useState("")
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
                <input placeholder="Pesquisar pokémon" onChange={onChangeHandler}/>
                <button type="submit" className="search-button">
                    <Image src={Pokelogo}
                    alt="pokelogo" onClick={onButtonClickHandler}/>
                </button>
        </div>
    )
}

export default Searchbar;