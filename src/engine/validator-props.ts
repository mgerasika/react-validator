import { ICollectionValidatorProps } from "./validators/collection-validator";
import { IDateValidatorProps } from "./validators/date-validator";
import { IEmailValidatorProps } from "./validators/email-validator";
import { INumberValidatorProps } from "./validators/number-validator";
import { IObjectValidatorProps } from "./validators/object-validator";
import { IStringValidatorProps } from "./validators/string-validator";

export type ValidatorProps = IStringValidatorProps | INumberValidatorProps | IDateValidatorProps | ICollectionValidatorProps | IEmailValidatorProps | IObjectValidatorProps;