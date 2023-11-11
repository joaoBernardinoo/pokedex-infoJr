export type UserRequest = {
    name: string;
    email: string;
    password: string;

};

export type UserResponse = {
    id: number;
    email: string;
    name: string | null;
    password: string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
};

export type DeleteUserRequest = {
    id: number;
};

export type GetUserResponse = {
    data: UserResponse[];
};