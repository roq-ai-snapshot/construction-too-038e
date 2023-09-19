interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read outlet information',
    'Read tool information',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage outlets',
    'Manage tools',
    'Manage rentals',
    'Manage inventory',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5568b22a-1e53-4b47-9414-f8183473a5a5',
};
