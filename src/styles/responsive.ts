// Breakpoints
// 25em = 400px
// 31.25em - 500px
// 37.5em - 600px
// 87.5em - 1400px

export enum ScreenSize {
  mobileS = '20em',
  mobileM = '25em',
  mobileL = '31.25em',
  tablet = '37.5em',
  laptop = '62.5em',
  laptopL = '87.5em',
}

export const device = {
  mobileS: `only screen and (max-width: ${ScreenSize.mobileS})`,
  mobileM: `only screen and (max-width: ${ScreenSize.mobileM})`,
  mobileL: `only screen and (max-width: ${ScreenSize.mobileL})`,
  tablet: `only screen and (max-width: ${ScreenSize.tablet})`,
  laptop: `only screen and (max-width: ${ScreenSize.laptop})`,
  laptopL: `only screen and (max-width: ${ScreenSize.laptopL})`,
};
