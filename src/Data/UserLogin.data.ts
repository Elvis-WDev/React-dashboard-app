import { LoginApiResponse } from "../hooks/interfaces/Atuh.interfaces";


export const UserDataLogin: LoginApiResponse = {
    data: {
        user: {
            id: 1,
            username: "user1",
            email: "user1@example.com",
            name: "User One",
            token: "fake-jwt-token",
        },
        status: "success",
        message: "Login successful",
    }
}