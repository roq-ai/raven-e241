import * as yup from 'yup';

export const supplyChainValidationSchema = yup.object().shape({
  status: yup.string().required(),
  quantity: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
