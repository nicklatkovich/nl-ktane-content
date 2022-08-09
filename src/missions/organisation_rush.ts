import { MissionInfo } from "nl-ktane-lib";

export const organisation_rush: MissionInfo = {
  name: "Organisation Rush",
  missionPack: "ShadowMeow's Unity Challenge Pack",
  time: 43 * 60,
  strikes: 3,
  widgets: 5,
  completions: [
    { time: 18 * 60 + 2, log: "file=da9630e47257b168c5e25f2113fc163d804af97e;bomb=0X6JP4", completer: "LegendWilleh" },
    { time: 12 * 60 + 39, log: "file=3707dc9daf8e3668f98d22cc8f4f0290428c17ff;bomb=BF1GA6", completer: "Puddle" },
    { time: 10 * 60 + 20, log: "file=b939c9f026cba8ecc51f7715f490ba8d99e9b317;bomb=5E5CE0", completer: "Dicey" },
    {
      time: 7 * 60 + 17,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=b89lKpKHeP8&feature=youtu.be",
      completer: "Diffuse",
    },
    {
      time: 5 * 60 + 57,
      log: "file=f87c9f1b6b50e5676b65a4ede34a34b35d5236e3;bomb=W50QL3",
      completer: "Cookiepocalypse",
    },
    { time: 5 * 60 + 57, log: "file=f0c174cc4592a0b97a631bb1a6594f412580a468;bomb=AE7GM9", completer: "Pokemine" },
    {
      time: 4 * 60 + 43,
      log: "file=5cde092087f30b52c3d7479885957f87d68973b0;bomb=978CR7",
      completers: { defuser: "Wheaty", experts: ["Copperkettle", "MageMage"] },
    },
    {
      time: 4 * 60 + 8,
      vid: "https://www.youtube.com/watch?v=eqGKGaOwfSc",
      completers: { defuser: "Benjamin", experts: ["Bianca"] },
    },
    { time: 3 * 60 + 25, log: "file=3a1a04a49c12279cc7a8d17812acadc92d2337ef;bomb=PZ2HI8", completer: "Danumbah" },
    {
      time: 2 * 60 + 40,
      log: "file=f930a8422b7670c2399256f58045cb13d43adb76;bomb=TE4UQ0",
      completers: { defuser: "Wheaty", experts: ["Macanek", "weird"] },
    },
    { time: 36, log: "file=c91bd77ee976502db90892074fe1f031e2c7cd7b;bomb=XZ2KT1", completer: "Burniel" },
    { time: 30, vid: "https://www.youtube.com/watch?v=BnLj_EHfh3M", completer: "Megum" },
    { time: 12, log: "file=16049113fd29a6e45e0c1d879973e0812e2bd01e;bomb=VT8XE9", completer: "Ugh_Sunlight" },
  ],
  modules: [
    "organizationModule",
    "Wires",
    "BigButton",
    "Keypad",
    "Simon",
    "WhosOnFirst",
    "Venn",
    "WireSequence",
    "Maze",
    "Password",
    "SimonV2",
    "spwizAstrology",
    "MorseV2",
    "combinationLock",
    "TwoBits",
    "PianoKeys",
    "CrazyTalk",
    "spwizAdventureGame",
    "instructions",
    "ChessModule",
    "bigegg",
    "BitmapsModule",
    "ColoredSquaresModule",
    "AdjacentLettersModule",
    "KnowYourWay",
    "WordSearchModule",
    "WordScrambleModule",
    "OnlyConnectModule",
    "BigSwitch",
    "TheClockModule",
    "fastMath",
    "iceCreamModule",
    "Mastermind Simple",
    "ColorMorseModule",
    "BigCircle",
    "NandMs",
    "Color Generator",
    "poetry",
    "FlavorText",
    "buttonSequencesModule",
    "BlindMaze",
    "mashematics",
    "Backgrounds",
    "FaultyBackgrounds",
    "coloredMaze",
    "ledGrid",
    "errorCodes",
    "cooking",
    "ColorfulMadness",
    "colorAddition",
    "digitalRoot",
    "theCodeModule",
    "lgndZoni",
    "TheDigitModule",
    "modulo",
    "NumberPad",
    "alphabet",
    "CaesarCipherModule",
    "shapeshift",
    "BlindAlleyModule",
    "TextField",
    "SetModule",
    "jukebox",
    "radiator",
    "SuperlogicModule",
    "switchModule",
    "dominoes",
    "calendar",
    "MazeScrambler",
  ],
};