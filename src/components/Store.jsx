import React from 'react'
import Footer from './Footer'

const Store = () => {
  return (
    <>
      <div className="/Store-intro flex text-red-600 bg-gray-950 py-4 w-full justify-around my-6">
        <img src="/Store/store_intro.png" alt="" />
        <div className='flex flex-col justify-center items-center gap-3'>
          <p className='font-bold text-3xl poppins-reg-italic my-8'>Shop now @ flat 40% off</p>
          <p className='text-xl poppins-reg-italic'>Use Code : <span className='underline px-2'>FITFUSE40</span></p>
          <button className='m-2 px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Shop Now! </button>
        </div>
      </div>

      <div className="/Store-container min-h-screen flex w-full justify-center">
        <div className="items flex flex-col w-[100%]">
          <div className="tshirts">
            <h2 className='text-xl poppins-reg-italic text-red-600 px-3 py-3'>T-Shirts</h2>
            <div className="t-container flex">
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/tshirt1.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.899 <span className='text-gray-500 line-through px-3'>MRP - Rs.1100</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/tshirt2.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.760 <span className='text-gray-500 line-through px-3'>MRP - Rs.999</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/tshirt3.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.699 <span className='text-gray-500 line-through px-3'>MRP - Rs.1200</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/tshirt4.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.799 <span className='text-gray-500 line-through px-3'>MRP - Rs.1000</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
            </div>
          </div>

          <div className="Pants">
            <h2 className='text-xl poppins-reg-italic text-red-600 px-3 py-3 mt-10'>Pants</h2>
            <div className="p-container flex">
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/pants2.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.650 <span className='text-gray-500 line-through px-3'>MRP - Rs.850</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/pants3.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.699 <span className='text-gray-500 line-through px-3'>MRP - Rs.1,000</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/pants4.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.450 <span className='text-gray-500 line-through px-3'>MRP - Rs.700</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/pants5.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.799 <span className='text-gray-500 line-through px-3'>MRP - Rs.1,100</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
            </div>
          </div>

          <div className="Shoes">
            <h2 className='text-xl poppins-reg-italic text-red-600 px-3 py-3 mt-10'>Shoes</h2>
            <div className="s-container flex">
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/shoes1.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.1,200 <span className='text-gray-500 line-through px-3'>MRP - Rs.1,500</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/shoes2.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.1,300 <span className='text-gray-500 line-through px-3'>MRP - Rs.1,700</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/shoes4.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.1,400 <span className='text-gray-500 line-through px-3'>MRP - Rs.1,900</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/shoes5.png" alt="" />
                <span className='text-red-600 my-3 text-xs'> Rs.1,500 <span className='text-gray-500 line-through px-3'>MRP - Rs.2,100</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
            </div>
          </div>


          <div className="Equipments">
            <h2 className='text-xl poppins-reg-italic text-red-600 px-3 py-3 mt-10'>Equipments</h2>
            <div className="e-container flex mb-20">
              <div className="card flex flex-col items-center mx-4 px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/equipment1.png" alt="" />
                <span className='text-red-600 my-3 text-sm font-bold'> Dumbell 5-10kgs </span>
                <span className='text-red-600 my-3 text-xs'> Rs.4,000 <span className='text-gray-500 line-through px-3'>MRP - Rs.5,500</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4  px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/equipment2.png" alt="" />
                <span className='text-red-600 my-3 text-sm font-bold'> Treadmill </span>
                <span className='text-red-600 my-3 text-xs'> Rs.11,000 <span className='text-gray-500 line-through px-3'>MRP - Rs.14,000</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4  px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/equipment3.png" alt="" />
                <span className='text-red-600 my-3 text-sm font-bold'> Iron bars (set of 6) </span>
                <span className='text-red-600 my-3 text-xs'> Rs.10,000 <span className='text-gray-500 line-through px-3'>MRP - Rs.12,000</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
              <div className="card flex flex-col items-center mx-4  px-2 py-2 border-2 rounded-xl border-red-600">
                <img className='h-[300px]' src="/Store/equipment4.png" alt="" />
                <span className='text-red-600 my-3 text-sm font-bold'> Workout gloves (2 pairs) </span>
                <span className='text-red-600 my-3 text-xs'> Rs.600 <span className='text-gray-500 line-through px-3'>MRP - Rs.850</span> </span>
                <button className='px-3 py-3 my-3 text-black bg-red-600 hover:bg-red-500 font-bold w-1/2'> Buy Now! </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-400 w-1/4 flex flex-col items-baseline px-10 sticky text-sm">
          <div className="flex gap-1 py-5">
            <img src="/Store/sort.svg" alt="" /> Sort by
          </div>
          <h3>Items :</h3>
          <div className="flex py-2">
            <input type="radio" name="sort" value="Men" /> <span className='px-3'>Men's wear</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="sort" value="Women" /> <span className='px-3'>Women's wear</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="sort" value="Equipments" /> <span className='px-3'>Equipments</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="sort" value="Footwear" /> <span className='px-3'>Foot-wear</span>
          </div>
          <div className="flex py-2 mb-10">
            <input type="radio" name="sort" value="All" /> <span className='px-3'>All</span>
          </div>

          <h3>Age Group :</h3>
          <div className="flex py-2">
            <input type="radio" name="age" value="kids" /> <span className='px-3'>Kids 10-14</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="age" value="teenagers" /> <span className='px-3'>Teenagers 15-19</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="age" value="youth" /> <span className='px-3'>Youth 20-26</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="age" value="adult" /> <span className='px-3'>Adult 27-40</span>
          </div>
          <div className="flex py-2 mb-10">
            <input type="radio" name="age" value="middle-aged" /> <span className='px-3'>Middle aged 50+</span>
          </div>

          <h3>Size :</h3>
          <div className="flex py-2">
            <input type="radio" name="size" value="small" /> <span className='px-3'>S (Small)</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="size" value="medium" /> <span className='px-3'>M (Medium)</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="size" value="large" /> <span className='px-3'>L (Large)</span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="size" value="XL" /> <span className='px-3'>XL (Extra Large)</span>
          </div>
          <div className="flex py-2 mb-10">
            <input type="radio" name="size" value="XXL" /> <span className='px-3'>XXL (Double Extra Large)</span>
          </div>

          <h3>Material :</h3>
          <div className="flex py-2">
            <input type="radio" name="material" value="cotton" /> <span className='px-3'> Cotton </span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="material" value="polyester" /> <span className='px-3'> Polyester </span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="material" value="nylon" /> <span className='px-3'> Nylon </span>
          </div>
          <div className="flex py-2">
            <input type="radio" name="material" value="mesh" /> <span className='px-3'> Mesh </span>
          </div>
          <div className="flex py-2 mb-10">
            <input type="radio" name="material" value="cotton-blend" /> <span className='px-3'> Cotton Blend </span>
          </div>

          <button className='px-3 py-3 text-gray-400 bg-gray-900 hover:font-bold w-1/2'> Apply filters </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Store
