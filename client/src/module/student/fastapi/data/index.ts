import type { FastApiSection, FastApiLesson } from "./types";
import { fastApiSections } from "./sections";

import introductionData from "./lessons/introduction-to-fastapi.json";
import routingData from "./lessons/routing-and-path-operations.json";
import queryPathData from "./lessons/query-and-path-parameters.json";
import requestBodiesData from "./lessons/request-bodies-and-pydantic.json";
import responseModelsData from "./lessons/response-models-and-status-codes.json";
import dependencyData from "./lessons/dependency-injection.json";
import middlewareData from "./lessons/middleware-and-cors.json";
import authData from "./lessons/authentication-and-security.json";
import databaseData from "./lessons/database-integration.json";
import testingData from "./lessons/testing-and-deployment.json";

export const sections: FastApiSection[] = fastApiSections;

export const lessons: FastApiLesson[] = [
  ...(introductionData as FastApiLesson[]),
  ...(routingData as FastApiLesson[]),
  ...(queryPathData as FastApiLesson[]),
  ...(requestBodiesData as FastApiLesson[]),
  ...(responseModelsData as FastApiLesson[]),
  ...(dependencyData as FastApiLesson[]),
  ...(middlewareData as FastApiLesson[]),
  ...(authData as FastApiLesson[]),
  ...(databaseData as FastApiLesson[]),
  ...(testingData as FastApiLesson[]),
];
