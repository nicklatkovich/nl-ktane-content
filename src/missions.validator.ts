import { MissionInfo } from "nl-ktane-lib";

import * as allMissions from "./all-missions";

export function validateMissions(props: { missions?: { [key: string]: MissionInfo }; findUnsolved?: boolean }): void {
  const missions = props.missions ?? allMissions;
  const findUnsolved = props.findUnsolved ?? false;
  const errors: string[] = [];
  const warnings: string[] = [];
  for (const missionId of Object.keys(missions)) {
    const mission: MissionInfo = missions[missionId];
    const firstSolvesCount = (mission.completions?.filter(c => c.isFirst) || []).length;
    if (firstSolvesCount > 1) errors.push(`"${mission.name}" has more than 1 first solve`);
    else if (mission.completions && firstSolvesCount < 1) warnings.push(`"${mission.name}" has no first solve`);
    if (findUnsolved && !mission.completions) warnings.push(`"${mission.name}" has no solves`);
  }
  if (errors.length > 0) console.error(`ERRORS:\n\t${errors.join("\n\t")}`);
  if (warnings.length > 0) console.warn(`WARNINGS:\n\t${warnings.join("\n\t")}`);
}

if (require.main === module) validateMissions({ findUnsolved: true });
