import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './App.css';
import TextBox from './components/text-box/TextBox';

import { data } from './mock/data';

const App = () => {
  console.log('data', data);

  const { textFields } = data;

  // default initial values as empty string
  const entries = Object.entries(data);
  const initialValues = entries.reduce((acc, [key, value]) => {
    const fields = value as any;
    fields.forEach((item: any) => {
      acc[item.name] = '';
    });

    return acc;
  }, {} as any);

  console.log('initialValues :>> ', initialValues);

  // iterate initial values and create dynamic validation schema
  const validationSchema = () => {
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

  const textFieldsList = textFields.map((item) => (
    <TextBox key={item.id} {...item} />
  ));

  const onSubmit = (values: any, props: any) => {
    console.log('form values', values);

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
  };

  return (
    <div className='container'>
      <div className='formTitle'>
        <h2>Formik & Yup Form</h2>
      </div>
      <div className='formContainer'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => <Form>{textFieldsList}</Form>}
        </Formik>
      </div>
    </div>
  );
};

export default App;
