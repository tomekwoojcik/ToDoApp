import { createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = (children) => (
  <FormContext.Provider>{children}</FormContext.Provider>
);

export default FormContext;
