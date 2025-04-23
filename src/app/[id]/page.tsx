import { getImageInfoById, getImageUrl } from "@/utils/imageMapping";
import type {
  Metadata,
  ResolvingMetadata,
} from "next/dist/lib/metadata/types/metadata-interface";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

// 動的なメタデータを生成するための関数
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // 親からメタデータを継承
  const parentMetadata = await parent;
  const { id } = await params;

  const imageInfo = getImageInfoById(id);
  const imageUrl = getImageUrl(imageInfo.path);

  // 親のメタデータから継承して、必要なものだけ上書き
  return {
    title: `Page ${id} | ${parentMetadata.title?.absolute || "Next.js Sandbox App"}`,
    description: `This is the page for ID: ${id}`,
    openGraph: {
      title: `Page ${id}`,
      description: `This is the page for ID: ${id}`,
      images: [
        {
          url: imageUrl,
          width: imageInfo.width,
          height: imageInfo.height,
          alt: imageInfo.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Page ${id}`,
      description: `This is the page for ID: ${id}`,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const imageInfo = getImageInfoById(id);

  return (
    <div>
      <h1>Page {id}</h1>
      <p>This is the page for ID: {id}</p>
      <div>
        <Image
          src={imageInfo.path}
          alt={imageInfo.alt}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
