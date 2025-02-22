import { useQuery } from 'react-query'
import { getWalletSerialized } from 'services/wallet'

export const GET_WALLET_KEY = 'getWalletSerialized'

export const useGetWallet = () => {
  const hook = useQuery([GET_WALLET_KEY], getWalletSerialized)
  return hook
}
