export interface IValidateFnProps<T> {
    fieldName:string,
    fullFieldName:string;
    fieldValue:unknown, 
    props: T
}