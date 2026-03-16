import type { InterviewSection, InterviewQuestion } from "./types";
import { interviewSections } from "./sections";

import jsData from "./lessons/javascript-interview.json";
import reactData from "./lessons/react-interview.json";
import nodeData from "./lessons/nodejs-interview.json";
import tsData from "./lessons/typescript-interview.json";
import pythonData from "./lessons/python-interview.json";
import sqlData from "./lessons/sql-database-interview.json";
import systemDesignData from "./lessons/system-design-interview.json";
import behavioralData from "./lessons/behavioral-interview.json";
import htmlCssData from "./lessons/html-css-interview.json";
import gitDevopsData from "./lessons/git-devops-interview.json";

export const sections: InterviewSection[] = interviewSections;

export const questions: InterviewQuestion[] = [
  ...(jsData as InterviewQuestion[]),
  ...(reactData as InterviewQuestion[]),
  ...(nodeData as InterviewQuestion[]),
  ...(tsData as InterviewQuestion[]),
  ...(pythonData as InterviewQuestion[]),
  ...(sqlData as InterviewQuestion[]),
  ...(systemDesignData as InterviewQuestion[]),
  ...(behavioralData as InterviewQuestion[]),
  ...(htmlCssData as InterviewQuestion[]),
  ...(gitDevopsData as InterviewQuestion[]),
];
