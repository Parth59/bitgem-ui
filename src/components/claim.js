import * as React from 'react';

function Claim({amount, name, symbol, quantity, unlockTime}) {
  let date = new Date(unlockTime.toNumber() * 1000);

  return (
    <div className="text-green-500 text-shadow-md">
      <div>
        {name} ({symbol})
      </div>
      <div>
        {amount} x {quantity}
      </div>
      <div>
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </div>
    </div>
  );
}

export {Claim};
