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
import fastapiData from "./lessons/fastapi-interview.json";
import dockerData from "./lessons/docker-containers.json";
import k8sData from "./lessons/kubernetes-orchestration.json";
import awsData from "./lessons/aws-cloud-fundamentals.json";
import redisData from "./lessons/redis-caching.json";
import securityData from "./lessons/web-security.json";
import dbDesignData from "./lessons/database-design.json";
import ossData from "./lessons/open-source-interview.json";

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
  ...(fastapiData as InterviewQuestion[]),
  ...(dockerData as InterviewQuestion[]),
  ...(k8sData as InterviewQuestion[]),
  ...(awsData as InterviewQuestion[]),
  ...(redisData as InterviewQuestion[]),
  ...(securityData as InterviewQuestion[]),
  ...(dbDesignData as InterviewQuestion[]),
  ...(ossData as InterviewQuestion[]),
];
