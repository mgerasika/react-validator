import { EValidatorType } from "./validator-type.enum";
import { TValidateFn } from "./validate-fn";
import { validateCollection } from "./validators/collection-validator";
import { validateDate } from "./validators/date-validator";
import { validateEmail } from "./validators/email-validator";
import { validateNumber } from "./validators/number-validator";
import { validateObject } from "./validators/object-validator";
import { validateString } from "./validators/string-validator";

const VALIDATORS_MAP: Record<EValidatorType, TValidateFn> = {
    [EValidatorType.date]: validateDate,
    [EValidatorType.email]: validateEmail,
    [EValidatorType.collection]: validateCollection,
    [EValidatorType.string]: validateString,
    [EValidatorType.number]: validateNumber,
    [EValidatorType.object]: validateObject
}

export const getValidator = (type: EValidatorType) : TValidateFn => {
    return VALIDATORS_MAP[type];
}