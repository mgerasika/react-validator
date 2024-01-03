import { IValidateFnProps } from "./validate-fn-props";
import { IValidationResult as IValidateFnResult } from "./validation-result";

export type TValidateFn = (props: IValidateFnProps<any>) => IValidateFnResult[];