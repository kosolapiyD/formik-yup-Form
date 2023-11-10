import { Form, Formik } from 'formik';
import { ChangeEvent, useState } from 'react';
import { data } from './mock/data';
import { initialValues, validationSchema } from './utils/utils';

import './App.css';

import ButtonBox from './components/button-box/ButtonBox';
import FormTitle from './components/form-title/FormTitle';
import RadioBox from './components/radio-box/RadioBox';
import TextBox from './components/text-box/TextBox';

const App = () => {
  const { personalDataSection, radioSectionA, radioSectionB } = data;

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
      <FormTitle />
      <div className='formContainer'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <TextBox {...personalDataSection} />
              <RadioBox
                {...radioSectionA}
                handleRadioChange={handleRadioChange}
              />
              <RadioBox
                {...radioSectionB}
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
