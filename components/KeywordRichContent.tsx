import BannerAd from "./ads/banner-ad";

export default function KeywordRichContent() {
  const topics = [
    {
      title: "ATS Resume Checker",
      description:
        "Check your resume against modern ATS (Applicant Tracking Systems) to ensure it passes initial screenings using AI-powered analysis.",
    },
    {
      title: "Optimize Resume for Keywords",
      description:
        "Enhance your resume with job-specific keywords, skills, and power verbs that recruiters and bots are actively scanning for.",
    },
    {
      title: "Best Resume Formats",
      description:
        "Learn about ATS-friendly resume formats like reverse-chronological, hybrid, and keyword-optimized layouts that avoid parsing errors.",
    },

    {
      title: "Resume Score Calculator",
      description:
        "Get your resume's ATS compatibility score with personalized insights on keyword density, formatting, and readability.",
    },
    {
      title: "Free Resume Review Tool",
      description:
        "Upload your resume in PDF or DOCX format and instantly receive feedback on structure, tone, skills, and relevance to job roles.",
    },
    {
      title: "Pass ATS Filters",
      description:
        "Understand what hiring bots look for: proper formatting, bullet points, clear headings, and strategic use of job-specific keywords.",
    },
    {
      title: "Skills & Keywords",
      description:
        "Include essential skills like leadership, JavaScript, Python, Agile, SQL, communication, problem-solving, and critical thinking.",
    },
    {
      title: "Customize Resume for Job Roles",
      description:
        "Tailor your resume for roles like software engineer, product manager, data analyst, digital marketer, or project manager using role-specific keywords.",
    },
    {
      title: "Job Application Success",
      description:
        "Boost interview chances with resumes that match job descriptions, demonstrate impact, and are aligned with recruiter expectations.",
    },
    {
      title: "ATS Resume Templates",
      description:
        "Use professionally designed, ATS-compliant resume templates with proper margins, readable fonts, and organized sections.",
    },
    {
      title: "AI Resume Suggestions",
      description:
        "Get AI-generated suggestions to reword experience, quantify achievements, and strengthen alignment with job postings.",
    },
    {
      title: "Resume Tips for Freshers",
      description:
        "Even with no experience, learn how to showcase internships, coursework, certifications, and transferable skills effectively.",
    },
    {
      title: "Tailor Resume to Job Description",
      description:
        "Use AI to compare your resume against a job posting and identify missing keywords and skill gaps.",
    },
    {
      title: "Resume Action Verbs",
      description:
        "Replace generic phrases with action-driven verbs like 'led', 'initiated', 'designed', 'optimized', and 'streamlined'.",
    },
    {
      title: "Bytemyresume AI Engine",
      description:
        "Our proprietary engine uses NLP and machine learning to simulate ATS scoring logic and help your resume pass filters.",
    },
  ];

  return (
    <div className="relative mt-32 bg-gradient-to-b from-purple-900/20 via-purple-950/30 to-transparent py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-12 text-center">
          Resume Optimization Tips & Keywords
          <BannerAd />
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <BannerAd />
      </div>
    </div>
  );
}
