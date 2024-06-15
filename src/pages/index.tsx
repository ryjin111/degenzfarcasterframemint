import Head from "next/head";

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
const title = "DegenZ";
const frameImgUrl = `${HOST_URL}/NFTImage.png`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="fc:frame" content="vNext"/>
        <meta property="fc:frame:image" content={frameImgUrl}/>
        <meta property="fc:frame:image:aspect_ratio" content="1:1"/>
        <meta property="fc:frame:button:1" content="Mint NFT"/>
        <meta property="fc:frame:button:1:action" content="tx"/>
        <meta property="og:frame:button:5" content="Mint 5 NFT"/>
        <meta property="fc:frame:button:5:action" content="tx"/>
        <meta property="og:frame:button:10" content="Mint 10 NFT"/>
        <meta property="fc:frame:button:10:action" content="tx"/>
     
    <meta property="fc:frame:button:1:target"
          content={`${HOST_URL}/api/frame/op/get-tx-frame`}
        />
        <meta property="fc:frame:button:5:target"
          content={`${HOST_URL}/api/frame/op/get-tx-frame`}
        />
        <meta property="fc:frame:button:10:target"
          content={`${HOST_URL}/api/frame/op/get-tx-frame`}
        />
      </Head>
      <h1>DegenZ Mint Frame</h1>
    </>
  );
}
