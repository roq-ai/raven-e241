import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  product_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
