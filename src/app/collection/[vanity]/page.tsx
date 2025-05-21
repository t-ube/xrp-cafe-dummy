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
    name: "GHOST PATCH",
    description: "A haunting collage of spectral fragments stitched together from forgotten stories, ruins, and rituals.",
    image: "/images/0.jpg",
    twitter: "shirome_x",
    verified: true,
    floor: 10.0,
    items: 100,
    totalVolume: "1.1k",
    holders: 6,
    percentListed: "16.66%"
  };
}

export default async function Page(/*{ params }: Props*/) {
  const collection = await getCollectionData(/*params.vanity*/);
  
  return (
    <CollectionPage collection={collection} />
  );
}