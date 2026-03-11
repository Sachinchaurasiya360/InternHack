import type { JsSection, JsLesson } from "./types";
import { jsSections } from "./sections";

import basicsData from "./lessons/basics.json";
import functionsData from "./lessons/functions-deep-dive.json";
import arraysObjectsData from "./lessons/arrays-and-objects.json";
import scopeData from "./lessons/scope-and-execution.json";
import oopData from "./lessons/oop.json";
import asyncData from "./lessons/async-javascript.json";
import errorData from "./lessons/error-handling.json";
import es6Data from "./lessons/es6-plus.json";
import collectionsData from "./lessons/collections.json";
import advancedData from "./lessons/advanced-concepts.json";
import domData from "./lessons/dom-and-browser.json";
import interviewData from "./lessons/interview-essentials.json";

export const sections: JsSection[] = jsSections;

export const lessons: JsLesson[] = [
  ...(basicsData as JsLesson[]),
  ...(functionsData as JsLesson[]),
  ...(arraysObjectsData as JsLesson[]),
  ...(scopeData as JsLesson[]),
  ...(oopData as JsLesson[]),
  ...(asyncData as JsLesson[]),
  ...(errorData as JsLesson[]),
  ...(es6Data as JsLesson[]),
  ...(collectionsData as JsLesson[]),
  ...(advancedData as JsLesson[]),
  ...(domData as JsLesson[]),
  ...(interviewData as JsLesson[]),
];
