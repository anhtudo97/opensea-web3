import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Main from "../components/Home";

const style = {
  wrapper: `flex h-screen items-screen justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white`,
};

export default function Home() {
  const connectToMetamask = useMetamask();
  const address = useAddress();

  console.log(address);

  const Auth = () => (
    <div className={style.wrapper}>
      <button onClick={connectToMetamask} className={style.connectWalletButton}>
        Connect to Metamask
      </button>
    </div>
  );
  return <>{address ? <Main /> : <Auth />}</>;
}
