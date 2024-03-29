import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  quantity: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
