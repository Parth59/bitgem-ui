import Link from 'next/link';
import React from 'react';
import {ConnectButton} from './connect-button';
import {CloseIcon, MenuIcon} from './icons';
import {useToggle} from 'hooks/useToggle';
import {useRouter} from 'next/dist/client/router';

const blockchainService = {
  COIN: 'ETH',
  formatEther: (amount) => amount,
  totalEthStaked: 23.88,
  totalClaims: 23,
  totalMinted: 7
};

function Header(): JSX.Element {
  const router = useRouter();
  const [isMenuOpen, toggleMenu, setMenuState] = useToggle(false);

  // closes the menu when user picks a route on mobile
  React.useEffect(() => {
    setMenuState(false);
  }, [router.pathname, setMenuState]);

  return (
    <header className="relative z-10">
      <div className="pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-2 md:px-3"
          aria-label="Global"
        >
          {/* <div className="flex items-center justify-between flex-1"> */}
          <div className="flex items-center justify-between flex-1">
            <div>
              <Link href="/">
                <img
                  className="w-8 md:w-1000 xl:w-12 cursor-pointer"
                  alt="bitgem home"
                  src="/img/animated-diamond.gif"
                />
              </Link>
            </div>

            <div className="-mr-2 flex items-center  gap-1">
              <MenuItems className="hidden md:block menu-item" />
              <ConnectButton className="px-4 py-2 font-bold rounded-md focus:ring-2 focus:outline-none text-red-500 text-shadow-sm hover:text-shadow-md" />

              <button
                type="button"
                onClick={toggleMenu}
                className="md:hidden bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-yellow-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          {/* <div className="hidden md:flex items-baseline md:text-base lg:text-md xl:text-lg space-x-2  md:ml-10">
              <MenuItems className="menu-item" />
              <ConnectButton className="px-4 py-2 font-bold rounded-md focus:ring-2 focus:outline-none text-red-500 text-shadow-sm hover:text-shadow-md" />
            </div> */}
          {/* </div> */}
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen ? (
        <div className="absolute top-0 z-10 inset-x-0 -mx-2 py-2 transform origin-top md:hidden">
          <div className="rounded-lg shadow-md border-2 border-yellow-300 backdrop-filter backdrop-blur-xl  ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="pt-4 px-2 flex justify-end">
              <button
                type="button"
                onClick={toggleMenu}
                className="rounded-md p-2 inline-flex items-center justify-center text-yellow-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className=" pb-6">
              <div className="text-yellow-300 text-shadow-sm px-2 space-y-1">
                <MenuItems className="menu-item-sm" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="mt-2 flex items-center justify-center">
        <img
          className="mr-2 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:mr-4 lg:w-24 lg:h-24 flip-img "
          alt=""
          src="/img/axe.png"
        />
        <div className="hover:animate-bounce-once font-bold text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-shadow-indigo text-pink-500">
          bitgem
        </div>
        <img
          className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
          alt=""
          src="/img/axe.png"
        />
      </div>
      <div className="my-1 mx-auto max-w-max text-center">
        <span className="block text-shadow-lg text-[0.5rem] sm:text-sm md:text-lg lg:text-2xl text-green-300">
          {`${blockchainService.COIN} staked: ${blockchainService.formatEther(
            blockchainService.totalEthStaked
          )} ${blockchainService.COIN} - claims ${
            blockchainService.totalClaims
          } -
          minted: ${blockchainService.totalMinted} gems`}
        </span>
        <span className="block mt-2 sm:mt-3 mb-4 sm:mb-5 text-sm text-shadow-sm sm:text-2xl md:text-3xl lg:text-4xl text-pink-500">
          stake anything - earn nft gems
        </span>
      </div>
    </header>
  );
}

type MenuItemsProps = {
  className: string;
};

function MenuItems({className}: MenuItemsProps): JSX.Element {
  return (
    <>
      <Link href="/pools">
        <a className={className}>stake</a>
      </Link>
      <Link href="/claims">
        <a className={className}>claims</a>
      </Link>
      <Link href="/gems">
        <a className={className}>gems</a>
      </Link>
      <Link href="/faq">
        <a className={className}>faq</a>
      </Link>
      <Link href="/governance">
        <a className={className}>
          <div className="flex items-center gap-1">
            <img className="h-6" alt="governance tokens" src="/img/key.png" />
            <div className="">X0</div>
          </div>
        </a>
      </Link>
    </>
  );
}

export {Header};
