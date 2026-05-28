import type { TopicTheory } from "./types";

import { aptitudeTheoryCommercial } from "./aptitude-theory-commercial";
import { aptitudeTheoryArithmetic } from "./aptitude-theory-arithmetic";
import { aptitudeTheoryTimeWorkMotion } from "./aptitude-theory-time-work-motion";
import { aptitudeTheoryGeometryMensuration } from "./aptitude-theory-geometry-mensuration";
import { aptitudeTheoryAlgebra } from "./aptitude-theory-algebra";
import { aptitudeTheoryCombinatorics } from "./aptitude-theory-combinatorics";
import { aptitudeTheoryMisc } from "./aptitude-theory-misc";

export const aptitudeTheory: TopicTheory[] = [
  ...aptitudeTheoryCommercial,
  ...aptitudeTheoryArithmetic,
  ...aptitudeTheoryTimeWorkMotion,
  ...aptitudeTheoryGeometryMensuration,
  ...aptitudeTheoryAlgebra,
  ...aptitudeTheoryCombinatorics,
  ...aptitudeTheoryMisc,
];
