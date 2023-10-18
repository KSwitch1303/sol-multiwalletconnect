import "./styles.css";
import * as web3 from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

require("@solana/wallet-adapter-react-ui/styles.css");

const endpoint = web3.clusterApiUrl("devnet");
const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets}>
            <WalletModalProvider>
              <WalletMultiButton />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
}
