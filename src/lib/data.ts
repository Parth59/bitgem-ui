enum TwitterCardSize {
  small = 'summary',
  large = 'summary_large_image'
}

export const opengraphData = {
  Home: {
    title: 'Welcome to Bitgem. Stake anything, get NFT Gems',
    description:
      "Bitgems are nft's that are earned by staking any ERC20 token of value. Bitgems are limited in quantity and become progressively harder to earn over time, just like real gems.",
    openGraph: {
      'og:title': 'Welcome to Bitgem. Stake anything, get NFT Gems',
      'og:description':
        "Bitgems are nft's that are earned by staking any ERC20 token of value. Bitgems are limited in quantity and become progressively harder to earn over time, just like real gems.",
      'og:image': 'https://bitgem-ui.vercel.app/img/og_home.png',
      'og:site_name': 'Bitgem',
      'og:url': 'https://bitgem.co',
      'og:type': 'website',
      'twitter:card': TwitterCardSize.large
    }
  }
};
