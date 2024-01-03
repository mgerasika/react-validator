import { IValidationResult } from "../validation-result";
import { EValidatorType } from "../validator-type.enum";
import { ICommonValidatorProps } from "./common-validator";
import { IValidateFnProps } from "../validate-fn-props";
import { IValidationRule } from "../validation-rule";

export interface IStringValidatorProps extends ICommonValidatorProps {
    type: EValidatorType.string
    minLength?:  IValidationRule<number>;
    maxLength?:  IValidationRule<number>;
    regExp?: IValidationRule<string>;
}

export const validateString = ({fieldName, fullFieldName, fieldValue, props: {type, ...props}}: IValidateFnProps<IStringValidatorProps>) : IValidationResult[] => {
    const res: IValidationResult[] = [];
   
    if(props.required && !fieldValue) {
        res.push({
            fieldName,
            type,
            fullFieldName,
            error: props.required.clientError || 'Required'
        })
    }
    if (fieldValue !== undefined && fieldValue !== null && typeof fieldValue === 'string') {
        const strValue = fieldValue as string;
        if(props.minLength !== undefined && strValue.length < props.minLength.value) {
            res.push({
                fieldName,
                type,
                fullFieldName,
                error: 'minLength',
                clientError: `Min length should be ${props.minLength}`
            })
        }
        if(props.maxLength !== undefined && strValue.length > props.maxLength.value) {
            res.push({
                fieldName,
                type,
                fullFieldName,
                error: 'maxLength',
                clientError: `Max length should be ${props.maxLength.value}`
            })
        }
    }
    return res
}