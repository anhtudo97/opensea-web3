import React, { useEffect } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { ListingNotFoundError } from "@thirdweb-dev/sdk";

const NFTCard = ({ nft }) => {
  useEffect(() => {
    console.log(nft);
  }, [nft]);

  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image
          className={style.nftImage}
          src={nft.asset.image}
          height={340}
          width={340}
          alt="nft"
        />
      </div>

      <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
          <div>
            {nft.asset.collection && (
              <div className={style.collectionTitle}>
                {nft.asset?.collection.name}
              </div>
            )}

            <div className={style.nftTitle}>{nft.asset.name}</div>
          </div>

          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image height={16} width={16} src="./weth-logo.svg" alt="weth" />
              <div className={style.priceValue}>
                {ListingNotFoundError.buyoutCurrency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
