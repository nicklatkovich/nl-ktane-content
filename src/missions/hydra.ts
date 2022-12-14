import { MissionInfo } from "nl-ktane-lib";

export const hydra: MissionInfo = {
  name: "Hydra",
  missionPack: "The Hydra",
  time: 117 * 60,
  strikes: 7,
  widgets: 7,
  completions: [
    { time: 37 * 60 + 3, log: "file=ec2bb0c2117e7ddcd9f5aee71295f711453f89b0;bomb=3H8QL2", completer: "Megum" },
    { time: 28 * 60 + 57, log: "file=21d6d9dfcb891ee4dd19ec33e381b9d86c85aedf;bomb=0V4BA0", completer: "Pokemine" },
    { time: 28 * 60 + 15, log: "file=39f445c1cd6860b2fb87cb40c608afa043ee4459;bomb=ZL3TH9", completer: "LegendWilleh" },
    {
      time: 19 * 60 + 45,
      log: "file=b0530c50e3699e2f6708f2e5d5418c3dc96221b6;bomb=W62UQ5",
      completers: { defuser: "Wheaty", experts: ["Copperkettle", "MageMage"] },
    },
    { time: 18 * 60 + 31, log: "file=98a1b6bd93b2c7dd7579c6b7e3fb03831f390633;bomb=K34MX1", completer: "Wheaty" },
    { time: 12 * 60 + 56, log: "file=cf433d0949decdc42182cdb33fdbae9a90a7b50e;bomb=1Z2DG0", completer: "Garuda" },
    { time: 10 * 60 + 48, log: "file=4c93affc11e73c3d55d124afb99605e05d0a17e3;bomb=TP0ZC6", completer: "SillyPuppy" },
    { time: 10 * 60 + 39, vid: "https://www.youtube.com/watch?v=UAAiretykFs", completer: "Vincology" },
    {
      time: 10 * 60 + 10,
      vid: "https://www.youtube.com/watch?v=aLOH3VQ_0Yg",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    { time: 10 * 60 + 3, log: "file=dc97749a81637bf9ebea61fd539a6939b1cd87b3;bomb=RA1PQ5", completer: "Whalien" },
    { time: 9 * 60 + 53, vid: "https://www.youtube.com/watch?v=pI4EvnQTl-o", completer: "Edan" },
    {
      time: 8 * 60 + 10,
      vid: "https://www.youtube.com/watch?v=A_kgSddSIcY&t=9s",
      completers: { defuser: "Želvík", experts: ["Asmir", "DieBestenRutschen"] },
    },
    {
      time: 5 * 60 + 25,
      vid: "https://www.youtube.com/watch?v=wOKaMAnCU58",
      completers: { defuser: "Deaf", experts: ["Blananas", "Fish"] },
    },
    { time: 4 * 60 + 36, log: "file=506c4d0349ef08aa7d01210857f226345ceaf3df;bomb=Z31HE5", completer: "Puddle" },
    { time: 4 * 60 + 27, log: "file=5f0c9319d76436b2297dac89aae4fc609ea433a0;bomb=IW3XT4", completer: "Burniel" },
    {
      time: 4 * 60,
      scr: "https://cdn.discordapp.com/attachments/306830460443426816/498124614518702080/Screenshot_42.png",
      completer: "Draket",
    },
    { time: 3 * 60 + 36, log: "file=8a1c21df5eae88005d32c65bbcf33c6a9c2e30b1;bomb=CA0JE2", completer: "Danumbah" },
    { time: 3 * 60 + 30, log: "file=c74380acb2d67a1cefbf88f569e6a6b008f5360a;bomb=1F2TF7", completer: "Ugh_Sunlight" },
    { time: 2 * 60 + 32, log: "file=a328c1070df0534eab64819035d93bb373a29365;bomb=XA2KB5", completer: "ManiaMate" },
    { time: 2 * 60 + 17, vid: "https://www.youtube.com/watch?v=UeLRgtDjuAc", completer: "Crazycaleb" },
    { time: 2 * 60 + 12, vid: "https://www.youtube.com/watch?v=YM2gYOHkl9o", completer: "Asew" },
    {
      time: 2 * 60 + 3,
      vid: "https://www.youtube.com/watch?v=tS3_v-sfzrQ",
      completers: { defuser: "Espik", experts: ["Yabbaguy", "Zefod"] },
    },
    { time: 1 * 60 + 51, vid: "https://www.twitch.tv/videos/1023156182", completer: "VFlyer" },
    {
      time: 1 * 60 + 33,
      vid: "https://www.youtube.com/watch?v=aabE4JuOAuw",
      completers: { defuser: "Bianca", experts: ["Benjamin"] },
    },
    { time: 41, vid: "https://www.youtube.com/watch?v=TVduK96Lt24&feature=youtu.be", completer: "t-chen" },
    {
      time: 12,
      isFirst: true,
      scr: "https://cdn.discordapp.com/attachments/306830460443426816/497591984391979018/hydra.jpg",
      completer: "Nomoreeromon",
    },
  ],
  solvedByTP: true,
  modules: [
    [7, "TurnTheKey"],
    [
      10,
      "ChessModule",
      "CaesarCipherModule",
      "TheBulbModule",
      "spwizAdventureGame",
      "CrazyTalk",
      "identityParade",
      "Logic",
      "MorseWar",
      "Playfair",
      "resistors",
      "SimonScreamsModule",
      "switchModule",
      "TextField",
      "WirePlacementModule",
      "XRayModule",
    ],
    [
      10,
      "OneHundredAndOneDalmatiansModule",
      "ButtonV2",
      "SkewedSlotsModule",
      "SimonV2",
      "Sink",
      "KeypadV2",
      "NumberPad",
      "NonogramModule",
      "Microcontroller",
      "Mastermind Simple",
      "MarbleTumbleModule",
      "Listening",
    ],
    [
      10,
      "LetterKeys",
      "LightCycleModule",
      "iceCreamModule",
      "HexamazeModule",
      "TheGamepadModule",
      "FriendshipModule",
      "fastMath",
      "Emoji Math",
      "DoubleOhModule",
      "doubleColor",
    ],
    [
      20,
      "CryptModule",
      "CoordinatesModule",
      "CreationModule",
      "complicatedButtonsModule",
      "graphModule",
      "cooking",
      "ColoredSwitchesModule",
      "ColourFlash",
      "ChordQualities",
      "britishSlang",
      "BlackHoleModule",
      "BinaryLeds",
      "BattleshipModule",
      "benedictCumberbatch",
      "alphabet",
      "spwiz3DMaze",
      "MazeV2",
      "MysticSquareModule",
      "londonUnderground",
      "Laundry",
    ],
    [
      10,
      "3dTunnels",
      "AdjacentLettersModule",
      "DrDoctorModule",
      "EnglishTest",
      "ExtendedPassword",
      "iPhone",
      "jukebox",
      "mashematics",
      "ModuleAgainstHumanity",
      "neutralization",
      "monsplodeFight",
      "monsplodeCards",
      "sonic",
      "SetModule",
      "shapeshift",
    ],
    [
      5,
      "spwizPerspectivePegs",
      "PerplexingWiresModule",
      "PianoKeys",
      "PointOfOrderModule",
      "maintenance",
      "lasers",
      "jackOLantern",
      "reverseMorse",
      "Color Decoding",
      "boolMaze",
      "buttonSequencesModule",
    ],
    [5, "Poker", "PressX", "pieModule", "murder", "ledGrid", "USA", "SillySlots", "tWords", "TheDigitModule", "valves"],
    [
      10,
      "MouseInTheMaze",
      "mortalKombat",
      "radiator",
      "Probing",
      "RockPaperScissorsLizardSpockModule",
      "RubiksCubeModule",
      "SeaShells",
      "Semaphore",
      "YahtzeeModule",
      "ZooModule",
      "PasswordV2",
      "OrientationCube",
    ],
    [
      10,
      "wire",
      "webDesign",
      "TwoBits",
      "ColoredSquaresModule",
      "horribleMemory",
      "UncoloredSquaresModule",
      "TicTacToeModule",
      "ThirdBase",
      "symbolicCoordinates",
      "Tangrams",
      "poetry",
      "modernCipher",
    ],
  ],
};
