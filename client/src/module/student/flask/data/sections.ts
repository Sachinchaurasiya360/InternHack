import type { FlaskSection } from "./types";

export const flaskSections: FlaskSection[] = [
  {
    id: "introduction-to-flask",
    title: "Introduction to Flask",
    description: "What Flask is, installation, your first app, and understanding WSGI.",
    orderIndex: 0,
    level: "Beginner",
  },
  {
    id: "routing-and-views",
    title: "Routing & Views",
    description: "URL rules, HTTP methods, variable rules, converters, and URL building.",
    orderIndex: 1,
    level: "Beginner",
  },
  {
    id: "templates-and-jinja2",
    title: "Templates & Jinja2",
    description: "Template rendering, inheritance, filters, tests, macros, and includes.",
    orderIndex: 2,
    level: "Beginner",
  },
  {
    id: "request-and-response",
    title: "Request & Response",
    description: "The request object, form data, file uploads, cookies, sessions, and responses.",
    orderIndex: 3,
    level: "Intermediate",
  },
  {
    id: "blueprints-and-project-structure",
    title: "Blueprints & Project Structure",
    description: "Blueprints, application factory pattern, configuration, and project layout.",
    orderIndex: 4,
    level: "Intermediate",
  },
  {
    id: "database-with-sqlalchemy",
    title: "Database with SQLAlchemy",
    description: "Flask-SQLAlchemy setup, models, relationships, CRUD, and migrations.",
    orderIndex: 5,
    level: "Intermediate",
  },
  {
    id: "forms-and-validation",
    title: "Forms & Validation",
    description: "Flask-WTF basics, form fields, validators, CSRF protection, and file uploads.",
    orderIndex: 6,
    level: "Intermediate",
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "Flask-Login setup, session management, password hashing, and OAuth integration.",
    orderIndex: 7,
    level: "Advanced",
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    description: "JSON responses, Flask-RESTful, error handling, pagination, and filtering.",
    orderIndex: 8,
    level: "Advanced",
  },
  {
    id: "testing-and-deployment",
    title: "Testing & Deployment",
    description: "Test client basics, pytest with Flask, Gunicorn configuration, and Docker deployment.",
    orderIndex: 9,
    level: "Advanced",
  },
];
