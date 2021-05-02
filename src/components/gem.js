import * as React from 'react';

function Gem({gemQuantity, name, id, hash}) {
  return (
    <div className="text-green-500 text-shadow-md">
      <div>{name}</div>
      <div>
        #{id.toString()} x {gemQuantity.toString()}
      </div>
      <div>
        {hash.substring(0, 5)}...{hash.substring(hash.length - 6)}
      </div>
    </div>
  );
}

export {Gem};
