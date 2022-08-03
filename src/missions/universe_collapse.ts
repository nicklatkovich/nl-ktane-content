import { MissionInfo } from "nl-ktane-lib";

export const universe_collapse: MissionInfo = {
  name: "Universe Collapse",
  missionPack: "SPB Challenge Bombs",
  time: 120 * 60,
  strikes: 10,
  widgets: 5,
  completions: [
    { time: 38 * 60 + 53, vid: "https://www.youtube.com/watch?v=jRAaCjxI_U8", completer: "LegendWilleh" },
    {
      time: 30 * 60 + 36,
      log: "file=6e2d50e4eaee0e3e67ef15f48aabed727f57832d;bomb=4P7EC6",
      completers: { defuser: "Zefod", experts: ["Burniel", "Edan"] },
    },
    { time: 27 * 60 + 41, vid: "https://www.youtube.com/watch?v=uru_erLzgoc", completer: "Dicey" },
    { time: 19, isFirst: true, vid: "https://www.youtube.com/watch?v=FA5Q67ee5r0", completer: "Lone" },
  ],
  modules: [
    [5, "BlackHoleModule"],
    "kugelblitz",
    "sync125_3",
    "mislocation",
    "echolocation",
    "lasers",
    "CosmicModule",
    "CreationModule",
    "spwizAstrology",
    "sun",
    "moon",
    "lightspeed",
    "periodicTable",
    "lgndZoni",
    "DateFinder",
    "neutrinos",
    "stateOfAggregation",
    "dimensionDisruption",
    "exoplanets",
    "stars",
    "powModule",
    "greatVoid",
    "xelDcrypt",
    "xelDcode",
    "xelDcipher",
    "lgndLombaxCubes",
    "TheBioscanner",
    "AlienModule",
    "mysticmaze",
    "planets",
    "nomai",
    "cellLab",
    "cruelStars",
    "constellations",
    "neutralization",
    "symbolicCoordinates",
    "XRayModule",
    "TheHypercubeModule",
    "simonsStar",
    "lgndGadgetronVendor",
    "antichamber",
    "primeEncryption",
    "MazeShifting",
    "stoichiometryModule",
  ],
};
