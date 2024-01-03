import { getValidator } from "./get-validator";
import { ValidatorProps } from "./validator-props";
import { IValidationResult } from "./validation-result"
import { EValidatorType } from "./validator-type.enum";

export const validate = (source: any, config: Record<string, ValidatorProps | ValidatorProps[]>, parentFieldName? :string ): IValidationResult[] => {
    if (!source) {
        return [];
    }
    return Object.keys(config).map(fieldName => {
        const rootValidatorProps = config[fieldName];
        return (Array.isArray(rootValidatorProps) ? rootValidatorProps : [rootValidatorProps]).map(validatorProps => {
            const sourceFieldValue = fieldName ? source[fieldName] : source;
            if(validatorProps.type === EValidatorType.object) {
                return validate(sourceFieldValue, validatorProps.objectValidators, fieldName);
            }
            else if(validatorProps.type === EValidatorType.collection) {
                return sourceFieldValue.map((sourceItem:any) => validate(sourceItem, validatorProps.itemValidators, fieldName)).flat();
            }
            else {
                const validator = getValidator(validatorProps.type);
                if(!validator) {
                    return [];
                }
                return validator({
                    fieldName, 
                    fieldValue:sourceFieldValue, 
                    props:validatorProps, 
                    fullFieldName: [parentFieldName, fieldName].filter(Boolean).join('.')})
            }
        }).flat()

    }).flat()
}


