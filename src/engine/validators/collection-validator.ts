import { IValidateFnProps } from "../validate-fn-props";
import { IValidationResult } from "../validation-result";
import { IValidationRule } from "../validation-rule";
import { ValidatorProps } from "../validator-props";
import { EValidatorType } from "../validator-type.enum";
import { ICommonValidatorProps } from "./common-validator";

export interface ICollectionValidatorProps extends ICommonValidatorProps {
    collectionLength?: IValidationRule<number>
    type: EValidatorType.collection
    itemValidators: Record<string, ValidatorProps | ValidatorProps[]>
}

export const validateCollection = (props: IValidateFnProps<ICollectionValidatorProps>) : IValidationResult[] => {
    return []
}