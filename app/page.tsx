'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import ChallengeFeed from './components/ChallengeFeed';
import UploadButton from './components/UploadButton';
import Leaderboard from './components/Leaderboard';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ChallengeHub</h1>
        <div className="wallet-container">
          <Wallet>
            <ConnectWallet>
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownLink
                icon="wallet"
                href="https://keys.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wallet
              </WalletDropdownLink>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        </div>
      </header>

      <main className="flex-grow flex p-4">
        <div className="w-2/3 pr-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Active Challenges</h2>
            <UploadButton />
          </div>
          <ChallengeFeed />
        </div>
        <div className="w-1/3">
          <Leaderboard />
        </div>
      </main>
    </div>
  );
}