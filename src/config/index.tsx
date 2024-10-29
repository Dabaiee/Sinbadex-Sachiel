import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = '394218c89665200c7f870614d395c6cb'

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Sinbadex-Sachiel',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet, sepolia] as const

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  featuredWalletIds: [],
  themeMode: 'dark'
})

