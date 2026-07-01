const fs = require("fs");
const path = require("path");

const companies = [
  ["Google", "Mountain View, CA"],
  ["Microsoft", "Redmond, WA"],
  ["Apple", "Cupertino, CA"],
  ["Amazon", "Seattle, WA"],
  ["Meta", "Menlo Park, CA"],
  ["Netflix", "Los Gatos, CA"],
  ["Spotify", "Stockholm, Sweden"],
  ["Stripe", "San Francisco, CA"],
  ["Airbnb", "San Francisco, CA"],
  ["Uber", "San Francisco, CA"],
  ["Shopify", "Ottawa, Canada"],
  ["Slack", "San Francisco, CA"],
  ["Figma", "San Francisco, CA"],
  ["Notion", "San Francisco, CA"],
  ["Linear", "San Francisco, CA"],
  ["Vercel", "San Francisco, CA"],
  ["Datadog", "New York, NY"],
  ["Cloudflare", "San Francisco, CA"],
  ["Coinbase", "Remote"],
  ["Robinhood", "Menlo Park, CA"],
  ["Square", "San Francisco, CA"],
  ["Twilio", "San Francisco, CA"],
  ["Atlassian", "Sydney, Australia"],
  ["Adobe", "San Jose, CA"],
  ["Salesforce", "San Francisco, CA"],
  ["HubSpot", "Cambridge, MA"],
  ["Zoom", "San Jose, CA"],
  ["Dropbox", "San Francisco, CA"],
  ["Asana", "San Francisco, CA"],
  ["Canva", "Sydney, Australia"],
  ["Discord", "San Francisco, CA"],
  ["Twitch", "San Francisco, CA"],
  ["Reddit", "San Francisco, CA"],
  ["Palantir", "Denver, CO"],
  ["Snowflake", "Bozeman, MT"],
  ["Databricks", "San Francisco, CA"],
  ["OpenAI", "San Francisco, CA"],
  ["Anthropic", "San Francisco, CA"],
  ["Nvidia", "Santa Clara, CA"],
  ["Tesla", "Austin, TX"],
  ["SpaceX", "Hawthorne, CA"],
];

const titles = [
  "Senior Frontend Engineer",
  "Full Stack Developer",
  "Backend Engineer",
  "DevOps Engineer",
  "Product Designer",
  "UX Researcher",
  "Data Scientist",
  "Machine Learning Engineer",
  "Mobile Developer (iOS)",
  "Mobile Developer (Android)",
  "QA Engineer",
  "Security Engineer",
  "Technical Program Manager",
  "Engineering Manager",
  "Site Reliability Engineer",
  "Cloud Architect",
  "React Developer",
  "Node.js Developer",
  "Python Developer",
  "Platform Engineer",
  "Staff Software Engineer",
  "Principal Engineer",
  "Solutions Architect",
  "Growth Engineer",
  "Analytics Engineer",
  "iOS Engineer",
  "Android Engineer",
  "Infrastructure Engineer",
  "Database Administrator",
  "Technical Writer",
];

const types = [
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
  "Internship",
  "Freelance",
];

const skillPools = [
  ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  ["Python", "Django", "PostgreSQL", "Redis"],
  ["Go", "Kubernetes", "Docker", "AWS"],
  ["Java", "Spring Boot", "Microservices", "Kafka"],
  ["Swift", "SwiftUI", "iOS", "Core Data"],
  ["Kotlin", "Jetpack Compose", "Android", "Room"],
  ["Figma", "UI Design", "Prototyping", "Design Systems"],
  ["TensorFlow", "PyTorch", "ML", "Python"],
  ["Node.js", "Express", "MongoDB", "GraphQL"],
  ["Rust", "Systems Programming", "WebAssembly", "Performance"],
];

const jobs = companies.map(([company, location], i) => {
  const title = titles[i % titles.length];
  const type = types[i % types.length];
  const skills = skillPools[i % skillPools.length];
  const daysAgo = (i * 2) % 45;
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const slug = company.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const min = 80000 + (i % 8) * 15000;
  const max = min + 40000 + (i % 5) * 10000;

  return {
    id: String(i + 1),
    title,
    company,
    companyLogo: `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=random&color=fff&size=128&bold=true`,
    location: type === "Remote" ? "Remote" : location,
    type,
    salaryMin: min,
    salaryMax: max,
    currency: "USD",
    postedDate: d.toISOString().split("T")[0],
    skills,
    description: `Join ${company} as a ${title}. You will work on cutting-edge products used by millions worldwide. We value innovation, collaboration, and continuous learning in a fast-paced environment.`,
    requirements: [
      "3+ years of relevant experience",
      "Strong problem-solving and communication skills",
      `Experience with ${skills.slice(0, 2).join(" and ")}`,
      "Bachelor degree in CS or equivalent experience",
    ],
    benefits: [
      "Health insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Remote work options",
      "Learning budget",
    ],
    applyUrl: `https://careers.example.com/${slug}/${i + 1}`,
  };
});

const outPath = path.join(__dirname, "..", "data", "jobs.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(jobs, null, 2));
console.log(`Generated ${jobs.length} jobs at ${outPath}`);
