import type { FastApiSection } from "./types";

export const fastApiSections: FastApiSection[] = [
  {
    id: "introduction-to-fastapi",
    title: "Introduction to FastAPI",
    description: "What FastAPI is, installation, your first app, and understanding ASGI servers.",
    orderIndex: 0,
    level: "Beginner",
  },
  {
    id: "routing-and-path-operations",
    title: "Routing & Path Operations",
    description: "HTTP methods, path parameters, route organization, and status codes.",
    orderIndex: 1,
    level: "Beginner",
  },
  {
    id: "query-and-path-parameters",
    title: "Query & Path Parameters",
    description: "Query parameter basics, validation, optional and default params, and enum paths.",
    orderIndex: 2,
    level: "Beginner",
  },
  {
    id: "request-bodies-and-pydantic",
    title: "Request Bodies & Pydantic",
    description: "Pydantic models, nested models, field validation, and combining body with params.",
    orderIndex: 3,
    level: "Intermediate",
  },
  {
    id: "response-models-and-status-codes",
    title: "Response Models & Status Codes",
    description: "Response models, status codes, response headers, and error responses.",
    orderIndex: 4,
    level: "Intermediate",
  },
  {
    id: "dependency-injection",
    title: "Dependency Injection",
    description: "Understanding Depends, sub-dependencies, database sessions, and global dependencies.",
    orderIndex: 5,
    level: "Intermediate",
  },
  {
    id: "middleware-and-cors",
    title: "Middleware & CORS",
    description: "Built-in middleware, CORS configuration, custom middleware, and request lifecycle.",
    orderIndex: 6,
    level: "Intermediate",
  },
  {
    id: "authentication-and-security",
    title: "Authentication & Security",
    description: "OAuth2 password flow, JWT tokens, password hashing, and scopes.",
    orderIndex: 7,
    level: "Advanced",
  },
  {
    id: "database-integration",
    title: "Database Integration",
    description: "SQLAlchemy setup, CRUD operations, async database access, and Alembic migrations.",
    orderIndex: 8,
    level: "Advanced",
  },
  {
    id: "testing-and-deployment",
    title: "Testing & Deployment",
    description: "TestClient basics, pytest fixtures, Docker deployment, and Uvicorn production config.",
    orderIndex: 9,
    level: "Advanced",
  },
];
