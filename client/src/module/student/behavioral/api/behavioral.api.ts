import api from "../../../../lib/axios";

export interface SectionEvaluation {
  addressed: boolean;
  specificity: string;
  feedback: string;
}

export interface StarEvaluationResult {
  situation: SectionEvaluation;
  task: SectionEvaluation;
  action: SectionEvaluation;
  result: SectionEvaluation;
  overallScore: number;
  estimatedSpeakingTime: string;
  modelAnswer: string;
  overallFeedback: string;
}

export interface EvaluateStarResponse {
  evaluation: StarEvaluationResult;
  isPremium: boolean;
}

export interface EvaluateStarPayload {
  question: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

export async function evaluateStarResponse(payload: EvaluateStarPayload): Promise<EvaluateStarResponse> {
  const { data } = await api.post<EvaluateStarResponse>("/behavioral/evaluate", payload);
  return data;
}
