-- Drop the HR back-office module (hr.prisma). The recruiter/HR feature was
-- archived to /archived; these tables and enums are no longer part of the
-- schema. CASCADE removes foreign keys and dependent objects. IF EXISTS keeps
-- the migration idempotent. The jobs/ATS tables (job, application, round,
-- roundSubmission, savedCandidate) are intentionally retained for now.

-- ── HR tables ──────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS "workflowInstance" CASCADE;
DROP TABLE IF EXISTS "workflowDefinition" CASCADE;
DROP TABLE IF EXISTS "complianceDocument" CASCADE;
DROP TABLE IF EXISTS "onboardingChecklist" CASCADE;
DROP TABLE IF EXISTS "interview" CASCADE;
DROP TABLE IF EXISTS "reimbursement" CASCADE;
DROP TABLE IF EXISTS "hrTask" CASCADE;
DROP TABLE IF EXISTS "performanceReview" CASCADE;
DROP TABLE IF EXISTS "contractorPayment" CASCADE;
DROP TABLE IF EXISTS "payrollRecord" CASCADE;
DROP TABLE IF EXISTS "attendanceRecord" CASCADE;
DROP TABLE IF EXISTS "leaveRequest" CASCADE;
DROP TABLE IF EXISTS "leaveBalance" CASCADE;
DROP TABLE IF EXISTS "departmentLeavePolicy" CASCADE;
DROP TABLE IF EXISTS "leavePolicy" CASCADE;
DROP TABLE IF EXISTS "userCustomRole" CASCADE;
DROP TABLE IF EXISTS "customRole" CASCADE;
DROP TABLE IF EXISTS "holiday" CASCADE;
DROP TABLE IF EXISTS "employee" CASCADE;
DROP TABLE IF EXISTS "department" CASCADE;

-- ── HR enums ───────────────────────────────────────────────────────────────
DROP TYPE IF EXISTS "EmploymentStatus";
DROP TYPE IF EXISTS "EmploymentType";
DROP TYPE IF EXISTS "LeaveType";
DROP TYPE IF EXISTS "LeaveRequestStatus";
DROP TYPE IF EXISTS "AttendanceStatus";
DROP TYPE IF EXISTS "PayrollStatus";
DROP TYPE IF EXISTS "ReviewCycle";
DROP TYPE IF EXISTS "HRReviewStatus";
DROP TYPE IF EXISTS "TaskPriority";
DROP TYPE IF EXISTS "TaskStatus";
DROP TYPE IF EXISTS "InterviewType";
DROP TYPE IF EXISTS "InterviewStatus";
DROP TYPE IF EXISTS "OnboardingItemStatus";
DROP TYPE IF EXISTS "ReimbursementStatus";
DROP TYPE IF EXISTS "WorkflowStatus";
