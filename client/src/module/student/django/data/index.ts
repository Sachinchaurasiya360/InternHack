import type { DjangoSection, DjangoLesson } from "./types";
import { djangoSections } from "./sections";

import introductionData from "./lessons/introduction-to-django.json";
import modelsOrmData from "./lessons/models-and-orm.json";
import viewsRoutingData from "./lessons/views-and-url-routing.json";
import templatesData from "./lessons/templates.json";
import formsValidationData from "./lessons/forms-and-validation.json";
import adminData from "./lessons/admin-interface.json";
import authData from "./lessons/authentication-and-authorization.json";
import drfData from "./lessons/rest-apis-with-drf.json";
import middlewareSignalsData from "./lessons/middleware-and-signals.json";
import testingDeployData from "./lessons/testing-and-deployment.json";

export const sections: DjangoSection[] = djangoSections;

export const lessons: DjangoLesson[] = [
  ...(introductionData as DjangoLesson[]),
  ...(modelsOrmData as DjangoLesson[]),
  ...(viewsRoutingData as DjangoLesson[]),
  ...(templatesData as DjangoLesson[]),
  ...(formsValidationData as DjangoLesson[]),
  ...(adminData as DjangoLesson[]),
  ...(authData as DjangoLesson[]),
  ...(drfData as DjangoLesson[]),
  ...(middlewareSignalsData as DjangoLesson[]),
  ...(testingDeployData as DjangoLesson[]),
];
