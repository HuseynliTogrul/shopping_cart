import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cart-slice'
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (id) => {
    dispatch(addToCart(product))
  }

  return (
    <>
      <div className='h-full flex flex-col items-center border-2 gap-3 pt-[50px] p-8 pb-[25px] rounded-xl cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white relative justify-between'>
        <div className='rounded-tr-xl absolute top-0 right-0 text-white bg-red-500 py-[5px] px-[10px]'>${product.price}</div>
        <div className='h-[180px]'>
          <img className=' h-full w-full object-contain' src={product.image} alt="" />
        </div>
        <div>
          <h3>{product.title}</h3>
        </div>
        <div className='flex items-center justify-evenly rounded-[10px] bg-[#ececec] w-full mt-5 '>
          <MdAddShoppingCart onClick={handleAddToCart} className=' text-green-700 w-[40px] h-[40px] rounded-full p-[8px]' />
          <FaRegHeart className=' text-red-500 w-[40px] h-[40px] rounded-full p-[8px]' />
        </div>
      </div>
    </>
  )
}

export default ProductTile