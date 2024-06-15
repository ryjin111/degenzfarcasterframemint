import { createThirdwebClient, defineChain } from "thirdweb";


const secretKey = process.env.TW_SECRET_KEY;
export const CLIENT = createThirdwebClient({
    secretKey: secretKey as string,
});
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

export const erc721ContractAddress = process.env.CONTRACT_ADDRESS as string;