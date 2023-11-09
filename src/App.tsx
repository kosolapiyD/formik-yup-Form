import { Form, Formik } from 'formik';
import { initialValues, validationSchema } from './utils/utils';

import './App.css';
import TextBox from './components/text-box/TextBox';

import { ChangeEvent, useState } from 'react';
import ButtonBox from './components/button-box/ButtonBox';
import RadioBox from './components/radio-box/RadioBox';
import { data } from './mock/data';

const App = () => {
  const { personalDataSection, radioSectionA } = data;

  const [radioBtnValue, setRadioBtnValue] = useState('');
  const handleRadioChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue((target as HTMLInputElement).value);
  };

  const onSubmit = (values: any, props: any) => {
    console.log('form values', values);

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      setRadioBtnValue('');
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
          {(props) => (
            <Form>
              {/* {textFieldsList} */}
              <TextBox {...personalDataSection} />
              <RadioBox
                {...radioSectionA}
                handleRadioChange={handleRadioChange}
              />
              <ButtonBox {...props} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
