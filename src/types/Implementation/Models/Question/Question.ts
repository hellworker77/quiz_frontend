import {AbstractQuestion} from "../../../Abstraction/AbstractQuestion";

export type Question = AbstractQuestion &  {
    testId: string | null;
}
