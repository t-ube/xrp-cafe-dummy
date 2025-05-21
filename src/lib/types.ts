
export type NFT = {
  id: string;
  name: string;
  image: string;
  price?: string;
  owner?: string;
};

export type Collection = {
  id: number;
  name: string;
  description: string;
  image: string;
  twitter: string;
  verified: boolean;
  floor: number;
  items: number;
  totalVolume: string;
  holders: number;
  percentListed: string;
};

export type ActivityEvent = {
  id: string;
  nftId: string;
  nftName: string;
  nftImage: string;
  price?: string;
  type: 'Sale' | 'Transfer' | 'Mint' | 'Offer';
  from: {
    address: string;
  };
  to?: {
    address: string;
  };
  time: string;
};
