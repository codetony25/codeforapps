/**
 * Color Scheming
 */
import { hexToRgb } from 'jassy';
import color from 'color';
import { primaryColor } from '/imports/react/styles/variables';

export const globalColor = {
  bodyBg: primaryColor.white,
  boxShadow: primaryColor.black,
  btnInfoText: primaryColor.white,
  btnInfoBg: primaryColor.radiance,
  btnInfoLightBg: primaryColor.diane,
  btnPassiveText: primaryColor.white,
  btnPassiveBg: primaryColor.diane,
  btnSuccessText: primaryColor.white,
  btnSuccessBg: primaryColor.gumbo,
  btnDefaultText: primaryColor.white,
  btnDefaultBg: primaryColor.tuna,
  btnPrimaryText: primaryColor.white,
  btnPrimaryBg: primaryColor.malachite,
  btnActionText: primaryColor.white,
  btnActionBg: primaryColor.fuego,
  btnLoadingBorder: primaryColor.tuna,
  btnLoadingText: primaryColor.white,
  btnLoadingBg: primaryColor.egg,
  btnDisabledText: primaryColor.lightGhost,
  btnDisabledBg: primaryColor.athens,
  btnDangerText: primaryColor.white,
  btnDangerBg: primaryColor.torch,
  btnOutlineBorder: primaryColor.white,
  btnToolbarBgHover: primaryColor.athens,
  btnToolbarBgActive: primaryColor.athens,
  btnToolbarText: primaryColor.tuna,
  btnToolbarBorder: primaryColor.athens,
  badgeMessageBg: primaryColor.coral,
  badgeMessageText: primaryColor.white,
  badgeAlertBg: primaryColor.radiance,
  badgeAlertText: primaryColor.white,
  dividerBg: primaryColor.lightGhost,
  dividerBeforeBg: primaryColor.carrot,
  dropdownBg: primaryColor.white,
  linkDefaultText: primaryColor.white,
  linkDefaultHover: color(primaryColor.egg).darken(0.07).hexString(),
  panelHeaderTextDefault: primaryColor.white,
  panelHeaderBg: primaryColor.diane,
  textAttentionDark: primaryColor.regent,
  textAttentionLight: primaryColor.white,
  iconDefault: primaryColor.white,
  codeboxBg: primaryColor.white,
  codeboxBeforeBg: primaryColor.athens,
  codeboxAfterText: primaryColor.lightGhost,
  logoFirstBarBg: primaryColor
};

export const headerColor = {
  bg: primaryColor.diane,
  btnBg: primaryColor.gumbo,
  btnText: primaryColor.white,
  btnHover: color(primaryColor.egg).darken(0.04).hexString(),
  btnActive: color(primaryColor.egg).darken(0.04).hexString(),
  borderBottom: primaryColor.ghost,
  iconDefault: primaryColor.white,
  iconHover: primaryColor.ghost,
  linkDefault: primaryColor.white,
  linkHover: primaryColor.regent,
  logo: primaryColor.egg,
  logoText: primaryColor.white,
  textDefault: primaryColor.tuna
};

export const sidebarColor = {
  bg: primaryColor.diane,
  bgOverlay: primaryColor.shaft,
  border: primaryColor.stone,
  logo: primaryColor.malachite,
  textHeader: primaryColor.white,
  textDefault: primaryColor.white,
  textHover: primaryColor.regent
};

export const footerColor = {
  bg: primaryColor.shaft,
  bgSupport: primaryColor.diane,
  border: primaryColor.stone,
  textHeader: primaryColor.white,
  textDefault: primaryColor.white,
  textHover: primaryColor.regent
};

export const landingColor = {
  bg: primaryColor.egg,
  bgLight: primaryColor.white,
  bgMedium: primaryColor.ghost,
  bgCircleHover: primaryColor.stone,
  bgCircleActive: primaryColor.stone,
  border: primaryColor.stone,
  boxShadow: primaryColor.black,
  textHeader: primaryColor.tuna,
  textBody: primaryColor.tuna,
  textDefault: primaryColor.white,
  textShadow: `rgba(${hexToRgb(primaryColor.black)}, .2)`,
  iconBg: primaryColor.regent,
  icon: primaryColor.white,
  logo: primaryColor.egg,
  overlay: `rgba(${hexToRgb(primaryColor.shaft)}, 0.85)`,
  videoBg: primaryColor.athens,
  errorMsg: primaryColor.torch,
  successMsg: primaryColor.egg,
  link: primaryColor.radiance
};

export const authColor = {
  icon: primaryColor.gumbo,
  textDefault: primaryColor.tuna,
  textBody: primaryColor.gumbo,
  successIcon: primaryColor.malachite,
  errorIcon: primaryColor.torch,
  errorMsg: primaryColor.torch,
  bg: primaryColor.white
};

export const bookColor = {
  searchBg: primaryColor.white,
  searchPlaceholder: primaryColor.gumbo,
  iconReset: primaryColor.tuna,
  iconSubmit: primaryColor.tuna
};

export const formColor = {
  autofillText: primaryColor.shaft,
  autofillBg: primaryColor.white,
  inputBoxBorder: primaryColor.lightGhost,
  inputText: primaryColor.shaft,
  inputBoxShadow: primaryColor.ghost,
  inputBg: primaryColor.white,
  inputFocusBorder: primaryColor.gumbo,
  inputErrorBorder: primaryColor.torch,
  labelDefaultText: primaryColor.shaft,
  iconSuccess: primaryColor.malachite,
  iconError: primaryColor.torch,
  textEmail: primaryColor.egg,
  msgSuccess: primaryColor.regent,
  msgError: primaryColor.torch
};

export const bookEditorColor = {
  bg: primaryColor.catskill,
  bgLight: primaryColor.white,
  border: primaryColor.athens,
  editIcon: primaryColor.gumbo,
  toolbarIcon: primaryColor.gumbo,
  toolbarDropDownActiveIconBg: primaryColor.lightGhost,
  toolbarDropDownActiveIconText: primaryColor.athens,
  toolbarDropDownHoverBg: primaryColor.athens,
  toolbarDropDownActiveBg: primaryColor.lightGhost,
  toolbarDropDownActiveText: primaryColor.tuna,
  textDefault: primaryColor.tuna,
  title: primaryColor.tuna,
  titleIcon: primaryColor.gumbo,
  titleInputHover: primaryColor.lightGhost,
  titleInputFocus: primaryColor.lightGhost,
  chapterHover: primaryColor.athens,
  chapterText: primaryColor.shaft,
  chapterSavedText: primaryColor.torch,
  inputBg: primaryColor.athens
};

export const userSidebarColor = {
  bg: primaryColor.stone,
  bgActive: primaryColor.shaft,
  navigationText: primaryColor.gumbo,
  navigationIcon: primaryColor.gumbo,
  navigationTextActive: primaryColor.white,
  navigationIconActiveBg: primaryColor.white,
  navigationHoverBg: primaryColor.shaft,
  navigationTextHover: primaryColor.white,
  navigationIconHoverBg: primaryColor.white,
  border: primaryColor.athens,
  borderActiveBg: primaryColor.coral,
  headerText: primaryColor.tuna,
  headerBg: primaryColor.athens,
  bodyText: primaryColor.tuna
};

export const modalColor = {
  bg: primaryColor.white,
  border: primaryColor.stone,
  inputBorder: primaryColor.lightGhost
};