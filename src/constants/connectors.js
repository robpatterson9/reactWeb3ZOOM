
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { BscConnector } from '@binance-chain/bsc-connector'

const POLLING_INTERVAL = 12000

const rpcConfig = {
  RPC_URL_56: 'https://bscscan.com/',
  RPC_URL_4: 'https://testnet.bscscan.com/',
}

const RPC_URLS = {
  56: rpcConfig.RPC_URL_56,
  4: rpcConfig.RPC_URL_4
}

export const walletconnect = new WalletConnectConnector({
  rpc: {
    56: { 56: RPC_URLS[56], 4: RPC_URLS[4] },
    bridge: 'https://bridge.walletconnect.org',
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const bscConnector = new BscConnector({ supportedChainIds: [56
  // ,97
  ] })

export const injected = new InjectedConnector({ supportedChainIds: [1
  // , 1, 4
] })

export const fortmatic = new FortmaticConnector({ apiKey: 'pk_test_?', chainId: 4, pollingInterval: 15000 })
