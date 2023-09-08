//*Archivo creado para simular data con la que se trabajara en la home

const allHomes = [
  {
    id: 1,
    foto: [
      "https://lh3.googleusercontent.com/p/AF1QipOslEBxquaXqCZus52JM9MwvO5pwZgrw0FCedvw=s680-w680-h510",
    ],
    nombreDeOng: "Casa Cuna Conchita",
    nombreDeContacto: "Casandra Heaven",
    email: "cheaven0@soup.io",
    telefono: "81 1453 0546",
    ubicacion: "Cholula 1822, Maria Luisa, 64040 Monterrey, N.L.",
  },
  {
    id: 2,
    foto: [
      "https://lh3.googleusercontent.com/p/AF1QipMx0kMHm2DxvYjBM7AS78Jc0Vp6z4-QoVF9YW6N=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOgy1WP0He_HKJUgqEJ3uuuz63F3EQoABkOHExw=s680-w680-h510",
    ],
    nombreDeOng: "El Campito Refugio",
    nombreDeContacto: "Priscilla Julyan",
    email: "pjulyan1@flickr.com",
    telefono: "+542923434289",
    ubicacion:
      "ruta 16 Parc 501, B1842 Monte Grande, Provincia de Buenos Aires, Argentina",
  },
  {
    id: 3,
    foto: [
      "https://lh3.googleusercontent.com/p/AF1QipO0lCJ95l9AMgHMhCSqlQW1KIHHjq3vCs0eSwKa=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMdWk-ndP1OBJRl33vWA2J5XlWa_-q50Eov9tYD=s680-w680-h510",
    ],
    nombreDeOng: "El Orfagato",
    nombreDeContacto: "Gwynne Breckenridge",
    email: "gbreckenridge2@dot.gov",
    telefono: "300 4124303",
    ubicacion: "Cra. 31 #25a 21, Bogotá, Colombia",
  },
  {
    id: 4,
    foto: [
      "https://lh3.googleusercontent.com/p/AF1QipOEoAp6d7GAapAjwFwBdO2KoxRf9tpctFf3Ra06=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMbT1EhtuZsf16x60dvumhlhTScTbWMlsTY39sM=s680-w680-h510",
    ],
    nombreDeOng: "Fundación corazón peludito",
    nombreDeContacto: "Maria Olkowicz",
    email: "molkowicz3@mozilla.com",
    telefono: "311 2378570",
    ubicacion:
      "Cl. 63c #17-29 Casa, Barrios Unidos, Bogotá, Cundinamarca, Colombia",
  },
  {
    id: 5,
    foto: [
      "https://lh5.googleusercontent.com/p/AF1QipNloN0GPz60jkWY24HfRyRRtAVdWbzyKzAGD1wy=w260-h175-n-k-no",
      "https://lh3.googleusercontent.com/p/AF1QipMeK3yYE4jPCFJPv0V2YHFipBq8-Xe_SlZi4Ofq=s680-w680-h510",
    ],
    nombreDeOng: "Ayudacan",
    nombreDeContacto: "Nanete Le Surf",
    email: "nle4@ca.gov",
    telefono: "11 6260-4010",
    ubicacion:
      "Jerónimo Salguero 151,C1177AEA, C1177 AEA, Buenos Aires, Argentina",
  },
  /* {
    id: 6,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Equinix, Inc.",
    nombreDeContacto: "Marti Chstney",
    email: "mchstney5@cbc.ca",
    telefono: "02-316-3147",
    ubicacion: "10th Floor",
  },
  {
    id: 7,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Royal Bancshares of Pennsylvania, Inc.",
    nombreDeContacto: "Cristine Vassar",
    email: "cvassar6@ftc.gov",
    telefono: "46-768-3920",
    ubicacion: "17th Floor",
  },
  {
    id: 8,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Urstadt Biddle Properties Inc.",
    nombreDeContacto: "Jobey Masterson",
    email: "jmasterson7@plala.or.jp",
    telefono: "04-541-9939",
    ubicacion: "Suite 33",
  },
  {
    id: 9,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Novadaq Technologies Inc",
    nombreDeContacto: "Kristien O'Teague",
    email: "koteague8@surveymonkey.com",
    telefono: "43-118-1148",
    ubicacion: "Suite 24",
  },
  {
    id: 10,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Medical Transcription Billing, Corp.",
    nombreDeContacto: "Hedda Garrat",
    email: "hgarrat9@w3.org",
    telefono: "39-766-2631",
    ubicacion: "asdnofipw",
  },
  {
    id: 11,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "ACNB Corporation",
    nombreDeContacto: "Llywellyn Duff",
    email: "lduffa@reference.com",
    telefono: "57-050-7835",
    ubicacion: "La conchinchina",
  },
  {
    id: 12,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "First Trust NASDAQ Global Auto Index Fund",
    nombreDeContacto: "Phillida Drawmer",
    email: "pdrawmerb@dion.ne.jp",
    telefono: "22-312-8382",
    ubicacion: "Room 878",
  },
  {
    id: 13,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Federal Realty Investment Trust",
    nombreDeContacto: "Alice Gourdon",
    email: "agourdonc@domainmarket.com",
    telefono: "56-652-3807",
    ubicacion: "wherever",
  },
  {
    id: 14,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Customers Bancorp, Inc",
    nombreDeContacto: "Zabrina Inseal",
    email: "zinseald@noaa.gov",
    telefono: "69-523-5700",
    ubicacion: "cualquier verga",
  },
  {
    id: 15,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "First BanCorp.",
    nombreDeContacto: "Alisun Cristofano",
    email: "acristofanoe@ibm.com",
    telefono: "29-589-8065",
    ubicacion: "Suite 10",
  },
  {
    id: 16,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Washington Federal, Inc.",
    nombreDeContacto: "Carlie McCreagh",
    email: "cmccreaghf@irs.gov",
    telefono: "85-248-7145",
    ubicacion: "Casa de la Muerte",
  },
  {
    id: 17,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Pimco California Municipal Income Fund II",
    nombreDeContacto: "Dennis Muirhead",
    email: "dmuirheadg@shareasale.com",
    telefono: "45-572-0680",
    ubicacion: "donde el diablo dejo la chancleta",
  },
  {
    id: 18,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "The GDL Fund",
    nombreDeContacto: "Reinhold Banane",
    email: "rbananeh@senate.gov",
    telefono: "76-025-4318",
    ubicacion: "donde se devuelve el viento",
  },
  {
    id: 19,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "Principal Price Setters Index ETF",
    nombreDeContacto: "Erma Goodacre",
    email: "egoodacrei@comcast.net",
    telefono: "43-388-7112",
    ubicacion: "Donde las cosas salen mal",
  },
  {
    id: 20,
    foto: [
      "https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Dog-1124x554.jpg?h=5c78e16c&itok=bNFOdYDI",
    ],
    nombreDeOng: "American Financial Group, Inc.",
    nombreDeContacto: "Querida Tranfield",
    email: "qtranfieldj@sciencedirect.com",
    telefono: "73-287-9748",
    ubicacion: "Po box 71",
  }, */
];

module.exports = allHomes;
