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
  phone_number: '0601020304',
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
  studios: {
    220: {
      cost: '630 euros les trois semaines / 500.0 euros du 28 Octobre au 18 Novembre et du 18 Novembre au 9 Décembre',
      payments: 'Chèque, virement, espèces, chèques vacances, carte bancaire',
      title: 'Au deuxième étage avec deux ascenseurs dans une résidence de style Art Déco.',
      content: '   Studio  de 20 m² classé en 2 étoiles,pour une personne, classé  trois étoiles, décoration soignée, fenêtres double vitrage, électricité refaite aux normes.\n' +
        '\n' +
        '   Situé en centre ville, face au Parc Thermal à proximité des commerces, du Théâtre, du Casino à 100 m du nouveau centre thermal AÏGA.',
      vehicle: 'Local à vélos sécurisé.',
      WC: 'douche, sèche serviettes',
    },
    3: {
      cost: '630 euros les trois semaines',
      payments: 'Chèque, virement, espèces, chèques vacances, carte bancaire',
      title: 'Au troisième étage avec ascenseur dans une résidence moderne.',
      content: '   Logement de 25 m² classé en deux étoiles, décoration soignée, fenêtre double vitrage, électricité refaite aux normes.\n' +
        '\n' +
        '   Situé en centre ville, à proximité des commerces, du Théâtre, du Casino à 700 m du nouveau centre thermal AÏGA.',
      vehicle: 'Parking privé pour le logement.',
      WC: 'douche 90x90 , sèche serviettes',
    },
  },
};
