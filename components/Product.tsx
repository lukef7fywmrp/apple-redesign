import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import { urlFor } from "../sanity";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
    });
  };

  console.log(product);

  return (
    <div
      key={product._id}
      className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10"
    >
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          objectFit="contain"
          layout="fill"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Product;
