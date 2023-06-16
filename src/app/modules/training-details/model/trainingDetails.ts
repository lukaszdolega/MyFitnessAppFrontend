import { Review } from "./review"

export interface TrainingDetails{
    id: number
    name: string,
    content: string,
    category: string,
    level: string,
    slug: string,
    reviews: Array<Review>
}