import { ToolInterface } from 'interfaces/tool';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  tool_id: string;
  outlet_id: string;
  quantity?: number;
  status?: string;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  outlet?: OutletInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  outlet_id?: string;
  status?: string;
}
