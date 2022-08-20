import { useEffect, useState } from "react";
import Link from "next/link";
import { useMarketplace } from "@thirdweb-dev/react";
import NFTCard from "./NFTCard";

const style = {
  wrapper:
    "mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
};

export default function Listings() {
  const [listings, setListings] = useState([]);
  const marketPlace = useMarketplace(
    "0x3366BaCe0c60C20Cc454352dc805f642856Cd37c"
  );

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    try {
      const list = await marketPlace.getActiveListings();
      console.log(listings);
      setListings(list);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.wrapper}>
      {listings.length > 0 ? (
        <>
          {listings.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/assets/${item.assetContractAddress}/${item.id}`}
              >
                <a href="">
                  <NFTCard nft={item} />
                </a>
              </Link>
            );
          })}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
