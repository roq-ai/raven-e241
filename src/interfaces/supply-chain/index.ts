import { BusinessInterface } from 'interfaces/business';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface SupplyChainInterface {
  id?: string;
  business_id: string;
  product_id: string;
  status: string;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface SupplyChainGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
  product_id?: string;
  status?: string;
}
