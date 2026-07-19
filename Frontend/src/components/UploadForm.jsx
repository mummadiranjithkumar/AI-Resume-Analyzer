import { useState } from "react";
import api from "../services/api";
import ATSScore from "./ATSScore";
import MatchingSkills from "./MatchingSkills";
import MissingSkills from "./MissingSkills";
import Strengths from "./Strengths";
import Weaknesses from "./Weaknesses";
import Suggestions from "./Suggestions";
import ResumeSummary from "./ResumeSummary";
import KeywordsFound from "./KeywordsFound";
import KeywordsMissing from "./KeywordsMissing";

function UploadForm() {

    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState(null);

    const handleSubmit = async () => {

        if (!resume || !jobDescription) {
            alert("Please upload resume and enter job description.");
            return;
        }

        const formData = new FormData();

        formData.append("resume", resume);
        formData.append("job_description", jobDescription);

        try {

            setLoading(true);

            const response = await api.post(
                "/resume/analyze",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("API Response:", response.data);

            setAnalysis(response.data.analysis);

        } catch (error) {

            console.error(error);
            alert("Analysis Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="bg-slate-800 rounded-xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
                Resume Analysis
            </h2>

            <div className="mb-6">

                <label className="block mb-2 font-semibold">
                    Upload Resume (PDF)
                </label>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="w-full bg-slate-700 rounded-lg p-3"
                />

            </div>

            <div className="mb-6">

                <label className="block mb-2 font-semibold">
                    Job Description
                </label>

                <textarea
                    rows="10"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full bg-slate-700 rounded-lg p-3"
                    placeholder="Paste Job Description..."
                />

            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold transition"
            >
                {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

            {analysis && (

                <div className="mt-10 space-y-8">

                    {/* ATS Score */}
                    <ATSScore
                        score={analysis.match_score}
                    />

                    {/* Matching & Missing Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <MatchingSkills
                            skills={analysis.matching_skills}
                        />

                        <MissingSkills
                            skills={analysis.missing_skills}
                        />

                    </div>

                    {/* Strengths & Weaknesses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Strengths
                            strengths={analysis.strengths}
                        />

                        <Weaknesses
                            weaknesses={analysis.weaknesses}
                        />

                    </div>

                    {/* Suggestions */}
                    <Suggestions
                        suggestions={analysis.suggestions}
                    />

                    {/* Resume Summary */}
                    <ResumeSummary
                        summary={analysis.ats_feedback.resume_summary}
                    />

                    {/* Keywords */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <KeywordsFound
                            keywords={analysis.ats_feedback.keywords_found}
                        />

                        <KeywordsMissing
                            keywords={analysis.ats_feedback.keywords_missing}
                        />

                    </div>

                </div>

            )}

        </div>

    );

}

export default UploadForm;