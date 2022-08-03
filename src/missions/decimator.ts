import { MissionInfo } from "nl-ktane-lib";

export const decimator: MissionInfo = {
  name: "Decimator",
  missionPack: "Thicc Bombs",
  time: 25 * 60,
  strikes: 3,
  widgets: 5,
  completions: [
    { time: 7 * 60 + 15, log: "file=7f66af6e4acd3218ac9fff358d1abb82dbbf1578;bomb=F20BC1", completer: "LegendWilleh" },
    {
      time: 6 * 60 + 56,
      isFirst: true,
      log: "file=95698bf4557d7a99e85e680d7ab58428d277dcae;bomb=JE3VB6",
      completer: "aGood_Usernam3",
    },
    {
      time: 2 * 60 + 30,
      log: "file=85adc4333f243b13f7050b048c796d107b0bc929",
      completers: { defuser: "Orinami", experts: ["Lily", "Sierra"] },
    },
  ],
  modules: [
    [3, "Netherite"],
    [3, "salts"],
    [3, "impostor"],
    [3, "TDSDossierModifier"],
    [3, "TDSAmogus"],
    [3, "ashHoldOn"],
    [3, "valuedKeysModule"],
    [3, "standardButtonMasher"],
    [3, "pressTheShape"],
    [3, "metamem"],
    [3, "ColoredButtons"],
    [3, "colorCycleButton"],
    [3, "GSTellMeWhen"],
    [3, "TheCalculator"],
    [3, "buttonOrder"],
    [3, "JustNumbersModule"],
    [3, "strikeSolve"],
    [3, "pwGenerator"],
    [3, "xtrpasscodes"],
    [3, "coloredMaze"],
    [3, "treasureHunt"],
    [3, "modulusManipulation"],
    [3, "sevenWires"],
    [3, "leftandRight"],
    [3, "Painting"],
    [3, "SouvenirModule"],
    "ubermodule",
  ],
};
