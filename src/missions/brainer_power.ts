import { MissionInfo } from "nl-ktane-lib";

export const brainer_power: MissionInfo = {
  name: "Brainer Power",
  missionPack: "BlvdBroken's Bombs",
  time: 180 * 60,
  strikes: 3,
  widgets: 5,
  completions: [
    {
      time: 104 * 60 + 53,
      log: "file=63b3946b7c024bf4650848772aaafeed1ab24e1c;bomb=8J5LE9",
      completer: "LegendWilleh",
    },
    { time: 98 * 60 + 59, log: "file=43bb3f5be072af8f97237672f9ab51e89c2cfcd0;bomb=682QN0", completer: "Edan" },
    {
      time: 51 * 60 + 21,
      vid: "https://www.youtube.com/watch?v=P3UFYo9UIC4",
      completers: { defuser: "Grunkle", experts: ["BlvdBroken", "Dicey"] },
    },
    { time: 44 * 60 + 17, log: "file=a5cad23e31b49b3d9ba0770e7364270fd94bec66;bomb=Q10VB3", completer: "Kavinkul" },
    {
      time: 41 * 60 + 50,
      vid: "https://www.youtube.com/watch?v=kX2AS2nADsQ",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    { time: 37 * 60 + 12, log: "file=6c60cf723f8362be0ceabb604fc3367d57e9b4ea;bomb=N44ER3", completer: "Ulv" },
    { time: 33 * 60 + 26, isFirst: true, vid: "https://www.youtube.com/watch?v=H_w0rwXwhA0", completer: "Diffuse" },
  ],
  modules: [
    "mastermindRestrictedCruel",
    "WalkingCubeModule",
    "pawns",
    "squeeze",
    "meteor",
    "perceptron",
    "stupidSlots",
    "InfiniteLoop",
    "anomia",
    "colors_maximization",
    "GSDirectingButtons",
    "mischmodul",
    "VoltorbFlip",
    "GSPathfinder",
    "factoringMaze",
    "1DChess",
    "MssngvWls",
    "transmissionTransposition",
    "diffusion",
    "TheOneTwoThreeGame",
    "nameCodes",
    "CosmicModule",
    "TheArena",
    "SilencedSimon",
    "lyingIndicators",
    "tetriamonds",
    "sevenDeadlySins",
    "mazematics",
    "BrokenGuitarChordsModule",
    "countdown",
    "CryptModule",
    "MysticSquareModule",
    "coprimeChecker",
    "2048",
    "GSMazeIdentification",
    "CodeCracker",
    "malfunctions",
    "GSEightyOne",
    "klaxon",
    "increasingIndices",
    "LEGOModule",
    "Words",
    "WireAssociationModule",
    "factoryMaze",
    "CursedDoubleOhModule",
    "GSEntryNumberFour",
    "coloredHexabuttons",
  ],
};
