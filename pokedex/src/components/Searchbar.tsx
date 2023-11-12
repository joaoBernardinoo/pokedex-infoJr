import React, {useState} from "react";
import '@/styles/Home.module.css';
import Pokelogo from '@/images/lupa.png';
import Image from 'next/image';

const Searchbar = () => {
    const [search, setSearch] = useState("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("pokemon: ", search)
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