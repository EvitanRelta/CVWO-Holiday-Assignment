export type ApiSingleTypeError = {
    errors: string[];
}

export type ApiMultiTypeError = {
    errors: {
        full_messages: string[];
        [fieldName: string]: string[];
    }
}

export type ApiDataErrorTypes = ApiSingleTypeError | ApiMultiTypeError;