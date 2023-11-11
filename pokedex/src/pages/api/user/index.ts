import { NextApiRequest, NextApiResponse } from 'next';
import { UserRequest, UserResponse, DeleteUserRequest, GetUserResponse } from '../../../types/users';
import { ApiResponse } from '../../../types/response';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handlePostRequest(req, res);
  } else if (req.method === 'DELETE') {
    return handleDeleteRequest(req, res);
  } else if (req.method === 'GET') {
    return handleGetRequest(req, res);
  } else {
    return res.status(404).json({
      error: 'Not Found',
    });
  }
}

async function handlePostRequest(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<UserResponse>>
) {
  try {
    const { name, email, password } = req.body as UserRequest;

    if (false) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request body',
      });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    const userResponse: UserResponse = {
      id: user.id,
      email: user.email,
      name: user.name || '',
      password: user.password,
    };


    return res.status(201).json({
      success: true,
      data: userResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error creating user',
    });
  }
}

async function handleDeleteRequest(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<UserResponse | null>>
) {
  try {
    const { id } = req.body as DeleteUserRequest;

    if (!id || typeof id !== 'number') {
      return res.status(400).json({
        success: false,
        error: 'Invalid request body',
      });
    }

    await prisma.user.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      success: true,
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to delete user',
    });
  }
}

async function handleGetRequest(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<GetUserResponse>>
) {
  try {
    const users = await prisma.user.findMany();
    const usersCount = await prisma.user.count();
    const response: GetUserResponse = {
      data: users,
    };

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve users',
    });
  }
}
