export const theme = Object.freeze({
  fonts: {
    main: `'Montserrat', sans-serif`,
    second: `'Open Sans', sans-serif`,
    accent: `'Sail', cursive`,
  },
  fontSizes: {
    mainFontSize: '14x',
    btnFontSize: '18px',
    titleSize: '50px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    // My styles
    textColor: '#444251',
    witeTextColor: '#FFFFFF', 
    primaryColor: '#FFD4DD',
    secondaryColor: '#9C0746',
    btnTxtColor: '#FFFFFF',
    secondaryTextColor: '#b44e79',
    titleTextColor: '#a0114e',
    witeBcgColor: '#FFFFFF',
    blackBcgColor: '#000000',
    btnHoverColor: '#bf1c60',
    scrollBcgColor: '#555555',
    overlayColor: '#61616199',

  },
  media: {
    sm: '(min-width: 360px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1420px)',
    smToMd: '(min-width: 320px) and (max-width: 767.99px)',
    mdToLg: '(min-width: 768px) and (max-width: 1419.99px)',
    toMd: '(max-width: 767.99px)',
    smToLg: '(min-width: 320px) and (max-width: 1419.99px)',
  },
});
