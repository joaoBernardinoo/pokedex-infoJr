export type UserRequest = {
    name: string;
    email: string;

};

export type UserResponse = {
    id: number;
    email: string;
    name: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
};

export type DeleteUserRequest = {
    id: number;
};

export type GetUserResponse = {
    userExists: boolean;
    userId: Number;
};