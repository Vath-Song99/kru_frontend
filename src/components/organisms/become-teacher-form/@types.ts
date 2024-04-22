interface InputFormsTypes {
  placeholder?: string;
  type?: string;
  borderColor?: string;
  borderRadius?: string;
}

export interface BecomeTeacherFormType {
  title: string;
  description: string;
  inputForms: InputFormsTypes[];
  buttonTitle: string;
}
