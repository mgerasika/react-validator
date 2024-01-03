import { IValidateFnProps } from "../validate-fn-props";
import { IValidationResult } from "../validation-result";
import { EValidatorType } from "../validator-type.enum";
import { TValidateFn } from "../validate-fn";
import { ICommonValidatorProps } from "./common-validator";
import { IValidationRule } from "../validation-rule";

export interface IDateValidatorProps extends ICommonValidatorProps {
    dateFormat?:  IValidationRule<"dd/mm/yyyy" | "mm/dd/yyyy">;
    type: EValidatorType.date
}

export const validateDate = (props: IValidateFnProps<IDateValidatorProps>) : IValidationResult[] => {
    return []
}