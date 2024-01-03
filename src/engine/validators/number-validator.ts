import { IValidationResult } from "../validation-result";
import { EValidatorType } from "../validator-type.enum";
import { ICommonValidatorProps } from "./common-validator";
import { IValidateFnProps } from "../validate-fn-props";
import { IValidationRule } from "../validation-rule";

export interface INumberRange {
    minValue?: number;
    maxValue?: number;
}
export interface INumberValidatorProps extends ICommonValidatorProps {
    type: EValidatorType.number

    minValue?:  IValidationRule<number>;
    maxValue?:  IValidationRule<number>;
    ranges?: INumberRange[];
    numberFormat?:  IValidationRule<string>;
}

export const validateNumber = ({ fieldName, fullFieldName, fieldValue, props: { type, ...rest } }: IValidateFnProps<INumberValidatorProps>): IValidationResult[] => {
    const res: IValidationResult[] = [];

    if (rest.required && !fieldValue) {
        res.push({
            fieldName,
            fullFieldName,
            type,
            error: 'Required'
        })
    }
    if (fieldValue !== undefined && fieldValue !== null && typeof fieldValue === 'number') {
        const dValue = fieldValue as number;
        if (rest.minValue !== undefined && dValue < rest.minValue.value) {
            res.push({
                fieldName,
                fullFieldName,
                type,
                error: 'minValue',
                clientError: `minValue should be ${rest.minValue.value}`
            })
        }
        if (rest.maxValue !== undefined && dValue > rest.maxValue.value) {
            res.push({
                fieldName,
                fullFieldName,
                type,
                error: 'maxValue',
                clientError: `maxValue should be ${rest.maxValue.value}`
            })
        }
        if(rest.ranges?.length) {
            // TODO implement ranages validator
        }
    }
    return res
}