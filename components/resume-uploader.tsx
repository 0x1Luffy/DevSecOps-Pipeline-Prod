"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { analyzeResume } from "@/lib/resume-analyzer";
import { Card, CardContent } from "@/components/ui/card";
import BannerAd from "./ads/banner-ad";

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [matchedTags, setMatchedTags] = useState<string[]>([]);
  const [missingTags, setMissingTags] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Replace the handleFileChange function to automatically start analysis
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Reset previous results
      setScore(null);
      setMatchedTags([]);
      setMissingTags([]);

      // Read file content
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target?.result as string;
        setResumeText(text);

        // Automatically start analysis
        setIsAnalyzing(true);
        try {
          // Analyze the resume text after a short delay to show animations
          setTimeout(async () => {
            const result = await analyzeResume(resumeText || text);
            setScore(result.score);
            setMatchedTags(result.matchedTags);
            setMissingTags(result.missingTags);
            setIsAnalyzing(false);
          }, 3000);
        } catch (error) {
          console.error("Error analyzing resume:", error);
          setIsAnalyzing(false);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  // Replace the handleDrop function to automatically start analysis
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);

      // Reset previous results
      setScore(null);
      setMatchedTags([]);
      setMissingTags([]);

      // Read file content
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target?.result as string;
        setResumeText(text);

        // Automatically start analysis
        setIsAnalyzing(true);
        try {
          // Analyze the resume text after a short delay to show animations
          setTimeout(async () => {
            const result = await analyzeResume(resumeText || text);
            setScore(result.score);
            setMatchedTags(result.matchedTags);
            setMissingTags(result.missingTags);
            setIsAnalyzing(false);
          }, 3000);
        } catch (error) {
          console.error("Error analyzing resume:", error);
          setIsAnalyzing(false);
        }
      };
      reader.readAsText(droppedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!resumeText) return;

    setIsAnalyzing(true);

    try {
      // Analyze the resume text
      const result = await analyzeResume(resumeText);

      // Update state with results
      setScore(result.score);
      setMatchedTags(result.matchedTags);
      setMissingTags(result.missingTags);
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setResumeText("");
    setScore(null);
    setMatchedTags([]);
    setMissingTags([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="w-full">
      {!file ? (
        <div
          className="border-2 border-dashed border-purple-600/50 rounded-xl p-8 text-center cursor-pointer hover:border-purple-600 transition-colors"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-purple-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-lg text-white mb-2">
              Drag and drop your resume here
            </p>
            <p className="text-sm text-gray-400">or click to browse files</p>
            <p className="text-xs text-gray-500 mt-2">
              Supports PDF, DOC, DOCX, and TXT files
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-purple-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-white truncate max-w-xs">{file.name}</span>
            </div>
            <Button
              variant="ghost"
              onClick={handleReset}
              className="text-gray-400 hover:text-white"
            >
              Reset
            </Button>
          </div>

          {score === null ? (
            isAnalyzing ? (
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20 mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-600/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"></div>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-xl font-semibold text-white">
                      Analyzing your resume...
                    </p>
                    <div className="flex flex-col space-y-1">
                      <div className="analysis-step flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse"></div>
                        <span className="text-gray-300">
                          Scanning document structure
                        </span>
                      </div>
                      <div className="analysis-step flex items-center space-x-2 opacity-70">
                        <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse delay-300"></div>
                        <span className="text-gray-300">
                          Extracting keywords
                        </span>
                      </div>
                      <div className="analysis-step flex items-center space-x-2 opacity-40">
                        <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse delay-700"></div>
                        <span className="text-gray-300">
                          Matching with job categories
                        </span>
                      </div>
                      <div className="analysis-step flex items-center space-x-2 opacity-20">
                        <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse delay-1000"></div>
                        <span className="text-gray-300">
                          Calculating ATS score
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <BannerAd />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Your ATS Score
                </h3>
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white animate-scoreCount">
                      {score}%
                    </span>
                  </div>
                  <svg
                    className="w-full h-full animate-scoreFill"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4b5563"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#9333ea"
                      strokeWidth="3"
                      strokeDasharray={`${score}, 100`}
                      style={{
                        strokeDasharray: `${score}, 100`,
                        strokeDashoffset: 100,
                        animation: "scoreStroke 1.5s ease-out forwards",
                      }}
                    />
                  </svg>
                </div>
                <p className="text-gray-300 mt-4 animate-fadeIn">
                  {score >= 80
                    ? "Excellent! Your resume is well-optimized for ATS systems."
                    : score >= 60
                    ? "Good start! With a few improvements, your resume will perform better."
                    : "Your resume needs optimization to pass ATS systems."}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Matched Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {matchedTags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-900/50 text-purple-200 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Missing Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {missingTags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  Recommendations
                </h4>
                <ul className="space-y-2">
                  {missingTags.length > 0 && (
                    <li className="text-gray-300">
                      <span className="text-purple-400">•</span> Consider adding
                      relevant skills like {missingTags.slice(0, 3).join(", ")}{" "}
                      to enhance your expertise profile.
                    </li>
                  )}
                  <li className="text-gray-300">
                    <span className="text-purple-400">•</span> Quantify your
                    achievements with metrics and specific results.
                  </li>
                  <li className="text-gray-300">
                    <span className="text-purple-400">•</span> Use
                    industry-standard terminology for your specific field.
                  </li>
                  <li className="text-gray-300">
                    <span className="text-purple-400">•</span> Ensure your
                    resume has a clean, ATS-friendly format without tables or
                    complex formatting.
                  </li>
                  <li className="text-gray-300">
                    <span className="text-purple-400">•</span> Tailor your
                    resume keywords for each specific job application.
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1"
                >
                  Try Another Resume
                </Button>
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  Download Report
                </Button>
              </div>
              <BannerAd />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
