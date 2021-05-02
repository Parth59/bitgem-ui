import * as React from 'react';
import {gemPics} from 'lib/blockchain';
import {usePool} from './blockchain-context';

function Pool({address}) {
  const pool = usePool(address);
  // const [formValues, setFormValues] = React.useState({
  //   amount: 0,
  //   duration: 0,
  //   price: 0
  // });

  // const handleFieldChange = (event) => {
  //   event.persist();
  //   setFormValues((values) => ({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   }));
  // };

  console.log('Pool', pool);
  if (!pool) return null; //TODO: Add failure state

  const {
    symbol,
    claimedCount,
    difficultyStep,
    ethPrice,
    maxTime,
    minTime,
    mintedCount,
    name,
    totalStake
  } = pool;

  // const { }
  return (
    <div className="rounded-lg bg-blue-900">
      <div className="flex px-3 py-4 sm:px-5 sm:py-3 text-green-500 text-shadow-md">
        <img
          alt={name}
          className="h-20 sm:h-24 self-center"
          src={`/img/${gemPics(symbol)}`}
        />
        <div className="flex flex-col sm:flex-row justify-between flex-grow">
          <div className="flex flex-row sm:flex-col items-start pl-4 lg:pl-6 justify-between py-1 sm:py-2">
            <div className="flex-1">
              <div className="text-2xl text-yellow-500">{name}</div>
              <div className="text-blue-300">using bnb @ 1.0000/BNB</div>
            </div>
            <div className="text-blue-300 text-right text-xs">
              <div className="">({symbol})</div>
              <div>diff: 32</div>
              <div>X119 mined</div>
              <div>x330 claims</div>
            </div>
          </div>
          <div className="text-yellow-300 flex-grow px-4 sm:px-4 md:pl-10 text-sm sm:text-base md:text-xl font-bold text-shadow-sm">
            <div>{/* {amount} x {quantity} */}</div>
            <div>
              {/* {date.toLocaleDateString()} {date.toLocaleTimeString()} */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 flex rounded-md shadow-sm px-4">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
          time
        </span>
        <input
          type="text"
          name="company_website"
          id="company_website"
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
          value={1}
        />
        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
          days
        </span>
      </div>
      <div className="mt-1 flex rounded-md shadow-sm px-4">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
          price
        </span>
        <input
          type="text"
          name="company_website"
          id="company_website"
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
          value={1}
        />
        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
          bnb
        </span>
      </div>
      <div className="mt-1 flex rounded-md shadow-sm px-4">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
          x
        </span>
        <input
          type="text"
          name="company_website"
          id="company_website"
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
          value={1}
        />
        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
          gems
        </span>
      </div>
      <div className="px-1 py-2  text-base text-center text-shadow-md font-bold text-green-600">
        <div>1.9232 BNB will be staked for 1.0000 day</div>
      </div>
      <div className="w-full sm:hidden">
        <button className="button-card">stake</button>
      </div>
    </div>
  );
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
//         Company Website
//       </label>
//       <div className="mt-1 flex rounded-md shadow-sm">
//         <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
//           http://
//         </span>
//         <input
//           type="text"
//           name="company_website"
//           id="company_website"
//           className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
//           placeholder="www.example.com"
//         />
//       </div>
//     </div>
//   )

export {Pool};
