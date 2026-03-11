import type { CssSection, CssLesson } from "./types";
import { cssSections } from "./sections";

import fundamentalsData from "./lessons/css-fundamentals.json";
import selectorsData from "./lessons/selectors-and-specificity.json";
import boxModelData from "./lessons/box-model-and-spacing.json";
import typographyData from "./lessons/typography-and-colors.json";
import flexboxData from "./lessons/flexbox.json";
import gridData from "./lessons/css-grid.json";
import positioningData from "./lessons/positioning-and-stacking.json";
import responsiveData from "./lessons/responsive-design.json";
import animationsData from "./lessons/transitions-and-animations.json";
import advancedData from "./lessons/advanced-techniques.json";
import architectureData from "./lessons/css-architecture.json";
import interviewData from "./lessons/css-interview-essentials.json";

export const sections: CssSection[] = cssSections;

export const lessons: CssLesson[] = [
  ...(fundamentalsData as CssLesson[]),
  ...(selectorsData as CssLesson[]),
  ...(boxModelData as CssLesson[]),
  ...(typographyData as CssLesson[]),
  ...(flexboxData as CssLesson[]),
  ...(gridData as CssLesson[]),
  ...(positioningData as CssLesson[]),
  ...(responsiveData as CssLesson[]),
  ...(animationsData as CssLesson[]),
  ...(advancedData as CssLesson[]),
  ...(architectureData as CssLesson[]),
  ...(interviewData as CssLesson[]),
];
