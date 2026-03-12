import type { ReactSection, ReactLesson } from "./types";
import { reactSections } from "./sections";

import jsxData from "./lessons/jsx-and-components.json";
import propsData from "./lessons/props-and-state.json";
import eventsData from "./lessons/event-handling.json";
import conditionalData from "./lessons/conditional-rendering-and-lists.json";
import coreHooksData from "./lessons/core-hooks.json";
import advancedHooksData from "./lessons/advanced-hooks.json";
import formsData from "./lessons/forms-and-controlled-components.json";
import routerData from "./lessons/react-router.json";
import stateData from "./lessons/state-management.json";
import fetchingData from "./lessons/data-fetching.json";
import perfData from "./lessons/performance-optimization.json";
import interviewData from "./lessons/react-interview-essentials.json";

export const sections: ReactSection[] = reactSections;

export const lessons: ReactLesson[] = [
  ...(jsxData as ReactLesson[]),
  ...(propsData as ReactLesson[]),
  ...(eventsData as ReactLesson[]),
  ...(conditionalData as ReactLesson[]),
  ...(coreHooksData as ReactLesson[]),
  ...(advancedHooksData as ReactLesson[]),
  ...(formsData as ReactLesson[]),
  ...(routerData as ReactLesson[]),
  ...(stateData as ReactLesson[]),
  ...(fetchingData as ReactLesson[]),
  ...(perfData as ReactLesson[]),
  ...(interviewData as ReactLesson[]),
];
