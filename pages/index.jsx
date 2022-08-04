import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
  return <>{address ? <div>LOGGED IN</div> : <Auth />}</>;
}
