import Head from 'next/head';
import Pokedex from '../components/pokedex';
import LoginModal from '@/components/auth';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginModal session={user}/>
        <Pokedex />
      </main>
    </>
  );
}
