import type { PythonSection, PythonLesson } from "./types";
import { pythonSections } from "./sections";

import fundamentalsData from "./lessons/python-fundamentals.json";
import controlFlowData from "./lessons/control-flow.json";
import stringsData from "./lessons/strings-and-string-methods.json";
import listsData from "./lessons/lists-and-tuples.json";
import dictsData from "./lessons/dictionaries-and-sets.json";
import functionsData from "./lessons/functions.json";
import oopData from "./lessons/oop.json";
import fileHandlingData from "./lessons/file-handling-and-modules.json";
import errorHandlingData from "./lessons/error-handling.json";
import advancedData from "./lessons/advanced-python.json";
import dsaData from "./lessons/data-structures-algorithms.json";
import interviewData from "./lessons/python-interview-essentials.json";

export const sections: PythonSection[] = pythonSections;

export const lessons: PythonLesson[] = [
  ...(fundamentalsData as PythonLesson[]),
  ...(controlFlowData as PythonLesson[]),
  ...(stringsData as PythonLesson[]),
  ...(listsData as PythonLesson[]),
  ...(dictsData as PythonLesson[]),
  ...(functionsData as PythonLesson[]),
  ...(oopData as PythonLesson[]),
  ...(fileHandlingData as PythonLesson[]),
  ...(errorHandlingData as PythonLesson[]),
  ...(advancedData as PythonLesson[]),
  ...(dsaData as PythonLesson[]),
  ...(interviewData as PythonLesson[]),
];
