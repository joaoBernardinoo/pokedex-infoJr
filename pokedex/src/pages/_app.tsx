import '@/styles/globals.css'
import '@/styles/auth.css'
import '@/styles/Pokedex.css'
import '@/styles/Pokemons.css'
import '@/styles/Searchbar.css'
import '@/styles/auth.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
