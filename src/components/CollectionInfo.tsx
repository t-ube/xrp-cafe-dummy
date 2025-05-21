'use client';

import React from 'react';
import type { Collection } from '@/lib/types';

export type CollectionProps = {
  collection: Collection;
};

export const CollectionInfo: React.FC<CollectionProps> = ({ collection }) => {
  return (
    <div className="bg-[#0076FF] text-white px-4 py-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-row gap-24 items-start">
        {/* 左の画像 */}
        <div className="flex-shrink-0">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* 右側テキスト：すべて左寄せ */}
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-5xl font-bold mb-2">{collection.name}</h1>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-[#005fd6] px-4 py-1 rounded-full text-lg font-medium">
              {collection.twitter}
            </span>
            {collection.verified && (
              <span className="bg-[#005fd6] px-4 py-1 rounded-full text-lg font-medium flex items-center">
                Verified
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M479.07 111.36l...z" />
                </svg>
              </span>
            )}
          </div>

          <p className="text-lg text-white text-opacity-80 mb-4 max-w-xl">
            {collection.description}
          </p>

          
      {/* 下の統計ブロック（中央揃え） */}
      <div className="w-full mt-6">
        <div className="max-w-5xl mx-auto bg-[#1A80FF] rounded-xl px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-center">
          <Stat label="Floor" value={`${collection.floor} xrp`} />
          <Stat label="Items" value={collection.items.toString()} />
          <Stat label="Total volume" value={`${collection.totalVolume} xrp`} />
          <Stat label="Holders" value={collection.holders.toString()} />
          <Stat label="Listed" value={collection.percentListed} />
        </div>
      </div>
        </div>
      </div>

    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="py-2">
    <div className="text-md opacity-90">{label}</div>
    <div className="font-semibold text-base">{value}</div>
  </div>
);
