import { UserInterface } from 'interfaces/user';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  quantity: number;
  user_id: string;
  product_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  product_id?: string;
}
