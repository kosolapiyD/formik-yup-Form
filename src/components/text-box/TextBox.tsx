import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

type TextBoxProps = {
  name: string;
  label: string;
};

const TextBox = ({ name, label }: TextBoxProps) => {
  return (
    <div className='fieldsBox'>
      <p className='label'>{label}</p>
      <Field
        as={TextField}
        name={name}
        size='small'
        helperText={
          <ErrorMessage component='div' className='error' name={name} />
        }
      />
    </div>
  );
};

export default TextBox;
