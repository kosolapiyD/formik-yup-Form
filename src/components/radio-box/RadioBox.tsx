import { ErrorMessage, Field } from 'formik';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@mui/material';

type RadioBoxOptionProps = {
  id: string;
  value: string;
};

type RadioBoxProps = {
  name: string;
  label: string;
  options: RadioBoxOptionProps[];
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioBox = ({
  name,
  options,
  label,
  handleRadioChange,
}: RadioBoxProps) => {
  const radioOptions = options.map(({ id, value }: RadioBoxOptionProps) => {
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
    <div className='sectionBox'>
      <FormControl component='fieldset'>
        <p className='sectionLabel'>{label}</p>
        <Field as={RadioGroup} name={name}>
          {radioOptions}
        </Field>
        <FormHelperText>
          <ErrorMessage component='div' className='errorText' name={name} />
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default RadioBox;
