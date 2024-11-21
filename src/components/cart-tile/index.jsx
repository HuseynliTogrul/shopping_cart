import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id));
    };

    return (
        <div className="flex justify-between items-center border-2 border-solid p-5 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white h-[135px]">
            <div className="flex items-center gap-[20px]">
                <img className="w-[100px] h-[100px] object-contain" src={cartItem.image} alt="" />
                <div>
                    <h2>{cartItem.title}</h2>
                    <p className="font-bold">${cartItem.price}</p>
                </div>
                <p className=" text-gray-600 font-bold text-lg">({cartItem.count})</p>
            </div>
            <MdDelete onClick={handleRemoveFromCart} className="text-red-500 w-[40px] h-[40px] rounded-full p-[8px] cursor-pointer" />
        </div>
    );
};

export default CartTile;
