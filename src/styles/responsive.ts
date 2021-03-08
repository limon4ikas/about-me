// Breakpoints
// 31.25em - 500px
// 37.5em - 600px
// 87.5em - 1400px

export const size = {
  mobileS: '320px',
  mobileM: '400px',
  mobileL: '500px',
  tablet: '600px',
  laptop: '1000px',
  laptopL: '1400px',
};

export const device = {
  mobileS: `only screen and (max-width: ${size.mobileS})`,
  mobileM: `only screen and (max-width: ${size.mobileM})`,
  mobileL: `only screen and (max-width: ${size.mobileL})`,
  tablet: `only screen and (max-width: ${size.tablet})`,
  laptop: `only screen and (max-width: ${size.laptop})`,
  laptopL: `only screen and (max-width: ${size.laptopL})`,
};
