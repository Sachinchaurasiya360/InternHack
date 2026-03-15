import type { Request, Response } from "express";
import type { PayrollService } from "./payroll.service.js";
import { runPayrollSchema, approvePayrollSchema, payrollQuerySchema, contractorPaymentSchema } from "./payroll.validation.js";

export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  async runPayroll(req: Request, res: Response) {
    try {
      const result = runPayrollSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const data = await this.payrollService.runPayroll(result.data.month, result.data.year, result.data.employeeIds);
      return res.status(201).json({ message: `Payroll generated for ${data.created} employees`, ...data });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.startsWith("No active") || error.message.startsWith("Payroll already"))
          return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRecords(req: Request, res: Response) {
    try {
      const query = payrollQuerySchema.parse(req.query);
      const data = await this.payrollService.getRecords(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid payroll ID" });

      const record = await this.payrollService.getById(id);
      return res.json({ record });
    } catch (error) {
      if (error instanceof Error && error.message === "Payroll record not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async approveRecords(req: Request, res: Response) {
    try {
      const result = approvePayrollSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const updated = await this.payrollService.approveRecords(result.data.ids);
      return res.json({ message: `${updated.count} records approved` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyPayslips(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const payslips = await this.payrollService.getMyPayslips(employeeId);
      return res.json({ payslips });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createContractorPayment(req: Request, res: Response) {
    try {
      const result = contractorPaymentSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const payment = await this.payrollService.createContractorPayment(result.data);
      return res.status(201).json({ message: "Payment created", payment });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getContractorPayments(req: Request, res: Response) {
    try {
      const query = payrollQuerySchema.parse(req.query);
      const data = await this.payrollService.getContractorPayments(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async approveContractorPayment(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid payment ID" });

      const payment = await this.payrollService.approveContractorPayment(id);
      return res.json({ message: "Payment approved", payment });
    } catch (error) {
      if (error instanceof Error && error.message === "Payment not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
