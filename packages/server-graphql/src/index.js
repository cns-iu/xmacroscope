import './graphql/server';

if (module.hot) {
  module.hot.status((event) => {
    if (event === 'abort' || event === 'fail') {
      console.log(`HMR error status: ${event}`);
      // Signal webpack.run.js to do full-reload of the back-end
      process.exit(250);
    }
  });

  module.hot.accept();
}
