import { Wallet } from "lucide-react";
import HRComingSoon from "./components/HRComingSoon";
import { SEO } from "../../../components/SEO";

export default function PayrollPage() {
  return (
    <>
      <SEO title="Payroll" noIndex />
      <HRComingSoon
        eyebrow="recruiter / hr / payroll"
        title="Salary runs &"
        titleTail="payslips."
        description="Run monthly payroll, manage salary structures, and issue payslips. We're putting the final touches on this module so it behaves well with your accounting workflow."
        icon={Wallet}
        features={[
          "Monthly salary runs with approval flow",
          "Earnings, deductions, and tax breakdowns",
          "Downloadable payslips per employee",
          "Contractor and one-off payments",
        ]}
      />
    </>
  );
}
