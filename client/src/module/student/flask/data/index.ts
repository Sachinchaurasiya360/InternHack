import type { FlaskSection, FlaskLesson } from "./types";
import { flaskSections } from "./sections";

import introductionData from "./lessons/introduction-to-flask.json";
import routingData from "./lessons/routing-and-views.json";
import templatesData from "./lessons/templates-and-jinja2.json";
import requestResponseData from "./lessons/request-and-response.json";
import blueprintsData from "./lessons/blueprints-and-project-structure.json";
import databaseData from "./lessons/database-with-sqlalchemy.json";
import formsData from "./lessons/forms-and-validation.json";
import authenticationData from "./lessons/authentication.json";
import restApisData from "./lessons/rest-apis.json";
import testingData from "./lessons/testing-and-deployment.json";

export const sections: FlaskSection[] = flaskSections;

export const lessons: FlaskLesson[] = [
  ...(introductionData as FlaskLesson[]),
  ...(routingData as FlaskLesson[]),
  ...(templatesData as FlaskLesson[]),
  ...(requestResponseData as FlaskLesson[]),
  ...(blueprintsData as FlaskLesson[]),
  ...(databaseData as FlaskLesson[]),
  ...(formsData as FlaskLesson[]),
  ...(authenticationData as FlaskLesson[]),
  ...(restApisData as FlaskLesson[]),
  ...(testingData as FlaskLesson[]),
];
