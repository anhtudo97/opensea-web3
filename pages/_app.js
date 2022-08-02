import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      chainRpc={{
        [ChainId.Rinkeby]:
          "https://rinkeby.infura.io/v3/99e321df6b7641e695169ee4d5b10f00",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
