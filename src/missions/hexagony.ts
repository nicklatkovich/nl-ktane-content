import { MissionInfo } from "nl-ktane-lib";

export const hexagony: MissionInfo = {
  name: "Hexagony",
  missionPack: "Inside of a Cloudburst",
  author: "TasThing",
  time: 75 * 60,
  strikes: 4,
  widgets: 5,
  completions: [
    {
      time: 13 * 60 + 54,
      isFirst: true,
      log: "file=34a8c0e331436329c986d986f0261addb72f8896;bomb=DG8AH4",
      completer: "Dicey",
    },
  ],
  modules: [
    "TheTwinModule",
    [2, "charms"],
    [2, "coloredHexabuttons"],
    [2, "coloredHexabuttons2"],
    [2, "hexabutton"],
    [2, "colorHexagons"],
    [2, "polygons"],
    [2, "blockbusters"],
    [2, "buttonSequencesModule"],
    [2, "FollowTheLeaderModule"],
    [2, "GridlockModule"],
    [2, "HexamazeModule"],
    [2, "hexiomModule"],
    [2, "hexOrbits"],
    [2, "MayhemModule"],
    [2, "regretbFiltering"],
    [2, "regrettablerelay"],
    [2, "RegularHexpressions"],
    [2, "RSACipher"],
    [2, "triamonds"],
    [2, "tetriamonds"],
    [2, "SilencedSimon"],
    [2, "SpellingBuzzed"],
    [2, "solitaireCipher"],
  ],
};
