import * as yup from 'yup';

export const outletValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
