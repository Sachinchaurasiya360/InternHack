import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, XCircle, Link2 } from "lucide-react";
import api from "../../../lib/axios";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

interface VerifiedBadgeResponse {
    student: {
        id: number;
        name: string;
        profileSlug?: string | null;
    };
    skillName: string;
    score: number;
    verifiedAt: string;
    token: string;
    publicUrl: string;
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function SkillVerificationBadgePage() {
    const { token } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ["skill-test-verify", token],
        queryFn: async () => {
            const res = await api.get<VerifiedBadgeResponse>(`/skill-tests/verify/${token}`);
            return res.data;
        },
        enabled: !!token,
        retry: false,
    });

    if (isLoading) return <LoadingScreen />;

    if (error || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 p-6">
                <div className="max-w-xl w-full rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-8 text-center shadow-lg">
                    <XCircle className="mx-auto h-12 w-12 text-red-600 dark:text-red-400" />
                    <h1 className="mt-5 text-2xl font-bold text-stone-950 dark:text-white">Verification failed</h1>
                    <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                        The verification token is invalid or has expired. Please check the link and try again.
                    </p>
                    <div className="mt-6">
                        <Button variant="secondary" onClick={() => navigate(-1)} className="rounded-md">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Go back
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 p-6">
            <SEO
                title={`${data.student.name}'s ${data.skillName} verification`}
                description={`${data.student.name} has verified their ${data.skillName} skill with a score of ${data.score}%.`}
                canonicalUrl={`https://internhack.xyz/verify/${token}`}
            />
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-8 shadow-xl"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-lime-600 dark:text-lime-400 font-semibold">
                                Verified Skill
                            </p>
                            <h1 className="mt-3 text-3xl font-bold text-stone-950 dark:text-white">
                                {data.student.name} — {data.skillName}
                            </h1>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                Verified on {formatDate(data.verifiedAt)} • Score: {data.score}%
                            </p>
                        </div>
                        <Button variant="secondary" onClick={() => navigate(-1)} className="rounded-md">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-5">
                            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 font-semibold">
                                Verification Token
                            </p>
                            <p className="mt-3 text-sm break-all text-stone-900 dark:text-stone-100">{data.token}</p>
                        </div>
                        <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-5">
                            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 font-semibold">
                                Public URL
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-sm text-stone-900 dark:text-stone-100 break-all">
                                <Link2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                                <span>{window.location.origin + data.publicUrl}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 rounded-md border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-stone-900 p-6">
                        <div className="flex items-center gap-3 text-stone-800 dark:text-stone-200">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="font-semibold">Verified badge confirmed</span>
                        </div>
                        <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">
                            This badge proves that {data.student.name} passed the {data.skillName} skill test on InternHack and earned an officially verified skill credential.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
