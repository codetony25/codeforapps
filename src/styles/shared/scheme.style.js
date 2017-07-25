import color from 'color';
import { primaryColor, mainColor } from './variables.style';

export const globalColor = {
  bodyBg: primaryColor.white,
  boxShadow: primaryColor.black,
  btnInfoText: mainColor.dominantLightest,
  btnInfoBg: mainColor.accentThirdMedium,
  btnInfoLightBg: mainColor.accentThirdLight,
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
  textAttentionDark: mainColor.accentSecondPrimary,
  textAttentionLight: mainColor.accentFirstLight,
  iconDefault: primaryColor.white,
  codeboxBg: primaryColor.white,
  codeboxBeforeBg: primaryColor.athens,
  codeboxAfterText: primaryColor.lightGhost,
  logoFirstBarBg: primaryColor
};

export const headerColor = {
  bg: mainColor.dominantDarker,
  bgTransparent: mainColor.dominantTransparent,
  borderImage: mainColor.dominantMediumLighter,
  borderImageHover: mainColor.dominantMediumLight,
  link: mainColor.dominantLightest,
  linkHover: mainColor.accentFirstDark,
  textLogo: mainColor.dominantLightest,
  icon: mainColor.dominantLightest,
  iconHover: mainColor.accentSecondPrimary
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
  bg: mainColor.dominantDarkest,
  bgSupport: mainColor.dominantDarker,
  border: mainColor.dominantDarker,
  textHeader: mainColor.dominantLightest,
  textDefault: mainColor.dominantLightest,
  textHover: mainColor.accentSecondPrimary
};

export const landingColor = {
  bg: mainColor.dominantDarkest,
  bgLight: mainColor.dominantLightest,
  bgMedium: mainColor.dominantLighter,
  bgCircleHover: mainColor.dominantDarker,
  bgCircleActive: mainColor.dominantDarker,
  border: mainColor.dominantDark,
  boxShadow: mainColor.dominantDarkest,
  textHeader: mainColor.dominantDark,
  textBody: mainColor.dominantDark,
  textDefault: mainColor.dominantLightest,
  textShadow: mainColor.dominantLightestTransparent,
  iconBg: mainColor.dominantLighter,
  icon: mainColor.dominantLightest,
  logo: mainColor.dominantDarker,
  overlay: mainColor.dominantDarkTransparent,
  videoBg: mainColor.dominantLightest,
  errorMsg: mainColor.accentFirstDark,
  successMsg: mainColor.dominantDarker,
  link: mainColor.dominantDarkest
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

export const editorColor = {
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

export const modalColor = {
  bg: primaryColor.white,
  border: primaryColor.stone,
  inputBorder: primaryColor.lightGhost
};

export default {
  globalColor,
  headerColor,
  sidebarColor,
  footerColor,
  landingColor,
  authColor,
  bookColor,
  formColor,
  editorColor,
  modalColor
}
