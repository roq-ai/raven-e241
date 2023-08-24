interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Supply Chain Manager'],
  tenantName: 'Business',
  applicationName: 'RAVEN',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
