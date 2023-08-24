import axios from 'axios';
import queryString from 'query-string';
import { SupplyChainInterface, SupplyChainGetQueryInterface } from 'interfaces/supply-chain';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSupplyChains = async (
  query?: SupplyChainGetQueryInterface,
): Promise<PaginatedInterface<SupplyChainInterface>> => {
  const response = await axios.get('/api/supply-chains', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSupplyChain = async (supplyChain: SupplyChainInterface) => {
  const response = await axios.post('/api/supply-chains', supplyChain);
  return response.data;
};

export const updateSupplyChainById = async (id: string, supplyChain: SupplyChainInterface) => {
  const response = await axios.put(`/api/supply-chains/${id}`, supplyChain);
  return response.data;
};

export const getSupplyChainById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/supply-chains/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupplyChainById = async (id: string) => {
  const response = await axios.delete(`/api/supply-chains/${id}`);
  return response.data;
};
