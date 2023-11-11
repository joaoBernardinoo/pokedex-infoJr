import { useEffect, useState } from 'react';
import Searchbar from '@/components/Searchbar';
import Pokelogo from '@/images/pokelogo.png';
import Image from 'next/image';

export default function Pokedex() {
    return(
        <div>
            <Image src={Pokelogo}alt="pokelogo"/>
            <Searchbar/>
        </div>
    );
}