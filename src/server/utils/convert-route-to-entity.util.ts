const mapping: Record<string, string> = {
  businesses: 'business',
  inventories: 'inventory',
  orders: 'order',
  products: 'product',
  'supply-chains': 'supply_chain',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
