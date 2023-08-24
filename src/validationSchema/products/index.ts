import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable().required(),
});
