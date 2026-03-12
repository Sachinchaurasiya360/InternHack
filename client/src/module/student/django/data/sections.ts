import type { DjangoSection } from "./types";

export const djangoSections: DjangoSection[] = [
  {
    id: "introduction-to-django",
    title: "Introduction to Django",
    description: "What Django is, installation, project structure, and the MTV architecture pattern.",
    orderIndex: 0,
    level: "Beginner",
  },
  {
    id: "models-and-orm",
    title: "Models & ORM",
    description: "Defining models, field types, relationships, migrations, and QuerySet operations.",
    orderIndex: 1,
    level: "Beginner",
  },
  {
    id: "views-and-url-routing",
    title: "Views & URL Routing",
    description: "Function-based views, class-based views, URL patterns, namespaces, and generic views.",
    orderIndex: 2,
    level: "Beginner",
  },
  {
    id: "templates",
    title: "Templates",
    description: "Django template language, inheritance, built-in tags and filters, and custom extensions.",
    orderIndex: 3,
    level: "Intermediate",
  },
  {
    id: "forms-and-validation",
    title: "Forms & Validation",
    description: "Django forms, ModelForms, custom validation, file uploads, and CSRF protection.",
    orderIndex: 4,
    level: "Intermediate",
  },
  {
    id: "admin-interface",
    title: "Admin Interface",
    description: "Admin site setup, ModelAdmin customization, inline models, and custom actions.",
    orderIndex: 5,
    level: "Intermediate",
  },
  {
    id: "authentication-and-authorization",
    title: "Authentication & Authorization",
    description: "User model, login and logout flows, permissions, groups, and custom user models.",
    orderIndex: 6,
    level: "Advanced",
  },
  {
    id: "rest-apis-with-drf",
    title: "REST APIs with DRF",
    description: "Django REST Framework serializers, views, viewsets, routers, and authentication.",
    orderIndex: 7,
    level: "Advanced",
  },
  {
    id: "middleware-and-signals",
    title: "Middleware & Signals",
    description: "Request/response middleware, custom middleware, Django signals, caching, and sessions.",
    orderIndex: 8,
    level: "Advanced",
  },
  {
    id: "testing-and-deployment",
    title: "Testing & Deployment",
    description: "Django TestCase, fixtures, factories, static files, media, Docker, and production config.",
    orderIndex: 9,
    level: "Advanced",
  },
];
