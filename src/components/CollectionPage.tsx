'use client';

import React, { useState } from 'react';
import { Activity } from '@/components/Activity';
import { CollectionInfo } from '@/components/CollectionInfo';
import { NFTGrid } from '@/components/NFTGrid';
import type { Collection } from '@/lib/types';

interface CollectionPageProps {
  collection: Collection;
}

export function CollectionPage({ collection }: CollectionPageProps) {
  const [activeTab, setActiveTab] = useState('activity');
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0076FF] text-white pt-12">
        <div className="container mx-auto px-4">
          <CollectionInfo collection={collection} />
          
          {/* Tabs + Action Buttons */}
          <div className="mt-8 bg-[#0076FF] rounded-t-lg px-4">
            <div className="container mx-auto flex justify-between items-end">
              {/* Tabs */}
              <ul className="flex space-x-4 pt-2">
                <li
                  className={`px-8 py-4 cursor-pointer rounded-t-md text-2xl transition
                    ${activeTab === 'nfts'
                      ? 'bg-[#E5E5E5] text-[#0076FF]'
                      : 'text-white/90 hover:bg-white/10'}`}
                  onClick={() => setActiveTab('nfts')}
                >
                  NFTs
                </li>
                <li
                  className={`px-8 py-4 cursor-pointer rounded-t-md text-2xl transition 
                    ${activeTab === 'activity'
                      ? 'bg-[#E5E5E5] text-[#0076FF]'
                      : 'text-white/90 hover:bg-white/10'}`}
                  onClick={() => setActiveTab('activity')}
                >
                  Activity
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="flex space-x-2 pb-2">
                <button
                  className="p-2 bg-opacity-20 rounded-full"
                  title="View collection insights"
                >
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16H17"></path>
                    <path d="M1 14.5L6 6.5L11.5 9.5L17 1"></path>
                  </svg>
                </button>
                <button
                  className="p-2 bg-opacity-20 rounded-full"
                  title="View collection insights"
                >
                  <svg width="18" height="17" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22V13C16 11.5858 16 10.8787 15.5607 10.4393C15.1213 10 14.4142 10 13 10H11C9.58579 10 8.87868 10 8.43934 10.4393C8 10.8787 8 11.5858 8 13V22"></path>
                    <path d="M8 22C8 20.5858 8 19.8787 7.56066 19.4393C7.12132 19 6.41421 19 5 19C3.58579 19 2.87868 19 2.43934 19.4393C2 19.8787 2 20.5858 2 22"></path>
                    <path d="M22 22V19C22 17.5858 22 16.8787 21.5607 16.4393C21.1213 16 20.4142 16 19 16C17.5858 16 16.8787 16 16.4393 16.4393C16 16.8787 16 17.5858 16 19V22"></path>
                    <path d="M11.1459 3.02251C11.5259 2.34084 11.7159 2 12 2C12.2841 2 12.4741 2.34084 12.8541 3.02251L12.9524 3.19887C13.0603 3.39258 13.1143 3.48944 13.1985 3.55334C13.2827 3.61725 13.3875 3.64097 13.5972 3.68841L13.7881 3.73161C14.526 3.89857 14.895 3.98205 14.9828 4.26432C15.0706 4.54659 14.819 4.84072 14.316 5.42898L14.1858 5.58117C14.0429 5.74833 13.9714 5.83191 13.9392 5.93531C13.9071 6.03872 13.9179 6.15023 13.9395 6.37327L13.9592 6.57632C14.0352 7.36118 14.0733 7.75361 13.8435 7.92807C13.6136 8.10252 13.2682 7.94346 12.5773 7.62535L12.3986 7.54305C12.2022 7.45265 12.1041 7.40745 12 7.40745C11.8959 7.40745 11.7978 7.45265 11.6014 7.54305L11.4227 7.62535C10.7318 7.94346 10.3864 8.10252 10.1565 7.92807C9.92674 7.75361 9.96476 7.36118 10.0408 6.57632L10.0605 6.37327C10.0821 6.15023 10.0929 6.03872 10.0608 5.93531C10.0286 5.83191 9.95713 5.74833 9.81418 5.58117L9.68403 5.42898C9.18097 4.84072 8.92945 4.54659 9.01723 4.26432C9.10501 3.98205 9.47396 3.89857 10.2119 3.73161L10.4028 3.68841C10.6125 3.64097 10.7173 3.61725 10.8015 3.55334C10.8857 3.48944 10.9397 3.39258 11.0476 3.19887L11.1459 3.02251Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-8 bg-[#E5E5E5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'nfts' && (
              <NFTGrid collectionId={collection.id} />
            )}
            
            {activeTab === 'activity' && (
              <Activity />
            )}
          </div>
        </div>
      </section>
    </>
  );
}