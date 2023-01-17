    // =================== Validations Logic ===================
    export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    minSize?: number;
    maxSize?: number;
}

export function validate(validatableInput: Validatable){
    let isValid = true;
    // Check if required
    if(validatableInput.required){
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    // Check if min length
    if(validatableInput.minLength != null && typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    // Check if max length
    if(validatableInput.maxLength != null && typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    // Check min size
    if(validatableInput.minSize != null && typeof validatableInput.value === 'number'){
        isValid = isValid && validatableInput.value >= validatableInput.minSize;
    }
    // Check if max size
    if(validatableInput.maxSize!= null && typeof validatableInput.value === 'number'){
        isValid = isValid && validatableInput.value <= validatableInput.maxSize;
    }
    return isValid;
}
