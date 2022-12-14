import { MissionInfo } from "nl-ktane-lib";

export const impostorous: MissionInfo = {
  name: "Impostorous",
  missionPack: "Ulv's Bombs",
  time: 65 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    {
      time: 19 * 60 + 27,
      vid: "https://www.youtube.com/watch?v=0DBA6cdW8A0",
      completers: { defuser: "Zefod", experts: ["Deaf", "Draket"] },
    },
    { time: 19 * 60 + 10, log: "file=8f7828ea28168783a10bd3d31697047807a39471;bomb=HC6PS5", completer: "LegendWilleh" },
    { time: 16 * 60 + 26, log: "file=3ff561da1b0c5f72411daaaa8342f5a3b344f45a;bomb=6S9ZJ9", completer: "Arceus" },
    { time: 2 * 60 + 27, log: "file=c35dab55384618e4773c71f4fdfdb3d16e76dc37;bomb=E31VQ9", completer: "Diffuse" },
    { time: 2 * 60 + 20, isFirst: true, vid: "https://www.youtube.com/watch?v=yaCzP4XGo8U", completer: "Asew" },
    { time: 1 * 60 + 39, log: "file=526ae587f318b0fae9ffd916d9a4954706882fe6;bomb=MU0QW5", completer: "Crazycaleb" },
    { time: 6, log: "file=2985d0abc8b1f8becc97d7c1a8b2794d3a543a55;bomb=A94MU2", completer: "Xorote" },
  ],
  modules: [
    "AnagramsModule",
    "BitmapsModule",
    "ColourFlash",
    "notColourFlash",
    "PianoKeys",
    "CruelPianoKeys",
    "FestivePianoKeys",
    "LetterKeys",
    "Semaphore",
    "switchModule",
    "WordScrambleModule",
    "notMurder",
    "notMorsematics",
    "notCrazyTalk",
    "notCoordinates",
    "notConnectionCheck",
    [10, "impostor"],
    "graphModule",
    "MorseV2",
    "CoordinatesModule",
    "CrazyTalk",
    [2, "Wires", "NotWiresword"],
    [2, "Simon", "NotSimaze"],
    "NotWhosOnFirst",
    [2, "WireSequence", "NotWireSequence"],
    [2, "Morse", "NotMorseCode"],
    [2, "Memory", "NotMemory"],
    [2, "Maze", "NotMaze"],
    [2, "BigButton", "NotButton"],
    [2, "Keypad", "NotKeypad"],
    [2, "Venn", "NotComplicatedWires"],
    "TurnTheKeyAdvanced",
    "NotTimerModule",
    "murder",
    [3, "MistakeModule", "BrailleModule", "polygons", "BlindAlleyModule", "punctuationMarks", "tapCode"],
    "TDSAmogus",
  ],
};
