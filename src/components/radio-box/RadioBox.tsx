import { ErrorMessage, Field } from 'formik';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@mui/material';

type RadioBoxProps = {
  data: any;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioBox = ({ data, handleRadioChange }: RadioBoxProps) => {
  const { name, options, label } = data;

  const radioOptions = options.map(({ id, value }: any) => {
    return (
      <FormControlLabel
        key={id}
        value={value}
        control={<Radio onChange={handleRadioChange} />}
        label={value}
      />
    );
  });

  return (
    <FormControl component='fieldset'>
      <p className='radioTitle'>{label}</p>
      <Field as={RadioGroup} name={name}>
        {radioOptions}
      </Field>
      <FormHelperText>
        <ErrorMessage component='div' className='radioError' name={name} />
      </FormHelperText>
    </FormControl>
  );
};

export default RadioBox;
