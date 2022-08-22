import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
      chainRpc={{
        [ChainId.Goerli]:
          "https://goerli.infura.io/v3/99e321df6b7641e695169ee4d5b10f00",
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
