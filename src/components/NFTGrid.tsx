'use client';

import React from 'react';
import Image from 'next/image';

type NFTGridProps = {
  collectionId: number;
};

export const NFTGrid: React.FC<NFTGridProps> = (/*{ collectionId }*/) => {
  // 実際のプロジェクトではこのコンポーネントでNFTのリストを取得して表示します
  // サンプルのNFTデータ - ローカル画像と外部URLの混在
  const sampleNFTs = [
    {
      id: "00082710D66F170849D02E1C6EE26DB6662D87190B9B0C57852D5BDD057D7042",
      name: "GHOST PATCH #351",
      image: "/images/1.jpg",
      price: "50.0 xrp",
      isLocal: true
    },
    {
      id: "00082710D66F170849D02E1C6EE26DB6662D87190B9B0C57AFDC6EB1057D6F16",
      name: "GHOST PATCH #52",
      image: "/images/2.jpg",
      price: "99.0 xrp",
      isLocal: false
    },
    {
      id: "00082710D66F170849D02E1C6EE26DB6662D87190B9B0C57257612E4057D7049",
      name: "GHOST PATCH #359",
      image: "/images/3.jpg",
      price: "50.0 xrp",
      isLocal: false
    },
    {
      id: "00082710D66F170849D02E1C6EE26DB6662D87190B9B0C570E9041E3057D7048",
      name: "GHOST PATCH #358",
      image: "/images/4.jpg",
      price: "20.0 xrp",
      isLocal: false
    }
  ];
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Collection NFTs</h2>
        
        <div className="flex space-x-2">
          <select className="p-2 rounded border border-gray-300 text-sm">
            <option>Recently Listed</option>
            <option>Price Low</option>
            <option>Price High</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
          
          <button className="p-2 rounded border border-gray-300 text-sm">
            Filters
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleNFTs.map((nft) => (
          <div key={nft.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
            <a href={`/nft/${nft.id}`} className="block">
              <div className="relative w-full h-48">
                {nft.isLocal ? (
                  <Image 
                    src={nft.image}
                    alt={nft.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                ) : (
                  // 外部画像の場合、Next.jsの設定でドメインを許可する必要があります
                  <img 
                    src={nft.image} 
                    alt={nft.name} 
                    className="w-full h-full object-cover" 
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{nft.name}</h3>
                <p className="text-blue-600 font-bold">{nft.price}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};