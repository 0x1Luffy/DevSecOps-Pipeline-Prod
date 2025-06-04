// Define job category tags
const jobCategoryTags = {
  "Data Analytics": [
    "data analysis",
    "data visualization",
    "sql",
    "tableau",
    "power bi",
    "excel",
    "statistics",
    "python",
    "r",
    "data mining",
    "big data",
    "data modeling",
    "data warehouse",
    "business intelligence",
    "analytics",
    "pandas",
    "numpy",
    "matplotlib",
    "data science",
    "data engineering",
    "etl",
    "data pipeline",
  ],
  "Full Stack Developer": [
    "javascript",
    "typescript",
    "react",
    "angular",
    "vue",
    "node.js",
    "express",
    "html",
    "css",
    "sass",
    "less",
    "mongodb",
    "mysql",
    "postgresql",
    "nosql",
    "rest api",
    "graphql",
    "aws",
    "docker",
    "kubernetes",
    "ci/cd",
    "git",
    "frontend",
    "backend",
    "full stack",
    "web development",
    "responsive design",
    "redux",
    "next.js",
    "webpack",
    "microservices",
    "serverless",
  ],
  "Software Testing": [
    "qa",
    "quality assurance",
    "test automation",
    "manual testing",
    "selenium",
    "cypress",
    "jest",
    "mocha",
    "chai",
    "junit",
    "testng",
    "api testing",
    "performance testing",
    "load testing",
    "stress testing",
    "regression testing",
    "functional testing",
    "unit testing",
    "integration testing",
    "test cases",
    "test plans",
    "bug tracking",
    "jira",
    "test management",
  ],
  DevOps: [
    "devops",
    "ci/cd",
    "jenkins",
    "gitlab ci",
    "github actions",
    "docker",
    "kubernetes",
    "terraform",
    "ansible",
    "puppet",
    "chef",
    "aws",
    "azure",
    "gcp",
    "cloud",
    "infrastructure as code",
    "monitoring",
    "logging",
    "prometheus",
    "grafana",
    "elk stack",
    "linux",
    "bash",
    "shell scripting",
    "automation",
    "configuration management",
  ],
  AWS: [
    "aws",
    "amazon web services",
    "ec2",
    "s3",
    "lambda",
    "dynamodb",
    "rds",
    "cloudformation",
    "cloudfront",
    "route53",
    "vpc",
    "iam",
    "cloudwatch",
    "sqs",
    "sns",
    "api gateway",
    "eks",
    "ecs",
    "fargate",
    "serverless",
    "aws certified",
    "cloud architecture",
    "cloud security",
  ],
  Python: [
    "python",
    "django",
    "flask",
    "fastapi",
    "pandas",
    "numpy",
    "scipy",
    "scikit-learn",
    "tensorflow",
    "pytorch",
    "keras",
    "matplotlib",
    "seaborn",
    "jupyter",
    "anaconda",
    "pip",
    "virtualenv",
    "oop",
    "api development",
    "data processing",
    "automation",
    "scripting",
    "web scraping",
    "beautiful soup",
  ],
  "Machine Learning": [
    "machine learning",
    "deep learning",
    "neural networks",
    "ai",
    "artificial intelligence",
    "nlp",
    "natural language processing",
    "computer vision",
    "predictive modeling",
    "classification",
    "regression",
    "clustering",
    "reinforcement learning",
    "supervised learning",
    "unsupervised learning",
    "feature engineering",
    "model training",
    "tensorflow",
    "pytorch",
    "scikit-learn",
    "ml ops",
  ],
  "UI/UX Design": [
    "ui",
    "ux",
    "user interface",
    "user experience",
    "figma",
    "sketch",
    "adobe xd",
    "photoshop",
    "illustrator",
    "indesign",
    "wireframing",
    "prototyping",
    "user research",
    "usability testing",
    "information architecture",
    "interaction design",
    "visual design",
    "responsive design",
    "accessibility",
  ],
  "Project Management": [
    "project management",
    "agile",
    "scrum",
    "kanban",
    "waterfall",
    "jira",
    "confluence",
    "trello",
    "asana",
    "project planning",
    "risk management",
    "stakeholder management",
    "budgeting",
    "resource allocation",
    "pmp",
    "prince2",
    "sprint planning",
    "backlog grooming",
    "retrospectives",
  ],
  Cybersecurity: [
    "cybersecurity",
    "information security",
    "network security",
    "penetration testing",
    "vulnerability assessment",
    "security audit",
    "firewall",
    "encryption",
    "identity management",
    "access control",
    "siem",
    "incident response",
    "security compliance",
    "ethical hacking",
    "threat analysis",
    "risk assessment",
    "security architecture",
    "cissp",
    "ceh",
    "security+",
    "soc",
  ],
  "Frontend Development": [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "vue",
    "angular",
    "svelte",
    "redux",
    "webpack",
    "babel",
    "sass",
    "less",
    "tailwind",
    "bootstrap",
    "material ui",
    "responsive design",
    "web accessibility",
    "spa",
    "pwa",
    "web components",
    "next.js",
    "gatsby",
    "nuxt.js",
  ],
  "Backend Development": [
    "node.js",
    "express",
    "django",
    "flask",
    "spring",
    "ruby on rails",
    "php",
    "laravel",
    "asp.net",
    "java",
    "c#",
    "go",
    "rust",
    "api",
    "rest",
    "graphql",
    "microservices",
    "serverless",
    "websockets",
    "authentication",
    "authorization",
    "oauth",
    "jwt",
  ],
  "Mobile Development": [
    "android",
    "ios",
    "swift",
    "kotlin",
    "react native",
    "flutter",
    "xamarin",
    "mobile app",
    "app development",
    "ui/ux",
    "mobile design",
    "app store",
    "google play",
    "push notifications",
    "mobile testing",
  ],
  "Cloud Computing": [
    "aws",
    "azure",
    "gcp",
    "cloud",
    "serverless",
    "lambda",
    "ec2",
    "s3",
    "dynamodb",
    "rds",
    "kubernetes",
    "docker",
    "containerization",
    "iaas",
    "paas",
    "saas",
    "cloud architecture",
    "cloud security",
    "cloud migration",
  ],
}

// Flatten all tags into a single array
const allTags = Object.values(jobCategoryTags).flat()

// Function to analyze resume text
export async function analyzeResume(resumeText: string): Promise<{
  score: number
  matchedTags: string[]
  missingTags: string[]
  contextualFeedback: {
    strengths: string[]
    weaknesses: string[]
    jobFit: string
  }
}> {
  // Convert resume text to lowercase for case-insensitive matching
  const lowerCaseText = resumeText.toLowerCase()

  // Find matched tags
  const matchedTags: string[] = []

  allTags.forEach((tag) => {
    if (lowerCaseText.includes(tag.toLowerCase())) {
      matchedTags.push(tag)
    }
  })

  // Determine the most relevant job categories based on matched tags
  // We'll track the top 3 categories to better understand the user's expertise areas
  type CategoryScore = { category: string; score: number; matchCount: number }
  const categoryScores: CategoryScore[] = []

  Object.entries(jobCategoryTags).forEach(([category, tags]) => {
    const matchedInCategory = tags.filter((tag) => matchedTags.includes(tag))
    const categoryScore = matchedInCategory.length / tags.length

    if (matchedInCategory.length > 0) {
      categoryScores.push({
        category,
        score: categoryScore,
        matchCount: matchedInCategory.length,
      })
    }
  })

  // Sort categories by score (highest first)
  categoryScores.sort((a, b) => b.score - a.score)

  // Get the best matching category
  const bestCategoryMatch = categoryScores.length > 0 ? categoryScores[0].category : ""
  const bestCategoryScore = categoryScores.length > 0 ? categoryScores[0].score : 0

  // Get the user's expertise areas (top 2 categories with significant matches)
  const expertiseAreas = categoryScores
    .filter((cat) => cat.matchCount >= 3 || cat.score >= 0.2) // Only consider categories with meaningful matches
    .slice(0, 2) // Take top 2
    .map((cat) => cat.category)

  // If we couldn't determine expertise areas, default to the best match
  if (expertiseAreas.length === 0 && bestCategoryMatch) {
    expertiseAreas.push(bestCategoryMatch)
  }

  // Get missing tags ONLY from the user's expertise areas
  const missingTags: string[] = []

  expertiseAreas.forEach((area) => {
    const areaTags = jobCategoryTags[area as keyof typeof jobCategoryTags]
    const missingInArea = areaTags.filter((tag) => !matchedTags.includes(tag)).slice(0, 5) // Limit to 5 missing tags per expertise area

    missingTags.push(...missingInArea)
  })

  // Limit to 10 total missing tags
  const finalMissingTags = missingTags.slice(0, 10)

  // Calculate score based on matched tags and other factors
  // Base score on percentage of matched tags in the best category
  const baseScore = bestCategoryScore * 100

  // Add bonus for having a good number of matched tags
  const matchBonus = Math.min(matchedTags.length * 2, 15)

  // Penalty for very short resumes (likely incomplete)
  const lengthPenalty = resumeText.length < 1500 ? 15 : 0

  // Calculate raw score
  const rawScore = Math.round(baseScore + matchBonus - lengthPenalty)

  // NEW: Ensure minimum score is between 70-73 (randomly chosen for natural variation)
  const minScore = Math.floor(Math.random() * 4) + 70 // Random number between 70-73

  // NEW: Scale the score between minScore and 95
  let finalScore = minScore
  if (rawScore > 30) {
    // Map the raw score (30-100) to our new range (minScore-95)
    const scaleFactor = (95 - minScore) / 70 // 70 is the range of raw scores (100-30)
    finalScore = Math.min(Math.round(minScore + (rawScore - 30) * scaleFactor), 95)
  }

  // Add more context to the analysis
  const contextualFeedback = {
    strengths: [],
    weaknesses: [],
    jobFit: "",
  }

  // Determine strengths
  if (matchedTags.length > 10) {
    contextualFeedback.strengths.push("Strong technical skill representation")
  }
  if (resumeText.length > 2500) {
    contextualFeedback.strengths.push("Comprehensive resume with good detail")
  }
  if (bestCategoryScore > 0.6) {
    contextualFeedback.strengths.push(`Well-aligned with ${bestCategoryMatch} roles`)
  }

  // Determine weaknesses - modified to be more encouraging even for weak resumes
  if (matchedTags.length < 5) {
    contextualFeedback.weaknesses.push("Could benefit from more technical skill keywords")
  }
  if (resumeText.length < 1500) {
    contextualFeedback.weaknesses.push("Consider adding more detail for better ATS recognition")
  }
  if (bestCategoryScore < 0.4) {
    contextualFeedback.weaknesses.push("Adding more industry-specific terminology would help")
  }

  // Determine job fit based on expertise areas - modified to be more positive
  if (expertiseAreas.length > 0) {
    if (bestCategoryScore > 0.7) {
      contextualFeedback.jobFit = `Excellent match for ${expertiseAreas.join(" and ")} positions`
    } else if (bestCategoryScore > 0.5) {
      contextualFeedback.jobFit = `Good match for ${expertiseAreas.join(" and ")} positions`
    } else if (bestCategoryScore > 0.3) {
      contextualFeedback.jobFit = `Solid match for ${expertiseAreas.join(" and ")} positions with some enhancements`
    } else {
      contextualFeedback.jobFit = `Shows potential for ${expertiseAreas.join(" and ")} positions with targeted improvements`
    }
  } else {
    contextualFeedback.jobFit = "Adding industry-specific keywords will help target your preferred roles"
  }

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    score: finalScore,
    matchedTags: matchedTags.slice(0, 15), // Limit to 15 matched tags
    missingTags: finalMissingTags,
    contextualFeedback,
  }
}
