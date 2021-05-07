import * as React from 'react';
import {gemPics, dateFromBigNumber} from 'lib/blockchain';

function Claim({amount, name, symbol, quantity, unlockTime}) {
  console.log(name, unlockTime);
  let date = new Date(unlockTime * 1000);

  return (
    <div className="rounded-lg bg-green-900">
      <div className="flex px-3 py-1 sm:px-5 sm:py-3 text-green-500 text-shadow-md">
        <img
          alt={name}
          className="h-20 sm:h-24 self-center"
          src={`/img/${gemPics(symbol)}`}
        />
        <div className="flex flex-col sm:flex-row justify-between flex-grow">
          <div className="flex flex-row sm:flex-col items-start pl-4 lg:pl-6 justify-between py-1 sm:py-2">
            <div className="text-2xl  sm:text-lg md:text-xl lg:text-3xl text-yellow-500">
              {name}
            </div>
            <div className="text-blue-300 text-right sm:text-left text-xs sm:text-sm lg:text-base">
              <div className="">({symbol})</div>
              <div className="hidden sm:block">X TOTAL MINTED</div>
            </div>
          </div>
          <div className="text-yellow-300 flex-grow px-4 sm:px-4 md:pl-10 text-sm sm:text-base md:text-xl font-bold text-shadow-sm">
            <div>
              {amount} x {quantity}
            </div>
            <div>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </div>
          </div>
          <div className="flex flex-grow sm:justify-end py-1 sm:py-0 ">
            <div className="flex sm:flex-col pl-4 sm:pl-0 items-center sm:text-sm md:text-base self-center gap-3 text-shadow-md font-bold text-red-700">
              <div>claim immature</div>
              <div className="w-full hidden sm:block">
                <button className="rounded-md w-auto flex-shrink text-white text-base py-2  px-3 text-shadow-lg bg-blue-600 sm:text-sm md:text-base">
                  collect claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <button className="rounded-b-md text-lg w-full text-white py-2 text-shadow-lg bg-blue-600 px-2">
          collect claim
        </button>
      </div>
    </div>
  );
}

export {Claim};
