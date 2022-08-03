import { MissionInfo } from "nl-ktane-lib";

export const twitch_triumphs: MissionInfo = {
  name: "Twitch Triumphs",
  missionPack: "Twitch Explodes",
  time: 120 * 60,
  strikes: 7,
  widgets: 5,
  completions: [
    {
      time: 45 * 60 + 53,
      vid: "https://www.youtube.com/watch?v=bcLjSGCdKfQ",
      completers: { defuser: "Zaakeil", experts: ["KittyAshy", "Ugh_Sunlight"] },
    },
    {
      time: 37 * 60 + 3,
      vid: "https://www.youtube.com/watch?v=dbV8PHZlrrY",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel"] },
    },
    { time: 28 * 60 + 45, log: "file=4219b2eb6983823ef988e2528aa47625066f2cc3;bomb=FM5IG6", completer: "LegendWilleh" },
    { time: 2 * 60 + 30, log: "file=34754da31c2d115a3a3d2dec3fba29a0e266d4ae;bomb=4Z4KI6", completer: "Asew" },
    { time: 1 * 60 + 59, vid: "https://www.youtube.com/watch?v=_Xc7Ro4P1tA", completer: "Diffuse" },
    {
      time: 2,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=GOuyqZ0BaKA",
      completers: { defuser: "Deaf", experts: ["Cookiepocalypse", "Garuda"] },
    },
  ],
  modules: [
    "forgetEnigma",
    "HexiEvilFMN",
    "forgetThemAll",
    "simonsStages",
    "ShoddyChessModule",
    "spwizAdventureGame",
    "accumulation",
    "AnagramsModule",
    "BattleshipModule",
    "BlackHoleModule",
    "BlindAlleyModule",
    "CaesarCipherModule",
    "calendar",
    "CheapCheckoutModule",
    "theCodeModule",
    "coloredMaze",
    "combinationLock",
    "complicatedButtonsModule",
    "KritConnectionDev",
    "DoubleOhModule",
    "FlagsModule",
    "HexamazeModule",
    "hunting",
    "iPhone",
    "ledGrid",
    "Mastermind Simple",
    "MinesweeperModule",
    "MysticSquareModule",
    "NumberPad",
    "OnlyConnectModule",
    "plungerButton",
    "radiator",
    "resistors",
    "RubiksCubeModule",
    "PasswordV2",
    "shapeshift",
    "SillySlots",
    "SimonScreamsModule",
    "SkewedSlotsModule",
    "ButtonV2",
    "BigSwitch",
    "TextField",
    "keypadCombinations",
    "LEDEnc",
    "Logic",
    "londonUnderground",
    "maintenance",
  ],
};
