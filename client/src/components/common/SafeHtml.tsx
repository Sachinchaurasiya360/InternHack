import React from "react";
import DOMPurify from "dompurify";
import { sanitizeHtml as sanitizeWithConfig } from "../../lib/sanitize";

export type SanitizationMethod = "dompurify" | "sanitize-html" | "none";

export interface SafeHtmlProps extends React.HTMLAttributes<HTMLElement> {
  html: string;
  as?: keyof React.JSX.IntrinsicElements;
  method?: SanitizationMethod;
}

export const SafeHtml: React.FC<SafeHtmlProps> = ({
  html,
  as: Component = "div",
  method = "dompurify",
  ...props
}) => {
  let content = html;

  if (method === "dompurify") {
    content = DOMPurify.sanitize(html);
  } else if (method === "sanitize-html") {
    content = sanitizeWithConfig(html);
  }

  return React.createElement(Component, { ...props, dangerouslySetInnerHTML: { __html: content } });
};
