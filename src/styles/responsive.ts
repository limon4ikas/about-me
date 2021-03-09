// Breakpoints
// 31.25em - 500px
// 37.5em - 600px
// 87.5em - 1400px

export enum ScreenSize {
  mobileS = '320px',
  mobileM = '400px',
  mobileL = '500px',
  tablet = '600px',
  laptop = '1000px',
  laptopL = '1400px',
}

export const device = {
  mobileS: `only screen and (max-width: ${ScreenSize.mobileS})`,
  mobileM: `only screen and (max-width: ${ScreenSize.mobileM})`,
  mobileL: `only screen and (max-width: ${ScreenSize.mobileL})`,
  tablet: `only screen and (max-width: ${ScreenSize.tablet})`,
  laptop: `only screen and (max-width: ${ScreenSize.laptop})`,
  laptopL: `only screen and (max-width: ${ScreenSize.laptopL})`,
};
