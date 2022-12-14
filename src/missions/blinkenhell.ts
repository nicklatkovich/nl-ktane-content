import { MissionInfo } from "nl-ktane-lib";

export const blinkenhell: MissionInfo = {
  name: "Blinkenhell",
  missionPack: "Ryaninator's missions",
  time: 60 * 60,
  strikes: 6,
  widgets: 5,
  completions: [
    {
      time: 15 * 60 + 41,
      vid: "https://www.youtube.com/watch?v=_Cm-SngcafA",
      completers: { defuser: "Zefod", experts: ["Burniel", "Garuda"] },
    },
    { time: 5 * 60 + 38, isFirst: true, vid: "https://www.youtube.com/watch?v=4RK24k7tjS8", completer: "LegendWilleh" },
    {
      time: 3 * 60 + 2,
      vid: "https://www.youtube.com/watch?v=eWjWlzdXyMI",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Megum"] },
    },
  ],
  solvedByTP: true,
  modules: [
    [3, "Simon"],
    "NeedyKnob",
    [3, "Morse"],
    "HexiEvilFMN",
    [3, "flashingLights"],
    [2, "TheBulbModule"],
    [3, "SimonV2"],
    "coffeebucks",
    [3, "ColourFlash"],
    [3, "ColorMorseModule"],
    "ColoredSquaresModule",
    [2, "doubleColor"],
    "lasers",
    "sun",
    "moon",
    [2, "MorseV2"],
    "MotionSense",
    [2, "plungerButton"],
    [3, "SimonScreamsModule"],
    [2, "SimonSendsModule"],
    [3, "simonsStar"],
    "SouvenirModule",
    "UncoloredSquaresModule",
    "reverseMorse",
    [2, "MorseAMaze"],
  ],
};
