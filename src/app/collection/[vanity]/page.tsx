export const runtime = 'edge';

// app/collection/[vanity]/page.tsx
import { CollectionPage } from '@/components/CollectionPage';
import type { Metadata/*, ResolvingMetadata*/ } from 'next';

/*
type Props = {
  params: { vanity: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
*/

// 動的にメタデータを生成
export async function generateMetadata(
  /*{ params }: Props,
  parent: ResolvingMetadata*/
): Promise<Metadata> {
  // コレクションデータを取得
  const collection = await getCollectionData(/*params.vanity*/);
  
  return {
    title: `${collection.name} | XRP.saru`,
    description: collection.description,
    openGraph: {
      images: [collection.image],
    },
  };
}

// サーバーコンポーネントでデータ取得
async function getCollectionData(/*vanity: string*/) {
  // 実際のプロジェクトではここでAPIからデータを取得します
  // 例: const res = await fetch(`https://api.xrp.saru/collections/${vanity}`);
  
  // サンプルデータを返します
  return {
    id: 1234,
    name: "OSARU NFT",
    description: "This collection is not an NFT. It does not exist.",
    image: "/images/0.jpg",
    twitter: "shirome_x",
    verified: true,
    floor: 12.3,
    items: 123,
    totalVolume: "1.2k",
    holders: 12,
    percentListed: "12.34%"
  };
}

export default async function Page(/*{ params }: Props*/) {
  const collection = await getCollectionData(/*params.vanity*/);
  
  return (
    <CollectionPage collection={collection} />
  );
}