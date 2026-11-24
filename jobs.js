// NS WorkLink — Job listings data
// ─────────────────────────────────────────────────────────────────────────────
// To add a job: copy one block, paste it at the end of the array, update values.
// To remove a job: delete its entire { ... } block.
// To edit a job: find it by title or id and change the values.
// ─────────────────────────────────────────────────────────────────────────────

const JOBS_DATA = [
  {
    "id": 1,
    "title": "Senior Distributed Systems Engineer",
    "company": "Aether Cloud Infrastructure",
    "initials": "AC",
    "logo": "blue",
    "department": "Platform Engineering",
    "location": "London, UK / Remote EMEA",
    "type": "Full-time",
    "workplace": "Remote",
    "experience": "Experienced",
    "posted": "Posted 18 Oct 2026",
    "salaryMin": 110000,
    "salaryMax": 145000,
    "currency": "£",
    "salaryPeriod": "yr",
    "visaSponsored": true,
    "featured": true,
    "applyUrl": "https://careers.aetherinfra.io/jobs/distributed-eng",
    "description": "Architect resilient distributed control planes and low-latency storage fabrics servicing tier-1 enterprise workloads across 14 global availability zones.",
    "responsibilities": [
      "Design and implement distributed consensus protocols at scale.",
      "Own reliability of storage fabrics across 14 global availability zones.",
      "Lead architectural reviews and mentor senior engineers.",
      "Drive zero-downtime database cluster migration projects."
    ],
    "requirements": [
      "6+ years experience in distributed systems (Go, Rust, or C++).",
      "Production experience with Raft/Paxos consensus implementations.",
      "Deep knowledge of Linux networking, eBPF, and kernel tuning.",
      "Demonstrated experience with zero-downtime database cluster migrations."
    ],
    "benefits": [
      "Worldwide private healthcare & family coverage",
      "Home office setup stipend (£2,500)",
      "Flexible working hours across UTC-2 to UTC+4",
      "Generous parental leave & 35 paid vacation days"
    ]
  },
  {
    "id": 2,
    "title": "Lead Product Designer (Design Systems)",
    "company": "FinSphere Global",
    "initials": "FG",
    "logo": "purple",
    "department": "Experience Architecture",
    "location": "Zurich, Switzerland / Hybrid",
    "type": "Full-time",
    "workplace": "Hybrid",
    "experience": "Experienced",
    "posted": "Posted 19 Oct 2026",
    "salaryMin": 135000,
    "salaryMax": 165000,
    "currency": "€",
    "salaryPeriod": "yr",
    "visaSponsored": true,
    "featured": true,
    "applyUrl": "https://finsphere.ch/careers/lead-design-system",
    "description": "Evolve a multi-platform component ecosystem used by over 40 million global institutional clients, governing design tokens, typography, accessibility, and design-to-code pipelines.",
    "responsibilities": [
      "Own design token architecture and typography rules across all platforms.",
      "Conduct accessibility audits and enforce W3C compliance.",
      "Build and maintain design-to-code pipelines with engineering teams.",
      "Lead a team of 4 product designers across web and mobile."
    ],
    "requirements": [
      "5+ years leading design systems in high-complexity fintech or SaaS.",
      "Mastery of Figma variable collections, design token architecture, and W3C accessibility.",
      "Comfortable writing React/CSS token pipelines.",
      "Strong portfolio demonstrating system-scale transformation."
    ],
    "benefits": [
      "Pension matching up to 9%",
      "Relocation assistance to Switzerland if needed",
      "Annual learning budget (€3,000)",
      "Quarterly team offsites in European hubs"
    ]
  },
  {
    "id": 3,
    "title": "Machine Learning Infrastructure Specialist",
    "company": "NeuroScale Technologies",
    "initials": "NT",
    "logo": "dark",
    "department": "Applied AI",
    "location": "Singapore / Remote APAC",
    "type": "Full-time",
    "workplace": "Remote",
    "experience": "Experienced",
    "posted": "Posted 17 Oct 2026",
    "salaryMin": 120000,
    "salaryMax": 155000,
    "currency": "$",
    "salaryPeriod": "yr",
    "visaSponsored": false,
    "featured": false,
    "applyUrl": "https://neuroscale.ai/careers/ml-infra",
    "description": "Optimize high-throughput model serving pipelines, Triton inference servers, and custom vLLM orchestration on massive multi-GPU clusters.",
    "responsibilities": [
      "Profile and optimize model inference latency on multi-GPU clusters.",
      "Maintain and extend Triton and vLLM orchestration pipelines.",
      "Collaborate with research teams to deploy new model architectures.",
      "Manage Kubernetes GPU operator and Slurm scheduling systems."
    ],
    "requirements": [
      "Strong proficiency in Python, CUDA C++, and PyTorch internals.",
      "Hands-on experience with TensorRT-LLM, Triton, and vLLM profiling.",
      "Kubernetes orchestration with GPU operator and Slurm scheduling.",
      "Experience optimizing memory bandwidth and KV-cache sharding."
    ],
    "benefits": [
      "Stock options in high-growth AI venture",
      "Global nomad travel stipend ($3,000/yr)",
      "Comprehensive wellness and mental health insurance",
      "Flexible equipment choice (Apple Silicon or Linux workstations)"
    ]
  },
  {
    "id": 4,
    "title": "International Technical Recruiter",
    "company": "Atlas Talent Partners",
    "initials": "AT",
    "logo": "green",
    "department": "People & Operations",
    "location": "Berlin, Germany",
    "type": "Full-time",
    "workplace": "Hybrid",
    "experience": "Intermediate",
    "posted": "Posted 16 Oct 2026",
    "salaryMin": 68000,
    "salaryMax": 84000,
    "currency": "€",
    "salaryPeriod": "yr",
    "visaSponsored": true,
    "featured": false,
    "applyUrl": "https://atlastalent.eu/join/recruiter",
    "description": "Drive full-lifecycle technical recruitment for high-growth tech companies expanding across Europe, North America, and Southeast Asia, specialising in cross-border visa compliance.",
    "responsibilities": [
      "Manage full-cycle recruiting for engineering and product roles.",
      "Advise candidates on EU Blue Card and UK Skilled Worker visa processes.",
      "Build talent pipelines using GitHub, LinkedIn, and developer communities.",
      "Partner with hiring managers across 3 continents."
    ],
    "requirements": [
      "3+ years technical recruiting experience in tech consulting or scaleups.",
      "Familiarity with EU Blue Card, UK Skilled Worker, and German immigration processes.",
      "Data-driven sourcing methodologies.",
      "Fluent in English; German or French is an asset."
    ],
    "benefits": [
      "Competitive base + uncapped quarterly performance incentives",
      "Deutschlandticket public transport fully paid",
      "Flexible 3 days work-from-home policy",
      "30 days annual leave"
    ]
  },
  {
    "id": 5,
    "title": "Junior Front-End Developer (React / Next.js)",
    "company": "Krypton Labs",
    "initials": "KL",
    "logo": "orange",
    "department": "Web Applications",
    "location": "Toronto, Canada / Remote",
    "type": "Full-time",
    "workplace": "Remote",
    "experience": "Entry level",
    "posted": "Posted 20 Oct 2026",
    "salaryMin": 65000,
    "salaryMax": 80000,
    "currency": "$",
    "salaryPeriod": "yr",
    "visaSponsored": false,
    "featured": false,
    "applyUrl": "https://kryptonlabs.ca/careers/junior-frontend",
    "description": "An exceptional launchpad for an aspiring engineer. Collaborate with senior developers to ship clean, accessible web applications using React, TypeScript, and modern styling libraries.",
    "responsibilities": [
      "Build and maintain React components in a TypeScript codebase.",
      "Collaborate with designers to implement pixel-perfect, accessible UIs.",
      "Write unit and integration tests for all shipped features.",
      "Participate in code reviews and learn from principal engineers."
    ],
    "requirements": [
      "Demonstrated portfolio or personal projects showcasing React & TypeScript.",
      "Solid understanding of HTML semantics, CSS flexbox/grid, and web performance.",
      "Git version control hygiene and collaborative code review practices.",
      "Strong hunger to learn and receive constructive senior code mentorship."
    ],
    "benefits": [
      "1-on-1 mentorship from principal engineers",
      "Annual hardware grant ($2,000)",
      "100% remote within North American timezones",
      "Paid conference attendance budget"
    ]
  },
  {
    "id": 6,
    "title": "Global Growth Marketing Lead",
    "company": "Veloce Mobility",
    "initials": "VM",
    "logo": "pink",
    "department": "Commercial Growth",
    "location": "Amsterdam, Netherlands / Hybrid",
    "type": "Full-time",
    "workplace": "Hybrid",
    "experience": "Experienced",
    "posted": "Posted 15 Oct 2026",
    "salaryMin": 92000,
    "salaryMax": 115000,
    "currency": "€",
    "salaryPeriod": "yr",
    "visaSponsored": true,
    "featured": false,
    "applyUrl": "https://velocemobility.com/careers/growth-lead",
    "description": "Direct a multi-market customer acquisition engine across Europe and North America, overseeing performance media, localisation, SEO content hubs, and conversion rate optimisation.",
    "responsibilities": [
      "Own paid acquisition across Google, Meta, and programmatic channels.",
      "Manage SEO content hubs and localisation for 6 European markets.",
      "Lead a team of 5 growth marketers and agency partners.",
      "Report on CPA, LTV, and ROAS to the C-suite weekly."
    ],
    "requirements": [
      "5+ years leading digital acquisition in B2C or high-velocity B2B SaaS.",
      "Proven track record managing paid budgets exceeding €250k/month.",
      "Deep fluency with Google Analytics 4, Mixpanel, and programmatic bidding.",
      "Experience managing distributed agency partners and creative teams."
    ],
    "benefits": [
      "Electric car lease program or bike subsidy",
      "Free daily catered lunches at the Amsterdam canal office",
      "Annual equity grant and performance bonus",
      "Unlimited book purchasing program"
    ]
  },
  {
    "id": 7,
    "title": "Cybersecurity Analyst & Threat Hunter",
    "company": "Apex Sentinel Security",
    "initials": "AS",
    "logo": "dark",
    "department": "Security Operations",
    "location": "Dubai, UAE",
    "type": "Full-time",
    "workplace": "On-site",
    "experience": "Intermediate",
    "posted": "Posted 14 Oct 2026",
    "salaryMin": 78000,
    "salaryMax": 98000,
    "currency": "$",
    "salaryPeriod": "yr",
    "visaSponsored": true,
    "featured": false,
    "applyUrl": "https://apexsentinel.ae/careers/threat-hunter",
    "description": "Monitor enterprise threat surfaces, perform adversary hunt cycles, investigate SIEM telemetry alerts, and lead root-cause forensics for regional financial institutions.",
    "responsibilities": [
      "Monitor and triage SIEM alerts across enterprise environments.",
      "Conduct proactive adversary hunt cycles using MITRE ATT&CK.",
      "Lead root-cause forensics for security incidents.",
      "Produce clear incident reports for executive stakeholders."
    ],
    "requirements": [
      "3+ years active SOC analysis or digital forensics incident response.",
      "Certifications such as CISSP, OSCP, or CySA+ strongly preferred.",
      "Proficiency in Splunk / Sentinel query languages and memory forensics.",
      "Understanding of MITRE ATT&CK framework mapping."
    ],
    "benefits": [
      "0% personal income tax jurisdiction (UAE)",
      "Housing allowance and annual flight ticket vouchers",
      "Full family medical coverage",
      "State-of-the-art SOC operations centre"
    ]
  },
  {
    "id": 8,
    "title": "Cloud DevOps Engineering Intern",
    "company": "Meridian Data Systems",
    "initials": "MD",
    "logo": "blue",
    "department": "Infrastructure",
    "location": "Boston, MA, USA / Remote",
    "type": "Internship",
    "workplace": "Remote",
    "experience": "Entry level",
    "posted": "Posted 20 Oct 2026",
    "salaryMin": 38,
    "salaryMax": 48,
    "currency": "$",
    "salaryPeriod": "hr",
    "visaSponsored": false,
    "featured": false,
    "applyUrl": "https://meridiandata.com/internships/devops-2026",
    "description": "A 6-month hands-on paid internship working with Terraform, AWS, Docker container registries, and GitHub Actions CI/CD workflows under senior mentorship.",
    "responsibilities": [
      "Write and maintain Terraform infrastructure-as-code modules.",
      "Manage Docker container registries and CI/CD pipelines.",
      "Assist with AWS resource monitoring and cost optimisation.",
      "Document runbooks and infrastructure changes."
    ],
    "requirements": [
      "Current student or recent graduate in Computer Science or related STEM field.",
      "Basic familiarity with Linux command line and Git.",
      "Foundational understanding of cloud fundamentals (AWS/GCP/Azure).",
      "Curiosity for infrastructure-as-code and automation."
    ],
    "benefits": [
      "Competitive hourly pay ($42/hr average)",
      "Direct pathway to full-time junior engineer offer",
      "Company laptop provided",
      "Weekly engineering brown-bag workshops"
    ]
  },
  {
    "id": 9,
    "title": "Senior Blockchain Protocol Architect",
    "company": "Solstice Cryptographic Labs",
    "initials": "SC",
    "logo": "purple",
    "department": "Core Research",
    "location": "Zug, Switzerland / Remote",
    "type": "Full-time",
    "workplace": "Remote",
    "experience": "Experienced",
    "posted": "Posted 21 Oct 2026",
    "salaryMin": 140000,
    "salaryMax": 180000,
    "currency": "$",
    "salaryPeriod": "yr",
    "visaSponsored": false,
    "featured": false,
    "applyUrl": "https://solsticelabs.org/careers/zk-protocol",
    "description": "Architect next-generation zero-knowledge rollup infrastructure, formalising consensus state transitions and verifying cryptographic proofs at scale.",
    "responsibilities": [
      "Design and implement ZK-rollup consensus state transitions.",
      "Verify cryptographic proofs and polynomial commitment schemes.",
      "Collaborate with research scientists on zero-knowledge circuit design.",
      "Write production Rust code for the core protocol layer."
    ],
    "requirements": [
      "Deep knowledge of ZK-SNARKs/STARKs and polynomial commitments.",
      "5+ years writing production Rust or C++.",
      "Solid mathematical foundation in abstract algebra and elliptic curve cryptography."
    ],
    "benefits": [
      "Token allocation package",
      "Full remote autonomy across any global timezone",
      "Annual retreat in the Swiss Alps",
      "Top-tier hardware of your choice"
    ]
  },
  {
    "id": 10,
    "title": "International Content Strategist",
    "company": "Horizon Media Group",
    "initials": "HM",
    "logo": "green",
    "department": "Editorial",
    "location": "Dublin, Ireland",
    "type": "Contract",
    "workplace": "Hybrid",
    "experience": "Intermediate",
    "posted": "Posted 21 Oct 2026",
    "salaryMin": 55000,
    "salaryMax": 70000,
    "currency": "€",
    "salaryPeriod": "yr",
    "visaSponsored": true,
    "featured": false,
    "applyUrl": "https://horizonmedia.ie/careers/content-strategist",
    "description": "Manage cross-border editorial workflows, localised brand narratives, and cultural adaptations for leading consumer technology publications in UK and European markets.",
    "responsibilities": [
      "Manage cross-border editorial workflows across 4 regional teams.",
      "Oversee localisation pipelines for UK and European market content.",
      "Conduct SEO audits and implement structured content strategies.",
      "Brief and edit freelance writers to brand and style standards."
    ],
    "requirements": [
      "4+ years content strategy or editorial management.",
      "Demonstrated experience handling multi-language translation pipelines.",
      "SEO audit tools mastery (Ahrefs, Semrush, Screaming Frog)."
    ],
    "benefits": [
      "Flexible 4-day work week trial",
      "Health & dental package",
      "Dublin tech quarter office space",
      "Annual transport allowance"
    ]
  }
];
