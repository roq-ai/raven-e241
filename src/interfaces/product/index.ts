import { InventoryInterface } from 'interfaces/inventory';
import { OrderInterface } from 'interfaces/order';
import { SupplyChainInterface } from 'interfaces/supply-chain';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  quantity: number;
  status: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order?: OrderInterface[];
  supply_chain?: SupplyChainInterface[];
  business?: BusinessInterface;
  _count?: {
    inventory?: number;
    order?: number;
    supply_chain?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  business_id?: string;
}
