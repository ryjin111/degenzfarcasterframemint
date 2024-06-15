import { defineChain } from "thirdweb";

export const CHAIN = defineChain({
	id: 666666666,
	nativeCurrency: {
	  name: "Degen Chain",
	  symbol: "DEGEN",
	  decimals: 18,
	},
	
	blockExplorers: [
		{
		  name: "DegenChain",
		  url: "https://explorer.degen.tips",
		  apiUrl: "https://explorer.degen.tips/api/v2/",
		},
	  ],
   });


export const config ={
    neynar:{
        apiKey: process.env.NEYNAR_API_KEY,
    },

contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
hostURL: process.env.NEXT_PUBLIC_HOST_URL,
thirdweb:
{
chainId: Number(process.env.CHAIN),
engine:
{
    url: process.env.THIRDWEB_ENGINE_URL,
    wallet:process.env.THIRDWEB_ENGINE_WALLET,
    accessToken: process.env.THIRDWEB_ENGINE_ACCESS_TOKEN,
}
}
}