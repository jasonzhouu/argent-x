export const routes = {
  welcome: () => "/index.html",
  newWallet: () => "/wallets/new",
  recoverBackup: () => "/recover",
  password: () => "/password",
  account: () => "/account",
  accounts: () => "/accounts",
  newToken: () => "/tokens/new",
  token: (tokenAddress: string) => `/tokens/${tokenAddress}`,
  tokenPath: () => "/tokens/:tokenAddress",
  hideToken: (tokenAddress: string) => `/tokens/${tokenAddress}/hide`,
  hideTokenPath: () => "/tokens/:tokenAddress/hide",
  reset: () => "/reset",
  disclaimer: () => "/disclaimer",
  settings: () => "/settings",
  settingsLocalhostPort: () => "/settings/localhost-port",
  settingsDappConnections: () => "/settings/dapp-connections",
  backupDownload: (isFromSettings?: boolean) =>
    `/backup-download${isFromSettings ? "?settings" : ""}`,
  error: () => "/error",
}
