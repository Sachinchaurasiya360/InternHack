import type { TsSection, TsLesson } from "./types";
import { tsSections } from "./sections";

import basicsData from "./lessons/ts-basics.json";
import annotationsData from "./lessons/type-annotations.json";
import functionsData from "./lessons/functions-and-generics.json";
import interfacesData from "./lessons/interfaces-and-type-aliases.json";
import classesData from "./lessons/classes-and-oop.json";
import advancedData from "./lessons/advanced-types.json";
import guardsData from "./lessons/type-guards-and-narrowing.json";
import utilityData from "./lessons/utility-types.json";
import modulesData from "./lessons/modules-and-declarations.json";
import reactData from "./lessons/ts-with-react.json";
import configData from "./lessons/configuration-and-tooling.json";
import interviewData from "./lessons/ts-interview-essentials.json";

export const sections: TsSection[] = tsSections;

export const lessons: TsLesson[] = [
  ...(basicsData as TsLesson[]),
  ...(annotationsData as TsLesson[]),
  ...(functionsData as TsLesson[]),
  ...(interfacesData as TsLesson[]),
  ...(classesData as TsLesson[]),
  ...(advancedData as TsLesson[]),
  ...(guardsData as TsLesson[]),
  ...(utilityData as TsLesson[]),
  ...(modulesData as TsLesson[]),
  ...(reactData as TsLesson[]),
  ...(configData as TsLesson[]),
  ...(interviewData as TsLesson[]),
];
