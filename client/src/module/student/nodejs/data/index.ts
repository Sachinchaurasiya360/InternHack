import type { NodeSection, NodeLesson } from "./types";
import { nodeSections } from "./sections";

import fundamentalsData from "./lessons/node-fundamentals.json";
import modulesData from "./lessons/modules-and-packages.json";
import filesystemData from "./lessons/file-system.json";
import eventsData from "./lessons/events-and-streams.json";
import httpData from "./lessons/http-and-networking.json";
import expressFundamentalsData from "./lessons/express-fundamentals.json";
import routingData from "./lessons/routing-and-middleware.json";
import requestResponseData from "./lessons/request-and-response.json";
import authData from "./lessons/authentication.json";
import databasesData from "./lessons/databases.json";
import errorHandlingData from "./lessons/error-handling-and-debugging.json";
import deploymentData from "./lessons/deployment-and-interview.json";

export const sections: NodeSection[] = nodeSections;

export const lessons: NodeLesson[] = [
  ...(fundamentalsData as NodeLesson[]),
  ...(modulesData as NodeLesson[]),
  ...(filesystemData as NodeLesson[]),
  ...(eventsData as NodeLesson[]),
  ...(httpData as NodeLesson[]),
  ...(expressFundamentalsData as NodeLesson[]),
  ...(routingData as NodeLesson[]),
  ...(requestResponseData as NodeLesson[]),
  ...(authData as NodeLesson[]),
  ...(databasesData as NodeLesson[]),
  ...(errorHandlingData as NodeLesson[]),
  ...(deploymentData as NodeLesson[]),
];
