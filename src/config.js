export const port = process.env.PORT || 8000;
export const host = process.env.WEBSITE_HOSTNAME || `codeforappscom.herokuapp.com:${port}`;

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  }

};
