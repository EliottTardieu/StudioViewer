/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCQNEhSyFDkaD9S59BK22B-AegY0iF2-pw",
    authDomain: "studioviewer-101.firebaseapp.com",
    projectId: "studioviewer-101",
    storageBucket: "studioviewer-101.appspot.com",
    messagingSenderId: "1042341128150",
    appId: "1:1042341128150:web:6daad712691c462a57e677",
    measurementId: "G-7B682L42BY",
  },
  footer: {
    variable: 'Sabeline Salze',
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
  header: {
    variable: 'Sabeline Salze',
  },
};
