/* jshint esversion: 6 */
const nativefier = require('nativefier').default;
const shell = require('shelljs');
const asyncMap = require('async/mapSeries');

const targetUrl = 'http://localhost:8080/mav/';
const kioskUnzipped = './dist/kiosk-unzipped/';
const kioskZipped = './dist/release';
const zoomFixFile ='./src/zoom-fix.js';

function createConfig(additionalOptions) {
  return Object.assign({
    arch: 'x64',
    out: kioskUnzipped,
    targetUrl,
    alwaysOnTop: true,
    disableContextMenu: true,
    disableDevTools: true,
    fullScreen: true,
    hideWindowFrame: true,
    ignoreGpuBlacklist: true,
    inject: [zoomFixFile],
    icon: 'src/favicon.ico',
    insecure: true,
    name: 'xmacroscope-kiosk',
  }, additionalOptions);
}

// Setup platform specific nativefier configurations
const platformConfigs = [
  {platform: 'windows'},
  {platform: 'mac'},
  {platform: 'linux'}
].map(createConfig);

shell.echo('Building Electron Apps');
shell.rm('-rf', kioskUnzipped, kioskZipped);

asyncMap(platformConfigs, nativefier, function(error, results) {
  console.log(error, results);
  if (!error) {
    shell.echo('\n\nPackaging Electron Apps');
    shell.mkdir('-p', kioskZipped);
    shell.pushd(kioskUnzipped);
    shell.ls().forEach(function(dir) {
      shell.exec(`zip -qr "${dir}.zip" "${dir}"`);
    });
    shell.popd();
    shell.exec(`mv ${kioskUnzipped}/*.zip ${kioskZipped}`);
  } else {
    shell.echo('Error Building Electron Apps...');
    process.exit(-1);
  }
});
