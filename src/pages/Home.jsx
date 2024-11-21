import { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import ProductTile from '../components/product-tile'

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchProduct() {
    setLoading(true)
    const res = await fetch(`https://fakestoreapi.com/products/?limit=20`)
    const data = await res.json()

    if (data) {
      setLoading(false)
      setProducts(data)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>
      {
        loading ? (
          <div className='min-h-screen w-full flex justify-center items-center mt-[-80px]'>
            <Circles
              width={'120px'}
              height={'120px'}
              color='#005369'
              visible={true}
            />
          </div>
        ) :
          <div className='min-h-[89vh] grid grid-cols-4 max-w-6xl mx-auto gap-x-5 gap-y-10 pb-8 text-center max-lg:grid-cols-2 max-sm:grid-cols-1'>
            {
              products && products.length && products.map((productItem) =>
                <ProductTile product={productItem} key={productItem.id} />
              )
            }
          </div>
      }
    </div>
  )
}

export default Home