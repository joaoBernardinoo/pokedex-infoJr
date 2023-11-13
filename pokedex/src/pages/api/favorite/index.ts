import { NextApiRequest, NextApiResponse } from 'next';
import prisma  from '../prisma';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return await handleGetFavorites(req, res);
    case 'POST':
      return await handleAddFavorite(req, res);
   
    case 'DELETE':
      return await handleRemoveFavorite(req, res);

    default:
      res.status(405).end(); // Método não permitido
  }
}

async function handleGetFavorites(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  try {
    const favorites = await getUserFavorites(Number(userId));

    res.status(200).json({ favorites });
  } catch (error) {
    console.error('Erro ao obter favoritos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

async function handleAddFavorite(req: NextApiRequest, res: NextApiResponse) {
  const { userId, pokemonId } = req.body;

  try {
    await addFavoriteToUser(Number(userId), Number(pokemonId));

    res.status(201).end(); // Criado com sucesso
  } catch (error) {
    console.error('Erro ao adicionar favorito:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

async function handleRemoveFavorite(req: NextApiRequest, res: NextApiResponse) {
  const { userId, pokemonId } = req.body;

  try {
    await removeFavoriteFromUser(Number(userId), Number(pokemonId));

    res.status(204).end(); // Sem conteúdo
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}


// -------------------------------------
// Funções
async function getUserFavorites(userId: number) {
  const favorites = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      pokemonId: true,
    },
  });

  return favorites.map((favorite) => favorite.pokemonId);
}

async function addFavoriteToUser(userId: number, pokemonId: number) {
  await prisma.favorite.create({
    data: {
      userId,
      pokemonId,
    },
  });
}

async function removeFavoriteFromUser(userId: number, pokemonId: number) {
  await prisma.favorite.deleteMany({
    where: {
      userId,
      pokemonId,
    },
  });
}