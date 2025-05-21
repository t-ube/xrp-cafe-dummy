import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="py-20 bg-[#0076FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">XRP.saru NFT Marketplace</h1>
          <p className="text-xl mb-8">Buy, sell, and create NFTs on the XRP Ledger</p>
          <div className="flex justify-center space-x-4">
            <Link href="/collections" className="px-6 py-3 bg-white text-blue-500 rounded-full font-bold hover:bg-opacity-90 transition-colors">
              Explore Collections
            </Link>
            <Link href="/create" className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-bold hover:bg-white hover:text-blue-500 transition-colors">
              Create NFT
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/collection/saru" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/images/0.jpg" 
                alt="GHOST NFT" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">GHOST NFT</h3>
                <p className="text-gray-700">This collection is not an NFT. It does not exist.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}