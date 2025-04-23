import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  // IDに基づいて画像パスを決定
  let imagePath = "";

  switch (params.id) {
    case "1":
      imagePath = "/bg_sakura_night.jpg";
      break;
    case "2":
      imagePath = "/ohanami_group.png";
      break;
    case "3":
      imagePath = "/ohanami_walk.png";
      break;
    default:
      imagePath = "/snowman_yukidaruma_toketa.png";
      break;
  }

  return (
    <div>
      <h1>Page {params.id}</h1>
      <p>This is the page for ID: {params.id}</p>
      <div>
        <Image
          src={imagePath}
          alt={`Image for ID ${params.id}`}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
