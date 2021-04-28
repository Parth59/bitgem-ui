import * as React from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="py-6" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-max mx-auto pb-4">
        <div className="flex gap-10">
          <a
            href="https://twitter.com/nft_gem"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <img className="w-14" alt="twitter" src="/img/twitter.gif" />
          </a>

          <a
            href="https://github.com/nftgem"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Github</span>
            <img className="w-14" alt="github" src="/img/github.gif" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export {Footer};
