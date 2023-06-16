import { Training } from "../../training/model/training";

export interface Category{
    name: string,
    description: string,
    slug : string,
    product: Array<Training>
}