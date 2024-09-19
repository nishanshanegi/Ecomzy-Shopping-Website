import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ( {item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = ()=> {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (


<div className="border-b-2 border-gray-500">

<div className="flex flex-row justify-center gap-3 p-4  ">

<div className="h-[180px] w-[180px] p-3">
<img  src={item.image} className="h-full w-full " />
</div>


<div className="w-80 py-1 gap-6 ">
  <h1 className="text-gray-700 font-semibold text-lg text-left p-1 ">{item.title}</h1>
  <h1 className="text-gray-400 font-normal text-[12px] p-2">{item.description.split(" ").slice(0,16).join(" ") + "..."}</h1>

  <div className="flex flex-row justify-between items-between p-1 ">
    <p className="text-green-600 font-semibold">${item.price}</p>
  <div onClick={removeFromCart} >

  <FcDeleteDatabase/>
</div>


</div>
</div>

</div>

    </div>
  );
};

export default CartItem;
