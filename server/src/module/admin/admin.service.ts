import { AdminAuthService } from "./admin-auth.service.js";
import { AdminPlatformService } from "./admin-platform.service.js";
import { AdminCompanyService } from "./admin-company.service.js";
import { AdminOpensourceService } from "./admin-opensource.service.js";
import { AdminLearningService } from "./admin-learning.service.js";
import { AdminEventsService } from "./admin-events.service.js";
import type { AdminTier, AIServiceType, AIProviderType } from "@prisma/client";

export class AdminService {
  private authSvc = new AdminAuthService();
  private platformSvc = new AdminPlatformService();
  private companySvc = new AdminCompanyService();
  private opensourceSvc = new AdminOpensourceService();
  private learningSvc = new AdminLearningService();
  private eventsSvc = new AdminEventsService();

  // ── Auth ──────────────────────────────────────────────────────────────
  login(...args: Parameters<AdminAuthService["login"]>) {
    return this.authSvc.login(...args);
  }
  createAdmin(...args: Parameters<AdminAuthService["createAdmin"]>) {
    return this.authSvc.createAdmin(...args);
  }

  // ── Platform Dashboard ────────────────────────────────────────────────
  getPlatformDashboard(...args: Parameters<AdminPlatformService["getPlatformDashboard"]>) {
    return this.platformSvc.getPlatformDashboard(...args);
  }
  getUsers(...args: Parameters<AdminPlatformService["getUsers"]>) {
    return this.platformSvc.getUsers(...args);
  }
  getUserById(...args: Parameters<AdminPlatformService["getUserById"]>) {
    return this.platformSvc.getUserById(...args);
  }
  updateUserStatus(...args: Parameters<AdminPlatformService["updateUserStatus"]>) {
    return this.platformSvc.updateUserStatus(...args);
  }
  deleteUser(...args: Parameters<AdminPlatformService["deleteUser"]>) {
    return this.platformSvc.deleteUser(...args);
  }
  getErrorLogs(...args: Parameters<AdminPlatformService["getErrorLogs"]>) {
    return this.platformSvc.getErrorLogs(...args);
  }
  getSidebarStats() {
    return this.platformSvc.getSidebarStats();
  }

  // ── Company ───────────────────────────────────────────────────────────
  getDashboardStats(...args: Parameters<AdminCompanyService["getDashboardStats"]>) {
    return this.companySvc.getDashboardStats(...args);
  }
  listAllCompanies(...args: Parameters<AdminCompanyService["listAllCompanies"]>) {
    return this.companySvc.listAllCompanies(...args);
  }
  createCompany(...args: Parameters<AdminCompanyService["createCompany"]>) {
    return this.companySvc.createCompany(...args);
  }
  updateCompany(...args: Parameters<AdminCompanyService["updateCompany"]>) {
    return this.companySvc.updateCompany(...args);
  }
  approveCompany(...args: Parameters<AdminCompanyService["approveCompany"]>) {
    return this.companySvc.approveCompany(...args);
  }
  deleteCompany(...args: Parameters<AdminCompanyService["deleteCompany"]>) {
    return this.companySvc.deleteCompany(...args);
  }
  listAllReviews(...args: Parameters<AdminCompanyService["listAllReviews"]>) {
    return this.companySvc.listAllReviews(...args);
  }
  updateReviewStatus(...args: Parameters<AdminCompanyService["updateReviewStatus"]>) {
    return this.companySvc.updateReviewStatus(...args);
  }
  listContributions(...args: Parameters<AdminCompanyService["listContributions"]>) {
    return this.companySvc.listContributions(...args);
  }
  updateContributionStatus(...args: Parameters<AdminCompanyService["updateContributionStatus"]>) {
    return this.companySvc.updateContributionStatus(...args);
  }
  addContact(...args: Parameters<AdminCompanyService["addContact"]>) {
    return this.companySvc.addContact(...args);
  }
  updateContact(...args: Parameters<AdminCompanyService["updateContact"]>) {
    return this.companySvc.updateContact(...args);
  }
  deleteContact(...args: Parameters<AdminCompanyService["deleteContact"]>) {
    return this.companySvc.deleteContact(...args);
  }

  // ── Open Source ───────────────────────────────────────────────────────
  listRepos(...args: Parameters<AdminOpensourceService["listRepos"]>) {
    return this.opensourceSvc.listRepos(...args);
  }
  getRepo(...args: Parameters<AdminOpensourceService["getRepo"]>) {
    return this.opensourceSvc.getRepo(...args);
  }
  createRepo(...args: Parameters<AdminOpensourceService["createRepo"]>) {
    return this.opensourceSvc.createRepo(...args);
  }
  updateRepo(...args: Parameters<AdminOpensourceService["updateRepo"]>) {
    return this.opensourceSvc.updateRepo(...args);
  }
  deleteRepo(...args: Parameters<AdminOpensourceService["deleteRepo"]>) {
    return this.opensourceSvc.deleteRepo(...args);
  }

  // ── Learning (DSA + Aptitude + Skill Tests) ───────────────────────────
  listDsaTopics(...args: Parameters<AdminLearningService["listDsaTopics"]>) {
    return this.learningSvc.listDsaTopics(...args);
  }
  getDsaTopic(...args: Parameters<AdminLearningService["getDsaTopic"]>) {
    return this.learningSvc.getDsaTopic(...args);
  }
  createDsaTopic(...args: Parameters<AdminLearningService["createDsaTopic"]>) {
    return this.learningSvc.createDsaTopic(...args);
  }
  updateDsaTopic(...args: Parameters<AdminLearningService["updateDsaTopic"]>) {
    return this.learningSvc.updateDsaTopic(...args);
  }
  deleteDsaTopic(...args: Parameters<AdminLearningService["deleteDsaTopic"]>) {
    return this.learningSvc.deleteDsaTopic(...args);
  }
  createDsaProblem(...args: Parameters<AdminLearningService["createDsaProblem"]>) {
    return this.learningSvc.createDsaProblem(...args);
  }
  updateDsaProblem(...args: Parameters<AdminLearningService["updateDsaProblem"]>) {
    return this.learningSvc.updateDsaProblem(...args);
  }
  deleteDsaProblem(...args: Parameters<AdminLearningService["deleteDsaProblem"]>) {
    return this.learningSvc.deleteDsaProblem(...args);
  }
  listAptitudeCategories(...args: Parameters<AdminLearningService["listAptitudeCategories"]>) {
    return this.learningSvc.listAptitudeCategories(...args);
  }
  getAptitudeCategory(...args: Parameters<AdminLearningService["getAptitudeCategory"]>) {
    return this.learningSvc.getAptitudeCategory(...args);
  }
  createAptitudeCategory(...args: Parameters<AdminLearningService["createAptitudeCategory"]>) {
    return this.learningSvc.createAptitudeCategory(...args);
  }
  updateAptitudeCategory(...args: Parameters<AdminLearningService["updateAptitudeCategory"]>) {
    return this.learningSvc.updateAptitudeCategory(...args);
  }
  deleteAptitudeCategory(...args: Parameters<AdminLearningService["deleteAptitudeCategory"]>) {
    return this.learningSvc.deleteAptitudeCategory(...args);
  }
  createAptitudeTopic(...args: Parameters<AdminLearningService["createAptitudeTopic"]>) {
    return this.learningSvc.createAptitudeTopic(...args);
  }
  updateAptitudeTopic(...args: Parameters<AdminLearningService["updateAptitudeTopic"]>) {
    return this.learningSvc.updateAptitudeTopic(...args);
  }
  deleteAptitudeTopic(...args: Parameters<AdminLearningService["deleteAptitudeTopic"]>) {
    return this.learningSvc.deleteAptitudeTopic(...args);
  }
  listAptitudeQuestions(...args: Parameters<AdminLearningService["listAptitudeQuestions"]>) {
    return this.learningSvc.listAptitudeQuestions(...args);
  }
  createAptitudeQuestion(...args: Parameters<AdminLearningService["createAptitudeQuestion"]>) {
    return this.learningSvc.createAptitudeQuestion(...args);
  }
  updateAptitudeQuestion(...args: Parameters<AdminLearningService["updateAptitudeQuestion"]>) {
    return this.learningSvc.updateAptitudeQuestion(...args);
  }
  deleteAptitudeQuestion(...args: Parameters<AdminLearningService["deleteAptitudeQuestion"]>) {
    return this.learningSvc.deleteAptitudeQuestion(...args);
  }
  listAdminSkillTests(...args: Parameters<AdminLearningService["listAdminSkillTests"]>) {
    return this.learningSvc.listAdminSkillTests(...args);
  }
  getAdminSkillTest(...args: Parameters<AdminLearningService["getAdminSkillTest"]>) {
    return this.learningSvc.getAdminSkillTest(...args);
  }
  createAdminSkillTest(...args: Parameters<AdminLearningService["createAdminSkillTest"]>) {
    return this.learningSvc.createAdminSkillTest(...args);
  }
  updateAdminSkillTest(...args: Parameters<AdminLearningService["updateAdminSkillTest"]>) {
    return this.learningSvc.updateAdminSkillTest(...args);
  }
  deleteAdminSkillTest(...args: Parameters<AdminLearningService["deleteAdminSkillTest"]>) {
    return this.learningSvc.deleteAdminSkillTest(...args);
  }
  toggleSkillTestActive(...args: Parameters<AdminLearningService["toggleSkillTestActive"]>) {
    return this.learningSvc.toggleSkillTestActive(...args);
  }

  // ── Events / Hackathons / Broadcast / AI / External Jobs ─────────────
  listHackathons(...args: Parameters<AdminEventsService["listHackathons"]>) {
    return this.eventsSvc.listHackathons(...args);
  }
  getHackathon(...args: Parameters<AdminEventsService["getHackathon"]>) {
    return this.eventsSvc.getHackathon(...args);
  }
  createHackathon(...args: Parameters<AdminEventsService["createHackathon"]>) {
    return this.eventsSvc.createHackathon(...args);
  }
  updateHackathon(...args: Parameters<AdminEventsService["updateHackathon"]>) {
    return this.eventsSvc.updateHackathon(...args);
  }
  deleteHackathon(...args: Parameters<AdminEventsService["deleteHackathon"]>) {
    return this.eventsSvc.deleteHackathon(...args);
  }
  sendBroadcastEmail(...args: Parameters<AdminEventsService["sendBroadcastEmail"]>) {
    return this.eventsSvc.sendBroadcastEmail(...args);
  }
  getAIServiceConfigs(...args: Parameters<AdminEventsService["getAIServiceConfigs"]>) {
    return this.eventsSvc.getAIServiceConfigs(...args);
  }
  switchAIServiceProvider(...args: Parameters<AdminEventsService["switchAIServiceProvider"]>) {
    return this.eventsSvc.switchAIServiceProvider(...args);
  }
  getAIRequestStats(...args: Parameters<AdminEventsService["getAIRequestStats"]>) {
    return this.eventsSvc.getAIRequestStats(...args);
  }
  createExternalJob(...args: Parameters<AdminEventsService["createExternalJob"]>) {
    return this.eventsSvc.createExternalJob(...args);
  }
  listExternalJobs(...args: Parameters<AdminEventsService["listExternalJobs"]>) {
    return this.eventsSvc.listExternalJobs(...args);
  }
  updateExternalJob(...args: Parameters<AdminEventsService["updateExternalJob"]>) {
    return this.eventsSvc.updateExternalJob(...args);
  }
  deleteExternalJob(...args: Parameters<AdminEventsService["deleteExternalJob"]>) {
    return this.eventsSvc.deleteExternalJob(...args);
  }
  getPublicExternalJobs(...args: Parameters<AdminEventsService["getPublicExternalJobs"]>) {
    return this.eventsSvc.getPublicExternalJobs(...args);
  }
  getPublicExternalJobBySlug(...args: Parameters<AdminEventsService["getPublicExternalJobBySlug"]>) {
    return this.eventsSvc.getPublicExternalJobBySlug(...args);
  }
}
