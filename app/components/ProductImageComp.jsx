import Image from "next/image";

const ProductImageComp = ({ imagePath }) => {
  return (
    <div className="sm:h-[20rem] sm:w-[25rem] h-[19rem] w-[20rem] rounded-3xl relative overflow-hidden">
      <Image
        class="object-cover w-full h-full"
        src={imagePath}
        fill
        alt=""
        priority
      />
    </div>
  );
};

export default ProductImageComp;
