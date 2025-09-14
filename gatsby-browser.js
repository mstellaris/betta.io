require('./src/css/prism.css')

exports.onClientEntry = () => {
  if (process.env.NODE_ENV !== 'production') {
    if (!process.env.GATSBY_GA_MEASUREMENT_ID) {
      // Visible only in dev tools to confirm GA is off
      console.info('[Analytics] GA4 disabled: GATSBY_GA_MEASUREMENT_ID not set.');
    } else {
      console.info('[Analytics] GA4 enabled with ID:', process.env.GATSBY_GA_MEASUREMENT_ID);
    }
  }
}
