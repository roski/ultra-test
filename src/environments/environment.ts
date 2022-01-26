// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  giphyApiUrl: 'https://api.giphy.com/v1',
  // This API key need to be moved to runtime env variables
  // But currently for demo purpose I left it there.
  // And also if we will move it to runtime env variables it still will be presented during the request
  giphyApiKey: 'wzTcqY51F7bG4YAAbZtRMuiBEOsbcl4Q'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
