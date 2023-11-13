import '@/styles/globals.css';
import '@/styles/auth.css';
import '@/styles/Pokedex.css';
import '@/styles/Pokemons.css';
import '@/styles/Searchbar.css';
import '@/styles/auth.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  );
}