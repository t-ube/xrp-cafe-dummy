'use client';

import React from 'react';

type ActivityItem = {
  id: string;
  name: string;
  image: string;
  price: string;
  type: string;
  from: {
    address: string;
  };
  to: {
    address: string;
  };
  time: string;
};

export const Activity: React.FC = () => {
  // サンプルデータ
  const activityData: ActivityItem[] = [
    {
      "id": "TXN001",
      "name": "OSARU NFT #196",
      "image": "/images/2.jpg",
      "price": "134.0 xrp",
      "type": "Auction",
      "from": {
        "address": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
      },
      "to": {
        "address": "rLpq5RhuyHA8rvbUq4p1Sconvhy33aUUVK"
      },
      "time": "2025-05-21 23:56:51"
    },
    {
      "id": "TXN002",
      "name": "OSARU NFT #089",
      "image": "/images/6.jpg",
      "price": "53.0 xrp",
      "type": "Auction",
      "from": {
        "address": "r9NGn4vE9BJ6VLJHm1wMqNj7LRBK7XT5UV"
      },
      "to": {
        "address": "rBPe91ivmsfKbXbWCMeXqCBgU9eFPKRpY"
      },
      "time": "2025-05-21 22:56:51"
    },
    {
      "id": "TXN003",
      "name": "OSARU NFT #241",
      "image": "/images/9.jpg",
      "price": "162.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      "to": {
        "address": "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      "time": "2025-05-21 21:56:51"
    },
    {
      "id": "TXN004",
      "name": "OSARU NFT #167",
      "image": "/images/4.jpg",
      "price": "60.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rGFuMiw48HdbnrUbkRYuitXTmfrDBNTCnX"
      },
      "to": {
        "address": "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      "time": "2025-05-21 20:56:51"
    },
    {
      "id": "TXN005",
      "name": "OSARU NFT #305",
      "image": "/images/11.jpg",
      "price": "169.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      "to": {
        "address": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y"
      },
      "time": "2025-05-21 19:56:51"
    },
    {
      "id": "TXN006",
      "name": "OSARU NFT #103",
      "image": "/images/2.jpg",
      "price": "92.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y"
      },
      "to": {
        "address": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      },
      "time": "2025-05-21 18:56:51"
    },
    {
      "id": "TXN007",
      "name": "OSARU NFT #167",
      "image": "/images/6.jpg",
      "price": "120.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r9kiSEUEw6RsqBfXxkMbHhE4BSZXdkFmW5"
      },
      "to": {
        "address": "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      "time": "2025-05-21 17:56:51"
    },
    {
      "id": "TXN008",
      "name": "OSARU NFT #156",
      "image": "/images/4.jpg",
      "price": "194.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y"
      },
      "to": {
        "address": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
      },
      "time": "2025-05-21 16:56:51"
    },
    {
      "id": "TXN009",
      "name": "OSARU NFT #241",
      "image": "/images/8.jpg",
      "price": "105.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r9NGn4vE9BJ6VLJHm1wMqNj7LRBK7XT5UV"
      },
      "to": {
        "address": "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      "time": "2025-05-21 15:56:51"
    },
    {
      "id": "TXN010",
      "name": "OSARU NFT #241",
      "image": "/images/3.jpg",
      "price": "98.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r9kiSEUEw6RsqBfXxkMbHhE4BSZXdkFmW5"
      },
      "to": {
        "address": "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      "time": "2025-05-21 14:56:51"
    },
    {
      "id": "TXN011",
      "name": "OSARU NFT #073",
      "image": "/images/5.jpg",
      "price": "156.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      },
      "to": {
        "address": "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"
      },
      "time": "2025-05-21 13:56:51"
    },
    {
      "id": "TXN012",
      "name": "OSARU NFT #241",
      "image": "/images/7.jpg",
      "price": "77.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      "to": {
        "address": "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      "time": "2025-05-21 12:56:51"
    },
    {
      "id": "TXN013",
      "name": "OSARU NFT #042",
      "image": "/images/3.jpg",
      "price": "113.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y"
      },
      "to": {
        "address": "r9kiSEUEw6RsqBfXxkMbHhE4BSZXdkFmW5"
      },
      "time": "2025-05-21 11:56:51"
    },
    {
      "id": "TXN014",
      "name": "OSARU NFT #156",
      "image": "/images/7.jpg",
      "price": "188.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rUkMKjQitpgAM5WTGk79xpjT38DEJY283d"
      },
      "to": {
        "address": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
      },
      "time": "2025-05-21 10:56:51"
    },
    {
      "id": "TXN015",
      "name": "OSARU NFT #094",
      "image": "/images/1.jpg",
      "price": "135.0 xrp",
      "type": "Auction",
      "from": {
        "address": "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      "to": {
        "address": "rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT"
      },
      "time": "2025-05-21 09:56:51"
    },
    {
      "id": "TXN016",
      "name": "OSARU NFT #217",
      "image": "/images/11.jpg",
      "price": "162.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      "to": {
        "address": "r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV"
      },
      "time": "2025-05-21 08:56:51"
    },
    {
      "id": "TXN017",
      "name": "OSARU NFT #128",
      "image": "/images/3.jpg",
      "price": "151.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rBPe91ivmsfKbXbWCMeXqCBgU9eFPKRpY"
      },
      "to": {
        "address": "rGFuMiw48HdbnrUbkRYuitXTmfrDBNTCnX"
      },
      "time": "2025-05-21 07:56:51"
    },
    {
      "id": "TXN018",
      "name": "OSARU NFT #156",
      "image": "/images/4.jpg",
      "price": "76.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      },
      "to": {
        "address": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
      },
      "time": "2025-05-21 06:56:51"
    },
    {
      "id": "TXN019",
      "name": "OSARU NFT #283",
      "image": "/images/8.jpg",
      "price": "79.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      "to": {
        "address": "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      "time": "2025-05-21 05:56:51"
    },
    {
      "id": "TXN020",
      "name": "OSARU NFT #167",
      "image": "/images/2.jpg",
      "price": "159.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV"
      },
      "to": {
        "address": "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      "time": "2025-05-21 04:56:51"
    },
    {
      "id": "TXN021",
      "name": "OSARU NFT #283",
      "image": "/images/9.jpg",
      "price": "132.0 xrp",
      "type": "Sale",
      "from": {
        "address": "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      "to": {
        "address": "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      "time": "2025-05-21 03:56:51"
    },
    {
      "id": "TXN022",
      "name": "OSARU NFT #103",
      "image": "/images/4.jpg",
      "price": "83.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      "to": {
        "address": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      },
      "time": "2025-05-21 02:56:51"
    },
    {
      "id": "TXN023",
      "name": "OSARU NFT #094",
      "image": "/images/6.jpg",
      "price": "52.0 xrp",
      "type": "Auction",
      "from": {
        "address": "r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV"
      },
      "to": {
        "address": "rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT"
      },
      "time": "2025-05-21 01:56:51"
    },
    {
      "id": "TXN024",
      "name": "OSARU NFT #128",
      "image": "/images/6.jpg",
      "price": "163.0 xrp",
      "type": "Sale",
      "from": {
        "address": "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      "to": {
        "address": "rGFuMiw48HdbnrUbkRYuitXTmfrDBNTCnX"
      },
      "time": "2025-05-21 00:56:51"
    }
  ];

  return (
    <>
      <div className="px-6 py-4">
        <h3 className="text-xl font-medium text-gray-900">OSARU NFT Activity</h3>
      </div>

      <div className="hidden md:grid grid-cols-6 gap-1 px-6 text-sm font-medium text-gray-600 pb-2">
        <div className="text-center">Item</div>
        <div className="text-center">Price</div>
        <div className="text-center">Event</div>
        <div className="text-center">From</div>
        <div className="text-center">To</div>
        <div className="text-center">Time</div>
      </div>

      <div className="bg-[#E5E5E5] rounded-lg p-2 space-y-4">
      {activityData.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow-sm py-0 grid grid-cols-1 md:grid-cols-6 gap-1 items-center transition"
        >
          {/* Item */}
          <div className="bg-white rounded-l-lg px-3 py-4 flex items-center h-full flex items-center">
            <a href={`/nft/${item.id}`} className="flex items-center">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded mr-3" />
              <span className="hover:text-blue-600 truncate whitespace-nowrap overflow-hidden max-w-[8rem]">{item.name}</span>
            </a>
          </div>

          {/* Price */}
          <div className="bg-white px-3 py-4 h-full flex items-center justify-center text-sm text-center">
            <span className="md:hidden font-medium mr-2">Price:</span>
            <span className="text-lg">{item.price}</span>
          </div>

          {/* Event */}
          <div className="bg-white px-3 py-4 h-full flex items-center justify-center text-sm text-center">
            <span className="md:hidden font-medium mr-2">Event:</span>
            <span className="inline-flex px-2 text-xs">
              {item.type}
            </span>
          </div>

          {/* From */}
          <div className="bg-white px-3 py-4 h-full flex items-center justify-center text-sm text-center">
            <span className="md:hidden font-medium mr-2 h-full flex items-center">From:</span>
            <a href={`/user/${item.from.address}`} className="hover:text-blue-600 truncate">
              {item.from.address.substring(0, 8)}...{item.from.address.slice(-4)}
            </a>
          </div>

          {/* To */}
          <div className="bg-white px-3 py-4 h-full flex items-center justify-center text-sm text-center">
            <span className="md:hidden font-medium mr-2">To:</span>
            <a href={`/user/${item.to.address}`} className="hover:text-blue-600 truncate">
              {item.to.address.substring(0, 8)}...{item.to.address.slice(-4)}
            </a>
          </div>

          {/* Time */}
          <div className="bg-white rounded-r-lg px-3 py-4 h-full flex items-center justify-center text-sm text-center">
            <span className="md:hidden font-medium mr-2">Time:</span>
            <span className="text-black-500">{item.time}</span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};