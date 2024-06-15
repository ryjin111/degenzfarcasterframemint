import { Html, Head, Main, NextScript } from "next/document";
import { config } from "@/config/config";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
    <meta property="fc:frame" content="vNext"/>
    <meta property="fc:frame:image" content={`${config.hostURL}/NFTimage.png`}/>
    <meta property="og:image" content={`${config.hostURL}/NFTimage.png`}/>
    <meta property="og:frame:post_url" content={`${config.hostURL}/NFTimage.png`}/>
    <meta property="og:frame:button:1" content="Mint 1 NFT"/>
    <meta property="og:frame:button:5" content="Mint 5 NFT"/>
    <meta property="og:frame:button:10" content="Mint 10 NFT"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
