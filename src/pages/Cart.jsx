import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartTile from '../components/cart-tile'
import { Link } from 'react-router-dom'

const Cart = () => {

  const [totalCart, setTotalCart] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const { cart } = useSelector(state => state)

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2)
    setTotalCart(total.endsWith('0') ? parseInt(total) : total)

    const totalItemsCount = cart.reduce((acc, item) => acc + item.count, 0)
    setTotalItems(totalItemsCount)
  }, [cart])

  return (
    <div className=''>
      {
        cart && cart.length ? (
          <>
            <div className='min-h-[68vh] max-w-6xl mx-auto flex flex-col gap-5 h-[500px] overflow-y-scroll scrollbar-hide border-2 border-solid p-8 rounded-xl bg-[lightblue]'>
              {
                cart.map(cartItem => <CartTile cartItem={cartItem} />)
              }
            </div>
          </>
        ) : (
          <div className='min-h-[67vh] flex flex-col items-center justify-center'>
            <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty</h1>
            <Link to='/'>
              <button className='bg-red-950 text-white rounded-lg font-bold p-4'>Shop now</button>
            </Link>
          </div>
        )
      }
      <div className='flex flex-col justify-center items-end p-5 mt-4'>
        <h2 className='font-bold text-red-800 text-xl mb-3'>Your Cart Summary</h2>
        <p>
          <span className='text-gray-800 font-bold'>Total item</span>
          <span>: {totalItems}</span>
        </p>
        <p>
          <span className='text-gray-800 font-bold'>Total Amount</span>
          <span>: {totalCart}</span>
        </p>
      </div>
    </div>
  )
}

export default Cart