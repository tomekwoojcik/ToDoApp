import { createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = (children) => {
    return (
        <FormContext.Provider>{children}</FormContext.Provider>
    )
}

export default FormContext;