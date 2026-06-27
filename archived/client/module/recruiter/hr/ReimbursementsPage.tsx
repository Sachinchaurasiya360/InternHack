import { Receipt } from "lucide-react";
import HRComingSoon from "./components/HRComingSoon";
import { SEO } from "../../../components/SEO";

export default function ReimbursementsPage() {
  return (
    <>
      <SEO title="Reimbursements" noIndex />
      <HRComingSoon
        eyebrow="recruiter / hr / reimbursements"
        title="Expense claims &"
        titleTail="approvals."
        description="Let employees file expense claims with receipts and push approved ones to payroll. We're wiring up the approval routing and receipt storage before opening this up."
        icon={Receipt}
        features={[
          "Submit claims with receipt attachments",
          "Manager then finance approval routing",
          "Category budgets and spend visibility",
          "Auto-sync approved claims to payroll",
        ]}
      />
    </>
  );
}
