interface InputFormsTypes {
  placeholder?: string;
  type?: string;
  borderColor?: string;
  borderRadius?: string;
}

export interface BecomeTeacherFormTypes {
  title: string;
  description: string;
  inputForms?: InputFormsTypes[] | undefined;
  buttonTitle: string;
}

export interface TimeAvailableFormTypes extends BecomeTeacherFormTypes {
  setTimeAvailable: string;
  setTimeDescription: string;
}
