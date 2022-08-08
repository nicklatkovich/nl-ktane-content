import { MissionInfo } from "nl-ktane-lib";

export const praetorian_new_ones: MissionInfo = {
  name: "Praetorian New Ones",
  missionPack: "EliottChallengePack",
  time: 70 * 60,
  strikes: 6,
  widgets: 5,
  completions: [
    { time: 33 * 60 + 8, log: "file=4e91d480b9021cb0c68cdd0299dfc380e82517bc;bomb=7A2NR7", completer: "LegendWilleh" },
    { time: 23 * 60 + 49, log: "file=b04a91022e927f64b42c83cda814da6d9f42b064;bomb=F20TH9", completer: "Dicey" },
    {
      time: 18 * 60 + 11,
      vid: "https://www.youtube.com/watch?v=3C39GaXGxA4&feature=youtu.be&t=123",
      completers: { defuser: "Skyeward", experts: ["Rexkix", "SillyPuppy"] },
    },
    { time: 17 * 60 + 25, log: "file=d889a1bfeec93a68a0aa302588f6849c1ebde13b;bomb=FT6ZZ4", completer: "Asmir" },
    {
      time: 17 * 60 + 20,
      vid: "https://www.youtube.com/watch?v=dMsrKXq7ojI",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    { time: 16 * 60 + 58, log: "file=bceba15b5e92c8c0d47efe46664a603f58863158;bomb=IU2GW5", completer: "Senri" },
    { time: 16 * 60 + 10, log: "file=6e31938575683b871c933565f7ab70fad2010192;bomb=9U7XH5", completer: "Danumbah" },
    { time: 13 * 60 + 28, log: "file=1d412595a9df75e5ac12a8a4118627aaa1e89cce;bomb=C32QZ6", completer: "Pokemine" },
    { time: 13 * 60 + 1, log: "file=a6c8668adcb2be889b0f2b956d9f65f47b8fd9e1;bomb=UB3MJ0", completer: "Zefod" },
    {
      time: 10 * 60 + 1,
      vid: "https://www.youtube.com/watch?v=kdtMVCenbNU",
      completers: { defuser: "Bianca", experts: ["Benjamin"] },
    },
    { time: 10 * 60 + 1, vid: "https://www.youtube.com/watch?v=Nq2NOEHAeKE&feature=youtu.be", completer: "Espik" },
    {
      time: 9 * 60 + 43,
      log: "file=b91f397722094e52d7a0711a0fe74aaedda7c740;bomb=005CD8",
      completers: { defuser: "Želvík", experts: ["Asmir", "Cirax"] },
    },
    { time: 9 * 60, log: "file=04227d7f2a5244f53ecf6dec35cd9a3d3212a431;bomb=M15TC3", completer: "Whalien" },
    {
      time: 8 * 60 + 16,
      vid: "https://www.youtube.com/watch?v=St0plBhdwPQ",
      completers: { defuser: "Deaf", experts: ["Blananas", "Fish"] },
    },
    {
      time: 6 * 60 + 58,
      vid: "https://www.youtube.com/watch?v=HRr2ZsltHG4",
      completers: { defuser: "Burniel", experts: ["Chestnut", "Mateleological"] },
    },
    { time: 5 * 60 + 7, log: "file=309aa565d25ecd6b18ddd7a7378f8d6808e22727;bomb=UF3UQ2", completer: "Benjamin" },
    { time: 5 * 60 + 2, vid: "https://www.youtube.com/watch?v=6mYfqbJyzeI", completer: "Crazycaleb" },
    { time: 4 * 60 + 30, log: "file=d33a124fdf3b8fbe782c41703d2d8a96d53c108f;bomb=RX1ET8", completer: "t-chen" },
    {
      time: 3 * 60 + 55,
      log: "file=d38a3096c26d012304254b5c10e5ea51014e77f4;bomb=9E4AX0",
      completer: "Cookiepocalypse",
    },
    { time: 3 * 60 + 42, log: "file=78c17a3e6147d3953182d19de9ebec22dad44ea5;bomb=794EI0", completer: "ManiaMate" },
    {
      time: 2 * 60 + 39,
      vid: "https://www.youtube.com/watch?v=LzmdkIY8AuQ",
      completers: { defuser: "Wheaty", experts: ["Copperkettle", "MageMage"] },
    },
    { time: 2 * 60 + 15, vid: "https://www.youtube.com/watch?v=hdMbmrdWT60", completer: "Vincology" },
    { time: 1 * 60 + 53, vid: "https://www.youtube.com/watch?v=JGMxF3JaDE4", completer: "Wheaty" },
    { time: 1 * 60 + 10, log: "file=b51a0f0ec4bdf3a93fadb716801673e34e4d285f;bomb=KJ7GD9", completer: "Ugh_Sunlight" },
    { time: 14, log: "file=73625c1bfcd29b6b33cf8c2fffdecd703e84a432;bomb=ZN8NN2", completer: "Megum" },
    { time: 2, log: "file=1bdfbd3ac5367c2f2ec06a0e8bb945a41af47f7b;bomb=JR9SM6", completer: "Garuda" },
    {
      time: 1 * 60 + 10,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=_-_gt-zQquE&feature=youtu.be&t=4041",
      completers: { defuser: "Skyeward", experts: ["Rexkix", "SillyPuppy"] },
    },
  ],
  solvedByTP: true,
  modules: [
    "XRayModule",
    "ColorMorseModule",
    "Mastermind Simple",
    "Mastermind Cruel",
    "GridlockModule",
    "BigCircle",
    "MorseAMaze",
    "ColoredSwitchesModule",
    "PerplexingWiresModule",
    "monsplodeCards",
    "GameOfLifeSimple",
    "GameOfLifeCruel",
    "NonogramModule",
    "SetModule",
    "Painting",
    "Color Generator",
    "SymbolCycleModule",
    "hunting",
    "ExtendedPassword",
    "curriculum",
    "BrailleModule",
    "MafiaModule",
    "FestivePianoKeys",
    "FlagsModule",
    "timezone",
    "PolyhedralMazeModule",
    "symbolicCoordinates",
    "Poker",
    "sonic",
    "poetry",
    "buttonSequencesModule",
    "algebra",
    "visual_impairment",
    "jukebox",
    "identityParade",
    "maintenance",
    "BlindMaze",
    "Backgrounds",
    "mortalKombat",
    "mashematics",
    "FaultyBackgrounds",
    "radiator",
    "modernCipher",
    "ledGrid",
    "Sink",
    "iPhone",
    "theSwan",
    "wastemanagement",
    "HumanResourcesModule",
    "skyrim",
    "CruelPianoKeys",
    "Wires",
    "BigButton",
    "Keypad",
    "Simon",
    "WhosOnFirst",
    "Memory",
    "Morse",
    "Venn",
    "WireSequence",
    "Maze",
    "Password",
  ],
};
