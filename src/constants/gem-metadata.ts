// TODO: This needs to move to a metadata endpoint

const gemImages = {
  DMND: 'white2.png',
  RUBY: 'red2.png',
  MRLD: 'greengem2.png',
  SPHR: 'blue2.png',
  JADE: 'dkgreengem2.png',
  TPAZ: 'orange2.png',
  OPAL: 'opal.png',
  PERL: 'pearl.png',
  CHRY: 'cherry.png',
  BERY: 'strawberry.png',
  PEPE: 'pepe.png'
};

export const getGemImage = (symbol: string): string =>
  `/img/${gemImages[symbol] ?? 'white2.png'}`;
