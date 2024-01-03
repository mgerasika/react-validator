import { EValidatorType } from "./validator-type.enum";

export interface IValidationResult {
    fieldName:string;
    fullFieldName:string;
    type:EValidatorType;
    error?:string;
    clientError?:string;
}