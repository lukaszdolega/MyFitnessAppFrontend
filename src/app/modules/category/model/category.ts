import { Training } from "../../common/model/training";

export interface Category{
    name: string,
    description: string,
    slug : string,
    training: Array<Training>
}