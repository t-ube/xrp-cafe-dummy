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
      id: "8A72F1B053D9E6C84721D90B3C2E7F15",
      name: "GHOST PATCH #103",
      image: "/images/1.jpg",
      price: "75.0 xrp",
      type: "Sale",
      from: {
        address: "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      },
      to: {
        address: "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"
      },
      time: "2 Hours ago"
    },
    {
      id: "92E5DB46F781C3A590B42D58F16A9C0E",
      name: "GHOST PATCH #217",
      image: "/images/2.jpg",
      price: "120.0 xrp",
      type: "Sale",
      from: {
        address: "r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV"
      },
      to: {
        address: "rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn"
      },
      time: "5 Hours ago"
    },
    {
      id: "61F8A349C72D05BE3807E1D946F2B5C0",
      name: "GHOST PATCH #42",
      image: "/images/3.jpg",
      price: "200.0 xrp",
      type: "Sale",
      from: {
        address: "r9kiSEUEw6RsqBfXxkMbHhE4BSZXdkFmW5"
      },
      to: {
        address: "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K"
      },
      time: "1 Day ago"
    },
    {
      id: "F3A5E74D18C92B6075E31D0C49A8B2E6",
      name: "GHOST PATCH #89",
      image: "/images/4.jpg",
      price: "45.0 xrp",
      type: "Auction",
      from: {
        address: "rBPe91ivmsfKbXbWCMeXqCBgU9eFPKRpY"
      },
      to: {
        address: "rU6K7V3Po4snVhBBaU29sesqs2qTQJWDw1"
      },
      time: "2 Days ago"
    },
    {
      id: "D07B3E5A92C1F684E5D91B2730A6FC8D",
      name: "GHOST PATCH #156",
      image: "/images/5.jpg",
      price: "85.0 xrp",
      type: "Sale",
      from: {
        address: "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
      },
      to: {
        address: "r4UDFE7vhBvJXSQn25rkmKrhRT9D8SXvsy"
      },
      time: "3 Days ago"
    },
    {
      id: "C1B942A8D7E05F391A67D28EC9B840F3",
      name: "GHOST PATCH #73",
      image: "/images/6.jpg",
      price: "60.0 xrp",
      type: "Sale",
      from: {
        address: "rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"
      },
      to: {
        address: "rJb5KsHsDHF1YS5B5DU6QCkH5NsPaKQTcy"
      },
      time: "3 Days ago"
    },
    {
      id: "7D42F68A1B9C3E5047AD2K8L901P5R3T",
      name: "GHOST PATCH #128",
      image: "/images/7.jpg",
      price: "95.0 xrp",
      type: "Sale",
      from: {
        address: "rGFuMiw48HdbnrUbkRYuitXTmfrDBNTCnX"
      },
      to: {
        address: "rBJ3YjwXi2MGbg7GVLuTXUWQ8DjL7qXo6a"
      },
      time: "4 Days ago"
    },
    {
      id: "A9C4E2B7D1F5H6J8K3L0M2N5P7Q1R3S9",
      name: "GHOST PATCH #196",
      image: "/images/8.jpg",
      price: "150.0 xrp",
      type: "Auction",
      from: {
        address: "rLpq5RhuyHA8rvbUq4p1Sconvhy33aUUVK"
      },
      to: {
        address: "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq"
      },
      time: "4 Days ago"
    },
    {
      id: "E4F7G1H5I9J2K6L0M3N7P4Q8R2S6T1U3",
      name: "GHOST PATCH #37",
      image: "/images/9.jpg",
      price: "70.0 xrp",
      type: "Sale",
      from: {
        address: "rUkMKjQitpgAM5WTGk79xpjT38DEJY283d"
      },
      to: {
        address: "rPVMhWBsfF9iMXYj3aAzJVkPDTFNSyWdKy"
      },
      time: "5 Days ago"
    },
    {
      id: "B3C7D1E5F9G2H6I0J4K8L2M6N0P4Q8R2",
      name: "GHOST PATCH #241",
      image: "/images/10.jpg",
      price: "110.0 xrp",
      type: "Sale",
      from: {
        address: "rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2"
      },
      to: {
        address: "rMQ98K56yXJbDGv49ZSmW51sLn94Xe1mu1"
      },
      time: "5 Days ago"
    },
    {
      id: "S5T9U3V7W1X5Y9Z3A7B1C5D9E3F7G1H5",
      name: "GHOST PATCH #18",
      image: "/images/11.jpg",
      price: "180.0 xrp",
      type: "Auction",
      from: {
        address: "r9NGn4vE9BJ6VLJHm1wMqNj7LRBK7XT5UV"
      },
      to: {
        address: "r3AWbdp2jQLXLywJypdoNwVSvr81xuaGyc"
      },
      time: "6 Days ago"
    },
    {
      id: "I9J3K7L1M5N9P3Q7R1S5T9U3V7W1X5Y9",
      name: "GHOST PATCH #305",
      image: "/images/1.jpg",
      price: "65.0 xrp",
      type: "Sale",
      from: {
        address: "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y"
      },
      to: {
        address: "rfNZPxoZ5Uaamdp339U9dCLWz2T73nZJZH"
      },
      time: "6 Days ago"
    },
    {
      id: "Z3A7B1C5D9E3F7G1H5I9J3K7L1M5N9P3",
      name: "GHOST PATCH #167",
      image: "/images/2.jpg",
      price: "125.0 xrp",
      type: "Sale",
      from: {
        address: "r3ipidkRUZWq8JYVjnzD4FgH9x2c6oee3W"
      },
      to: {
        address: "rD8LigXE7165r3VWhSQ4FwzJy7PNrTMwUq"
      },
      time: "1 Week ago"
    },
    {
      id: "Q7R1S5T9U3V7W1X5Y9Z3A7B1C5D9E3F7",
      name: "GHOST PATCH #94",
      image: "/images/3.jpg",
      price: "90.0 xrp",
      type: "Auction",
      from: {
        address: "rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT"
      },
      to: {
        address: "rHr8mDJj9JT6n5xULMVpXYVkJ2YCZyUqCf"
      },
      time: "1 Week ago"
    },
    {
      id: "G1H5I9J3K7L1M5N9P3Q7R1S5T9U3V7W1",
      name: "GHOST PATCH #283",
      image: "/images/4.jpg",
      price: "135.0 xrp",
      type: "Sale",
      from: {
        address: "rBRVqcXrm1YAbanngTxDfH15LNb6TjNmxk"
      },
      to: {
        address: "rnUy2SHTrB9DubsPmkJZUXTf5FcNDGrYEA"
      },
      time: "1 Week ago"
    },
    {
      id: "X5Y9Z3A7B1C5D9E3F7G1H5I9J3K7L1M5",
      name: "GHOST PATCH #51",
      image: "/images/5.jpg",
      price: "80.0 xrp",
      type: "Sale",
      from: {
        address: "rUQTpMqAF5jhykj4FExVeXakrZpiKF6cQV"
      },
      to: {
        address: "raLPjTYeGezfdb6crXZzcC8RkLBEwbBHJ5"
      },
      time: "8 Days ago"
    },
    {
      id: "N9P3Q7R1S5T9U3V7W1X5Y9Z3A7B1C5D9",
      name: "GHOST PATCH #137",
      image: "/images/6.jpg",
      price: "115.0 xrp",
      type: "Sale",
      from: {
        address: "rN9qNpgnBaZwqCg8CvUZRPqCcPPY7wfWep"
      },
      to: {
        address: "rBKzJcutFUuER5rRQHZYgN4v79ZaHq3a3V"
      },
      time: "9 Days ago"
    },
    {
      id: "E3F7G1H5I9J3K7L1M5N9P3Q7R1S5T9U3",
      name: "GHOST PATCH #209",
      image: "/images/7.jpg",
      price: "160.0 xrp",
      type: "Auction",
      from: {
        address: "rJNL3INmEDYFX3gXnTYnbmV8JxnS2z7xAf"
      },
      to: {
        address: "rDNkXmLHRZUb7QDoP4sZJoGQTcy9YJMTbA"
      },
      time: "10 Days ago"
    },
    {
      id: "V7W1X5Y9Z3A7B1C5D9E3F7G1H5I9J3K7",
      name: "GHOST PATCH #63",
      image: "/images/8.jpg",
      price: "55.0 xrp",
      type: "Sale",
      from: {
        address: "rVFuZ3u1xuJ9txvxJyRnFqYV3Wz1vFDJ5"
      },
      to: {
        address: "r3FbKJM2qMH5SgY4BuKsPNT67sZRpJ2xGd"
      },
      time: "11 Days ago"
    },
    {
      id: "L1M5N9P3Q7R1S5T9U3V7W1X5Y9Z3A7B1",
      name: "GHOST PATCH #175",
      image: "/images/9.jpg",
      price: "105.0 xrp",
      type: "Sale",
      from: {
        address: "rKEJebCKUaV12ZWPyAQdJXbH1BDxUcHFeK"
      },
      to: {
        address: "rwietsevLFg3GjybbSgcJRTK6Tv3wMHeKZ"
      },
      time: "12 Days ago"
    },
    {
      id: "C5D9E3F7G1H5I9J3K7L1M5N9P3Q7R1S5",
      name: "GHOST PATCH #29",
      image: "/images/10.jpg",
      price: "175.0 xrp",
      type: "Auction",
      from: {
        address: "rhDEnu5YVEv6IZEHxKxQNX5P4iNnkoWJVc"
      },
      to: {
        address: "rJFUKXZdQwqwpfp2GduJHNEnHCQ7LcEdua"
      },
      time: "2 Weeks ago"
    },
    {
      id: "T9U3V7W1X5Y9Z3A7B1C5D9E3F7G1H5I9",
      name: "GHOST PATCH #314",
      image: "/images/11.jpg",
      price: "140.0 xrp",
      type: "Sale",
      from: {
        address: "rLK8QzN8AAgcJMQ8UVdUPDPbPTgep2frpi"
      },
      to: {
        address: "r4QYxjtbH5PCxZNKXzFGe8bmCJpB9QQtUw"
      },
      time: "2 Weeks ago"
    },
    {
      id: "J3K7L1M5N9P3Q7R1S5T9U3V7W1X5Y9Z3",
      name: "GHOST PATCH #88",
      image: "/images/1.jpg",
      price: "95.0 xrp",
      type: "Sale",
      from: {
        address: "rUTEn2jLLv4ESmrUqQmEPpUa1CrGTqnGEH"
      },
      to: {
        address: "rwtDvu9QDfMJVo1JNXbNX9MUPJPa69mNJB"
      },
      time: "2 Weeks ago"
    },
    {
      id: "A7B1C5D9E3F7G1H5I9J3K7L1M5N9P3Q7",
      name: "GHOST PATCH #247",
      image: "/images/2.jpg",
      price: "185.0 xrp",
      type: "Sale",
      from: {
        address: "rsiLTzeDFSzM3kTLbvDoWGEk9RYi3Vcwx"
      },
      to: {
        address: "rU3sAqEipZRYhJXPKGt9nQYTAEJaJJbTVU"
      },
      time: "2 Weeks ago"
    },
    {
      id: "R1S5T9U3V7W1X5Y9Z3A7B1C5D9E3F7G1",
      name: "GHOST PATCH #122",
      image: "/images/3.jpg",
      price: "130.0 xrp",
      type: "Auction",
      from: {
        address: "rNozJrYqDWjwMtjXZFUnP9TZmVVUzaV6tZ"
      },
      to: {
        address: "rQGLkXLYnCBYcuG5uLhEqFEPVtVJjnBSVf"
      },
      time: "3 Weeks ago"
    },
    {
      id: "H5I9J3K7L1M5N9P3Q7R1S5T9U3V7W1X5",
      name: "GHOST PATCH #319",
      image: "/images/4.jpg",
      price: "70.0 xrp",
      type: "Sale",
      from: {
        address: "rEQB9yqRJ54oj4iBYBozECXAf4oKzWDvs2"
      },
      to: {
        address: "rKZEBzWNXnYVdKxGiDMYGGq1Azd8VL9F7M"
      },
      time: "3 Weeks ago"
    },
    {
      id: "Y9Z3A7B1C5D9E3F7G1H5I9J3K7L1M5N9",
      name: "GHOST PATCH #78",
      image: "/images/5.jpg",
      price: "145.0 xrp",
      type: "Sale",
      from: {
        address: "rVxmBQHweK8mYkCn7SzFyhMJubp3UBJtU"
      },
      to: {
        address: "rPiF8rcT6oZtJPHTkbFLnUiQvfymKy9Y9S"
      },
      time: "3 Weeks ago"
    },
    {
      id: "P3Q7R1S5T9U3V7W1X5Y9Z3A7B1C5D9E3",
      name: "GHOST PATCH #193",
      image: "/images/6.jpg",
      price: "100.0 xrp",
      type: "Sale",
      from: {
        address: "rshgG4xENPPvPwcUUhDTY5c4MFxt8BAZoH"
      },
      to: {
        address: "r3i4RNxmyyKnuk5mYJcjZ1TsmrqnQUjgQE"
      },
      time: "4 Weeks ago"
    },
    {
      id: "K7L1M5N9P3Q7R1S5T9U3V7W1X5Y9Z3A7",
      name: "GHOST PATCH #135",
      image: "/images/7.jpg",
      price: "92.0 xrp",
      type: "Sale",
      from: {
        address: "rD9iJmieYiKfyfF6VzpDPrXVfZV9mVBqsX"
      },
      to: {
        address: "rfUV3egGqYkAScjRATrQ8AoQfJkTm8NFns"
      },
      time: "1 Month ago"
    },
    {
      id: "B1C5D9E3F7G1H5I9J3K7L1M5N9P3Q7R1",
      name: "GHOST PATCH #276",
      image: "/images/8.jpg",
      price: "155.0 xrp",
      type: "Auction",
      from: {
        address: "rNbQwDwPLVwMXsVqNGV7yucYoiE4SFJCtm"
      },
      to: {
        address: "rER6ZiBPDb8XJmVYDtZF1nZJvwSNRwN3L2"
      },
      time: "1 Month ago"
    }
  ];

  return (
    <>
      <div className="px-6 py-4">
        <h3 className="text-xl font-medium text-gray-900">GHOST PATCH Activity</h3>
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