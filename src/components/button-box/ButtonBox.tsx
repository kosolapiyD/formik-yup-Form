import { Button } from '@mui/material';
import { FormikProps } from 'formik';

const ButtonBox = (props: FormikProps<any>) => {
  return (
    <div className='buttonBox'>
      <Button type='submit' variant='contained' disabled={props.isSubmitting}>
        {props.isSubmitting ? 'Loading' : 'Submit'}
      </Button>
    </div>
  );
};

export default ButtonBox;
