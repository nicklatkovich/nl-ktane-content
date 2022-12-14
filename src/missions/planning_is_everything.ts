import { MissionInfo } from "nl-ktane-lib";

export const planning_is_everything: MissionInfo = {
  name: "Planning Is Everything",
  missionPack: "Burniel's Bombs",
  time: 80 * 60,
  strikes: 6,
  widgets: 5,
  completions: [
    {
      time: 18 * 60 + 24,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=i5VK_F2MFVc",
      completers: { defuser: "Deaf", experts: ["Fish", "Zefod"] },
    },
    { time: 13 * 60 + 51, log: "file=3b85606f347b943508824d47dd932b6211a13f21;bomb=UR5UC2", completer: "LegendWilleh" },
    {
      time: 10 * 60 + 8,
      vid: "https://www.youtube.com/watch?v=aaq1_qntPRQ",
      completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
    },
  ],
  modules: [
    "forgetThemAll",
    "BigCircle",
    [3, "BlackHoleModule"],
    "BlindMaze",
    "burglarAlarm",
    "calendar",
    "challengeAndContact",
    "CheapCheckoutModule",
    "TheClockModule",
    "colourcode",
    "combinationLock",
    "CruelPianoKeys",
    "DrDoctorModule",
    "DividedSquaresModule",
    "fizzBuzzModule",
    "freeParking",
    "GameOfLifeCruel",
    "hexabutton",
    "iceCreamModule",
    "iPhone",
    "Laundry",
    "modernCipher",
    "theNumber",
    "numberCipher",
    "numberNimbleness",
    "planets",
    "Playfair",
    "plungerButton",
    "PressX",
    "sevenWires",
    "Simon",
    "simonSimons",
    "SouvenirModule",
    "ButtonV2",
    "stickyNotes",
    "theSwan",
    "taxReturns",
    "GSTellMeWhen",
    "timeKeeper",
    "troll",
    "TurnTheKey",
    "unfairCipher",
    "USA",
    "wastemanagement",
    "WorldsLargestButton",
  ],
};
