import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rent_start_date: yup.date().required(),
  rent_end_date: yup.date().nullable(),
  total_cost: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
