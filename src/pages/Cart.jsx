import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div  >
  {
    cart.length > 0  ? 
    (
      <div className="flex flex-row justify-center  space-x-10">

      <div className="w-1/2 ml-12">
        {
          cart.map((item, index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />;
          })
        }
      </div>
    
      <div className="flex flex-col w-1/2 space-y-8 mt-5">
  
  {/* Top Container */}
  <div className="flex flex-col">
    <div className="text-green-700 font-bold">Your Cart</div>
    <div className="text-green-700 font-bold text-3xl">SUMMARY</div>
    <p>
      <span className="text-gray-700 font-bold">Total Items: {cart.length}</span>
    </p>
  </div>

  {/* Bottom Container */}
  <div className="flex flex-col space-y-2">
    <div className="flex flex-row gap-1">
      <p>Total Amount:</p>
      <p className="font-bold"> ${totalAmount}</p>
    </div>
    
    <button className="w-[300px] p-2 bg-green-700 text-white rounded">
      CheckOut Now
    </button>
  </div>

</div>

    
    </div>
    ) : 
    (<div className="flex flex-col justify-center items-center h-screen gap-3  ">
      <h1 >Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-gray-700 border-2 border-gray-700 font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-green-700
          hover:border-green-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
