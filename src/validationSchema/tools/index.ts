import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  type: yup.string().nullable(),
  brand: yup.string().nullable(),
  model_number: yup.string().nullable(),
  outlet_id: yup.string().nullable().required(),
});
