import { Page } from "src/app/modules/common/model/page";
import { Training } from "../../common/model/training";
import { Category } from "./category";

export interface CategoryTrainings{
    category: Category,
    trainings: Page<Training>
}