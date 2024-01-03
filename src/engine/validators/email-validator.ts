import { IValidateFnProps } from "../validate-fn-props";
import { IValidationResult } from "../validation-result";
import { IValidationRule } from "../validation-rule";
import { EValidatorType } from "../validator-type.enum";
import { ICommonValidatorProps } from "./common-validator";
import { IDateValidatorProps } from "./date-validator";

export interface IEmailValidatorProps extends ICommonValidatorProps {
    minLength?:  IValidationRule<number>;
    maxLength?:  IValidationRule<number>;
    type: EValidatorType.email
}

export const validateEmail = (props: IValidateFnProps<IEmailValidatorProps>) : IValidationResult[] => {
    return []
}