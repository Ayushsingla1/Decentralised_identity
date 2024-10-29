import { WagmiProvider } from "wagmi";
import React from "react";
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';
import { config } from "../configs/wagmi";
import { darkTheme } from "@rainbow-me/rainbowkit";


const WalletConnector = ({children}  :{children :  React.ReactNode}) => {
    const queryclient = new QueryClient();

    return (
    <WagmiProvider config={ config }>
        <QueryClientProvider client={queryclient}>
            <RainbowKitProvider theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'medium',
      })} modalSize="compact">
                {children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
    )
}

export default WalletConnector;