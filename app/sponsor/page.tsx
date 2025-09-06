'use client';

import React from 'react';
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

const SponsorPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest in sponsoring a challenge!');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Become a Sponsor</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="companyName" className="block text-lg font-medium">Company Name</label>
          <input type="text" id="companyName" name="companyName" className="w-full mt-2 p-3 rounded-lg bg-gray-700 border border-gray-600" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input type="email" id="email" name="email" className="w-full mt-2 p-3 rounded-lg bg-gray-700 border border-gray-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
          <div className="p-4 border rounded-lg bg-gray-800">
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
        </div>
        <button type="submit" className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold">Submit</button>
      </form>
    </div>
  );
};

export default SponsorPage;