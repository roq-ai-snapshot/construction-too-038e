import { InventoryInterface } from 'interfaces/inventory';
import { RentalInterface } from 'interfaces/rental';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  type?: string;
  brand?: string;
  model_number?: string;
  outlet_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  rental?: RentalInterface[];
  outlet?: OutletInterface;
  _count?: {
    inventory?: number;
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  type?: string;
  brand?: string;
  model_number?: string;
  outlet_id?: string;
}
