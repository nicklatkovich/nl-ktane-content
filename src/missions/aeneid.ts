import { MissionInfo } from "nl-ktane-lib";

export const aeneid: MissionInfo = {
  name: "Aeneid",
  missionPack: "TasThing's Semi-Reasonable Missions",
  time: 75 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    { time: 38 * 60 + 26, log: "file=c057db542a1de49c55c3d59ee7140a777427c22d;bomb=0V5FX0", completer: "Miki2003pl" },
    { time: 37 * 60 + 3, log: "file=ff735de25a1b6e12006d8f7ea2ad2c8623fa6cbb;bomb=3U8ZH4", completer: "LegendWilleh" },
    { time: 26 * 60 + 54, isFirst: true, vid: "https://www.youtube.com/watch?v=ONIsgb6qchA", completer: "Draket" },
    { time: 18 * 60 + 49, log: "file=841daf4cedf230567d9cdec6d221b9b58c9ca020;bomb=5W3GB8", completer: "Dicey" },
    {
      time: 16 * 60,
      log: "file=3238b61fab78c0d4049f8b67f9aeb47cf9d34a1e;bomb=655UT5",
      completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
    },
    { time: 13 * 60 + 58, log: "file=f0750ad99759880e4ee429981bd7a6848af6b25a;bomb=NL1VI8", completer: "tandyCake" },
    { time: 10 * 60 + 57, log: "file=c17f7100f0b05924d8cc8dc755361feba75137ec;bomb=XT9BZ2", completer: "ManiaMate" },
    {
      time: 9 * 60 + 24,
      log: "file=7d1b9af2a62cacc0354a9648ec5609f12f725881;bomb=PQ1CF1",
      completer: "aGood_Usernam3",
    },
    { time: 4 * 60 + 15, log: "file=95ccd4e4ccae9727a5bf13c928b19a63d533efad;bomb=3F0KZ4", completer: "Fish" },
    { time: 1 * 60 + 25, log: "file=a0d9e80cd3e46002f2b5d31ff6539e8d879544ad;bomb=RD5NX3", completer: "Puddle" },
  ],
  modules: [
    "binaryGrid",
    "blinkstopModule",
    "BooleanKeypad",
    "burgerAlarm",
    "caesarCycle",
    "chordProgressions",
    "colorAddition",
    "conditionalButtons",
    "CornersModule",
    "CreationModule",
    "daylightDirections",
    "digitString",
    "dimensionDisruption",
    "doubleArrows",
    "FollowingOrders",
    "fruits",
    "greekLetterGrid",
    "gryphons",
    "lgndHyperactiveNumbers",
    "ingredients",
    "KanjiModule",
    "keypadLock",
    "xtrkeywords",
    "kookyKeypadModule",
    "KritLockpickMaze",
    "loopover",
    "MazeScrambler",
    "memorableButtons",
    "moduleMovements",
    "NumberPad",
    "xtrpasscodes",
    "Playfair",
    "primeEncryption",
    "qwirkle",
    "romanArtModule",
    "sevenDeadlySins",
    "shapeshift",
    "simonSounds",
    "simonStops",
    "spellingBee",
    "topsyTurvy",
    "towerOfHanoi",
    "treasureHunt",
    "Wavetapping",
    "symbolicColouring",
    "ksmHighScore",
    "symbolicPasswordModule",
  ],
};
