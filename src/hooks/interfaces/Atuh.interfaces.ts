export interface LoginApiResponse {
    data: LoginResponse
}

export interface LoginResponse {

    status: string;
    message: string;
    user: {
        id: number;
        username: string;
        email: string;
        name: string;
        token: string;
    }

}

