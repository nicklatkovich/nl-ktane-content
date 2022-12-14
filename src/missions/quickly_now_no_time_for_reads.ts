import { MissionInfo } from "nl-ktane-lib";

export const quickly_now_no_time_for_reads: MissionInfo = {
  name: "Quickly Now!: No Time For Reads!",
  missionPack: "The Swarm",
  time: 13 * 60,
  strikes: 3,
  widgets: 5,
  completions: [
    {
      time: 2 * 60 + 31,
      vid: "https://www.youtube.com/watch?v=2iI_1DrANJc",
      completers: { defuser: "Dicey", experts: ["aGood_Usernam3", "Garuda", "LegendWilleh"] },
    },
    {
      time: 2 * 60 + 8,
      vid: "https://www.youtube.com/watch?v=5FYVU-OB00o",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel", "Megum"] },
    },
    { time: 2, isFirst: true, log: "file=1e99c054fef00bfe2208750b6a49d62fd5b81685", completer: "LegendWilleh" },
  ],
  modules: [
    "BitOps",
    "BlindAlleyModule",
    "BrailleModule",
    "radiator",
    "BigCircle",
    "cooking",
    [5, "Laundry"],
    "plungerButton",
    "neutralization",
    "PressX",
    "Painting",
    "TextField",
    "Backgrounds",
    "RockPaperScissorsLizardSpockModule",
    "wastemanagement",
    [2, "BlackHoleModule"],
    "PasswordV2",
    "TheDigitModule",
    "coloredMaze",
    "freeParking",
    "CursedDoubleOhModule",
    "shapeshift",
    "RubiksCubeModule",
    "sun",
    "moon",
    [3, "Sink"],
    "resistors",
    "toolmods",
    "SimonV2",
    "BigButton",
    "KeypadV2",
    "Password",
    "britishSlang",
    "alphabet",
    "mashematics",
    "OrientationCube",
    "timezone",
    "visual_impairment",
    "calendar",
    "theCodeModule",
  ],
};
