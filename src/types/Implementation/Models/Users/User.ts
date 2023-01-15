import {PhotoType} from "../Media/PhotoType";

export type User = {
    id: string | null,
    photo: PhotoType | null
    userName: string | null,
    email: string | null,
    password: string | null,
    repeatPassword: string | null,
    rating: number | null
}
