import {useWeb3React} from '@web3-react/core';

function StatusPanel(): JSX.Element {
  const {active} = useWeb3React();

  return (
    <>
      {active ? null : (
        <div className="pb-4 px-4 text-sm md:text-2xl text-center lowercase text-yellow-100">
          Not connected. Click the connect button in the nagivation menu to
          connect.
        </div>
      )}
    </>
  );
}

export {StatusPanel};
