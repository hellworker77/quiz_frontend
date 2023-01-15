import {PhotoType} from "../Implementation/Models/Media/PhotoType";

export type AbstractQuestion = {
    id: string | null,
    title: string | null,
    answers: Array<string> | null,
    correctAnswer: string | null,
    photo: PhotoType | null
}
