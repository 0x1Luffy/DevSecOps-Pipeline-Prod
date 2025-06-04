import ResumeUploader from "@/components/resume-uploader"

export default function ResumeSection() {
  return (
    <div className="relative max-w-5xl mx-auto mt-20 mb-0">
      <div className="relative rounded-lg overflow-hidden">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-purple-600/40 blur-[50px]" />
        <div className="absolute inset-0 bg-purple-500/20 blur-[100px]" />
        <div className="relative rounded-lg border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Upload Your Resume</h2>
          <ResumeUploader />
        </div>
      </div>
    </div>
  )
}
