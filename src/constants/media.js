export const SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 420,
  tablet: 768,
  tabletL: 922,
  laptop: 1024,
  laptopS: 1200,
  laptopL: 1439,
  desktop: 1800
}

export const DEVICE = { // TODO: fix all sizes - restructure
  mobileS: `(min-width: ${SIZE.mobileS}px)`,
  mobileM: `(min-width: ${SIZE.mobileM}px)`,
  mobileL: `(min-width: ${SIZE.mobileL}px)`,
  tablet: `(min-width: ${SIZE.tablet}px)`,
  tabletL: `(max-width: ${SIZE.tabletL}px)`,
  laptop: `(min-width: ${SIZE.laptop}px)`,
  laptopS: `(min-width: ${SIZE.laptopS}px)`,
  desktop: `(min-width: ${SIZE.desktop}px)`,
  laptopL: `(min-width: ${SIZE.laptopL}px)`, // >1440
  mobileDevicesS: `(max-width: ${SIZE.mobileM - 1}px)`,
  mobileDevices: `(max-width: ${SIZE.tablet - 1}px)`, // <768
  tabletDevices: `(min-width: ${SIZE.tablet}px) and (max-width: ${SIZE.laptop -
    1}px)`, // 768-1024
  tabletDevicesS: `(min-width: ${
    SIZE.laptop
  }px) and (max-width: ${SIZE.laptopS - 1}px)`, // 1024-1200
  tabletDevicesL: `(min-width: ${
    SIZE.laptopS
  }px) and (max-width: ${SIZE.laptopL - 1}px)`, // 1200-<1439
  tabletDevices1200: `(max-width: ${SIZE.laptopS - 1}px)`,
  mobileTabletDevices: `(max-width: ${SIZE.laptopL - 1}px)` // <1439
}
