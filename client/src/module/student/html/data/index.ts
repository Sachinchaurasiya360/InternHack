import type { HtmlSection, HtmlLesson } from "./types";
import { htmlSections } from "./sections";

import fundamentalsData from "./lessons/html-fundamentals.json";
import textContentData from "./lessons/text-content.json";
import linksNavData from "./lessons/links-and-navigation.json";
import imagesMediaData from "./lessons/images-and-media.json";
import tablesData from "./lessons/tables.json";
import formsData from "./lessons/forms-and-inputs.json";
import semanticData from "./lessons/semantic-html.json";
import html5ApisData from "./lessons/html5-apis.json";
import accessibilityData from "./lessons/accessibility.json";
import seoMetaData from "./lessons/seo-and-meta.json";
import perfData from "./lessons/performance-best-practices.json";
import interviewData from "./lessons/html-interview-essentials.json";

export const sections: HtmlSection[] = htmlSections;

export const lessons: HtmlLesson[] = [
  ...(fundamentalsData as HtmlLesson[]),
  ...(textContentData as HtmlLesson[]),
  ...(linksNavData as HtmlLesson[]),
  ...(imagesMediaData as HtmlLesson[]),
  ...(tablesData as HtmlLesson[]),
  ...(formsData as HtmlLesson[]),
  ...(semanticData as HtmlLesson[]),
  ...(html5ApisData as HtmlLesson[]),
  ...(accessibilityData as HtmlLesson[]),
  ...(seoMetaData as HtmlLesson[]),
  ...(perfData as HtmlLesson[]),
  ...(interviewData as HtmlLesson[]),
];
