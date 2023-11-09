import * as Yup from 'yup';
import { data } from '../mock/data';

const entries = Object.entries(data);
export const initialValues = entries.reduce((acc, [key, value]) => {
  const fields = value as any;
  if (key === 'personalDataSection') {
    fields.textFields.forEach((item: any) => {
      acc[item.name] = '';
    });
  } else {
    acc[key] = '';
  }
  return acc;
}, {} as any);

console.log('initialValues', initialValues);

export const validationSchema = () => {
  const schema = {} as any;
  Object.keys(initialValues).forEach((key: string) => {
    switch (key) {
      case 'fullName':
        return (schema[key] = Yup.string()
          .min(3, "It's too short")
          .required('Required field'));
      case 'email':
        return (schema[key] = Yup.string()
          .email('Enter valid email')
          .required('Required field'));
      case 'anotherPhone':
        return;

      default:
        return (schema[key] = Yup.string().required('Required field'));
    }
  });
  return Yup.object().shape(schema);
};
