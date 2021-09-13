
import './App.css';
import './index.css';
import shirt from './shirt-1.jpg'
import ReviewStar from './ReviewStar.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  {
    id: 1,
    title: 'Ultrafine Merino T-Shirt',
    price: '$80.00',
    rating: 4,
    imageSrc: shirt,
    imageAlt: 'Black t-shirt'
    }
]

function ProductCard() {
  return (
    <div className="bg-gray-100">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded filter drop-shadow flex flex-col overflow-hidden"
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-4 group-hover:opacity-30">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-contain sm:w-full sm:h-full py-2"
                />
              </div>
                  <div className="
                    w-6/12
                    absolute 
                    top-1/2 
                    left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 
                    opacity-0 group-hover:opacity-100
                    bg-gradient-to-t from-blue-800 to-blue-500 
                    filter drop-shadow
                    py-1.5 px-6
                    rounded
                    text-m
                    font-regular 
                    text-white 
                    text-center"
                  aria-hidden="true"
                  >
                    Add to cart
                  </div>
            </div>
            <div className="flex-1 px-4 pb-8 space-y-1 flex flex-col">
              <h3 className="text-base font-regular text-gray-900 text-center">
                  {product.title}
              </h3>             
              <p className="text-base font-regular text-gray-900 text-center mt-0">{product.price}</p>
              <div className="flex justify-center items-center pt-1">
              
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <ReviewStar
                      key={rating}
                      className={classNames(
                        product.rating > rating ? 'fill-current text-black' : ' fill-current text-gray-200',
                        'flex-shrink-0 h-3 w-3 m-0.5'
                      )}
                      aria-hidden="true"
                    />
                  ))} 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default ProductCard;
