import { WagmiProvider } from "wagmi";
import React from "react";
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import { RainbowKitProvider , darkTheme} from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';
import { config } from "../configs/wagmi";

const WalletConnector = ({children}  :{children :  React.ReactNode}) => {
    const queryclient = new QueryClient();

    return (
    <WagmiProvider config={ config }>
        <QueryClientProvider client={queryclient}>
            <RainbowKitProvider theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'medium',
      })}>
                {children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
    )
}

export default WalletConnector;