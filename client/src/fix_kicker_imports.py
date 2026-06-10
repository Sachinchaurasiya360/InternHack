files = {
    "module/auth/LoginPage.tsx": "../../components/ui/Kicker",
    "module/auth/RegisterPage.tsx": "../../components/ui/Kicker",
    "module/legal/RefundPage.tsx": "../../components/ui/Kicker",
    "module/legal/ShippingPage.tsx": "../../components/ui/Kicker",
    "module/legal/TermsPage.tsx": "../../components/ui/Kicker",
    "module/recruiter/RecruiterDashboard.tsx": "../../components/ui/Kicker",
    "module/recruiter/RecruiterLandingPage.tsx": "../../components/ui/Kicker",
    "module/recruiter/auth/RecruiterLoginPage.tsx": "../../../components/ui/Kicker",
    "module/recruiter/auth/RecruiterRegisterPage.tsx": "../../../components/ui/Kicker",
    "module/recruiter/jobs/RecruiterJobsList.tsx": "../../../components/ui/Kicker",
    "module/student/aptitude/AptitudeCategoriesPage.tsx": "../../../components/ui/Kicker",
    "module/student/aptitude/AptitudeTopicPage.tsx": "../../../components/ui/Kicker",
    "module/student/ats/AtsLandingPage.tsx": "../../../components/ui/Kicker",
    "module/student/ats/AtsScorePage.tsx": "../../../components/ui/Kicker",
    "module/student/ats/CoverLetterPage.tsx": "../../../components/ui/Kicker",
    "module/student/ats/LatexResumeEditor.tsx": "../../../components/ui/Kicker",
    "module/student/ats/ResumeBuilderPage.tsx": "../../../components/ui/Kicker",
    "module/student/dsa/DsaProblemDetailPage.tsx": "../../../components/ui/Kicker",
    "module/student/grants/GrantsPage.tsx": "../../../components/ui/Kicker",
    "module/student/javascript/JsLessonsPage.tsx": "../../../components/ui/Kicker",
    "module/student/learn/LearnHubPage.tsx": "../../../components/ui/Kicker",
    "module/student/opensource/OpenSourceAnalyticsPage.tsx": "../../../components/ui/Kicker",
    "module/student/opensource/OpenSourceLandingPage.tsx": "../../../components/ui/Kicker",
    "module/student/profile/components/ProfilePageHeader.tsx": "../../../../components/ui/Kicker",
    "module/student/roadmap/AiRoadmapWizardPage.tsx": "../../../components/ui/Kicker",
    "module/student/roadmap/RoadmapDetailPage.tsx": "../../../components/ui/Kicker",
    "module/student/roadmap/RoadmapEnrollPage.tsx": "../../../components/ui/Kicker",
    "module/student/roadmap/RoadmapsLandingPage.tsx": "../../../components/ui/Kicker",
}

for rel_path, import_path in files.items():
    with open(rel_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # Remove ALL existing Kicker import lines (may be 2 due to previous runs)
    lines = [l for l in lines if "import { Kicker }" not in l]

    # Find last import line
    last_import_idx = max(
        (i for i, l in enumerate(lines) if l.strip().startswith("import ")),
        default=0
    )

    # Insert ONE correct Kicker import after all other imports
    correct_import = 'import { Kicker } from "' + import_path + '";\n'
    lines.insert(last_import_idx + 1, correct_import)

    with open(rel_path, "w", encoding="utf-8") as f:
        f.writelines(lines)

    print("FIXED:", rel_path)

print("All done.")