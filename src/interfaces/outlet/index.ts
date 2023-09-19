import { InventoryInterface } from 'interfaces/inventory';
import { ToolInterface } from 'interfaces/tool';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  location?: string;
  contact_number?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  tool?: ToolInterface[];
  company?: CompanyInterface;
  _count?: {
    inventory?: number;
    tool?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  contact_number?: string;
  company_id?: string;
}
