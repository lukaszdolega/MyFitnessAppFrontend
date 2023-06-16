import { Page } from "src/app/shared/model/page";
import { Training } from "../../training/model/training";
import { Category } from "./category";

export interface CategoryTrainings{
    category: Category,
    trainings: Page<Training>
}