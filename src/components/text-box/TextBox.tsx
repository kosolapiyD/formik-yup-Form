import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

type TextBoxProps = {
  id: string;
  name: string;
  label: string;
};

type TextBoxData = {
  label: string;
  textFields: TextBoxProps[];
};

const TextBox = ({ label, textFields }: TextBoxData) => {
  return (
    <div className='sectionBox'>
      <p className='sectionLabel'>{label}</p>
      {textFields.map(({ id, name, label }: TextBoxProps) => (
        <div key={id} className='fieldsBox'>
          <p className='label'>{label}</p>
          <Field
            as={TextField}
            name={name}
            size='small'
            helperText={
              <ErrorMessage component='div' className='errorText' name={name} />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TextBox;
