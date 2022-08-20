import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { useEffect } from "react";
import Main from "../components/Home";

const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `text-white rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-red-50`,
};

export default function Home() {
  const connectToMetamask = useMetamask();
  const address = useAddress();

  useEffect(() => {
    console.log(address);
  }, [address]);

  const Auth = () => (
    <div className={style.wrapper}>
      <button onClick={connectToMetamask} className={style.connectWalletButton}>
        Connect to Metamask
      </button>
    </div>
  );
  return <>{address ? <Main /> : <Auth />}</>;
}
