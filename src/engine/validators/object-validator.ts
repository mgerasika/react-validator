import { IValidateFnProps } from "../validate-fn-props";
import { IValidationResult } from "../validation-result";
import { ValidatorProps } from "../validator-props";
import { EValidatorType } from "../validator-type.enum";
import { ICommonValidatorProps } from "./common-validator";

export interface IObjectValidatorProps extends ICommonValidatorProps {
    type: EValidatorType.object
    objectValidators: Record<string, ValidatorProps | ValidatorProps[]>
}

export const validateObject = ( props: IValidateFnProps<IObjectValidatorProps>) : IValidationResult[] => {
    return []
}