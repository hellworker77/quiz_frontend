import {PhotoType} from "../Implementation/Models/Media/PhotoType";

export type AbstractTest = {
    id: string | null,
    name: string | null,
    description: string | null,
    date: Date,
    stamp: string
    photo: PhotoType | null
}