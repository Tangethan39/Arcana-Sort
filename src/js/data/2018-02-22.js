dataSetVersion = "2022-02-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Arcana Heart 1", key: "AH1" },
      { name: "Arcana Heart 2", key: "AH2" },
      { name: "Arcana Heart 3", key: "AH3" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Heart Aino",
    img: "LX1zzuo.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3'],
    },
  },
  {
    name: "Saki Tsuzura",
    img: "WGSbi7Q.png",
    opts: {
      series: ['AH1', 'AH2','AH3'],
    },
  },
  {
   //My Girl
    name: "Kamui Tokinomiya",
    img: "wAW2lzg.png",
    opts: {
      series: ['AH1', 'AH2','AH3']
   },
  },
  {
    //Wafu
    name: "Konoha",
    img: "B72aFWc.png",
    opts: {
      series: ['AH1', 'AH2','AH3']
    },
  },
  {
    name: "Maori Kasuga",
    img: "zt1mVtg.png",
    opts: {
      series: ['AH1', 'AH2','AH3'],
    },
  },
  {
    name: "Kira Daidouji",
    img: "AfCSkJQ.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3'],
   },
  },
  {
    name: "Lilica Felchenerow",
    img: "B4fYHyZ.png",
    opts: {
      series: ['AH1', 'AH2','AH3'],
   },
  },
  {
    name: "Mei-Fang",
    img: "INLogiC.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3'],
   },
  },
  {
    name: "Yoriko",
    img: "NJhQl2F.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3'],
   },
  },
  {
    name: "Fiona Mayfield",
    img: "727o3u3.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3'],
   },
  },
  {
    name: "Lieselotte Achenbach",
    img: "whfmUmZ.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3'],
   },
  },
  {
    name: "Akane Inuwaka",
    img: "PmD6Ius.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Nazuna Inuwaka",
    img: "Ox5my37.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Petra Johanna Lagerkvist",
    img: "NYKyOr5.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Zenia Valov",
    img: "zSHzA7q.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Clarice di Lanza",
    img: "nGcQelc.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Elsa La Conti",
    img: "ngZFcxe.png",
    opts: {
      series: ['AH2', 'AH2'],
   },
  },
  {
    name: "Catherine Kyoubashi",
    img: "wSpmRq9.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Dorothy Albright",
    img: "hAYIyoy.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Angelia Avallone",
    img: "0OgSzOe.png",
    opts: {
      series: ['AH2', 'AH3'],
   },
  },
  {
    name: "Weiss",
    img: "pDFix0Y.png",
    opts: {
      series: ['AH3'],
   },
  },
  {
    name: "Eko",
    img: "Hn0oO9m.png",
    opts: {
      series: ['AH3'],
   },
  },
  {
    name: "Scharlachrot",
    img: "qbLr9KO.png",
    opts: {
      series: ['AH3'],
   },
  },
  {
    name: "Minori Amanohara",
    img: "ShlkH5S.png",
    opts: {
      series: ['AH3'],
   },
  },
  {
    name: "Pistrix",
    img: "AfPEQOU.png",
    opts: {
      series: ['AH3'],
   },
  },
  {
    name: "Dark Heart",
    img: "siNRvov.png",
    opts: {
      series: ['AH3'],
   },
  },
];
