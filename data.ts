export type Horizon = "Day 1 (Foundation)" | "Quick Win (Process)" | "Strategic (Transformational)";
export type Department = "Overview" | "Gemini Enterprise" | "Commercial" | "Operations" | "Maintenance" | "Finance" | "Corporate & HR" | "Transformation";

export interface Agent {
  id: string;
  name: string;
  horizon: Horizon;
  department: Department;
  description: string;
  benefit: string;
  kpi: string;
  users: string;
  tools: string[];
}

export const agents: Agent[] = [
  // --- COMMERCIAL (15 Agents) ---
  {
    id: "c1",
    name: "Competitor Fare & Route Monitor",
    horizon: "Day 1 (Foundation)",
    department: "Commercial",
    description: "Autonomous market intelligence analyst continuously monitoring OTA pricing, Google Flights, and press releases to detect competitor moves.",
    benefit: "$450,000 / year",
    kpi: "Revenue Integrity & Yield Protection",
    users: "25 Revenue Analysts",
    tools: ["Web Search", "Public Data APIs"]
  },
  {
    id: "c2",
    name: "Global Visa & Regulatory Scout",
    horizon: "Day 1 (Foundation)",
    department: "Commercial",
    description: "Specialized research assistant for front-line staff querying authoritative sources (IATA, Embassies) for real-time travel requirements.",
    benefit: "$225,000 / year",
    kpi: "Customer Satisfaction (NPS) & Call AHT",
    users: "40 Call Center/Sales",
    tools: ["Deep Research", "Govt Portals"]
  },
  {
    id: "c3",
    name: "Hajj & Umrah Policy Watchdog",
    horizon: "Day 1 (Foundation)",
    department: "Commercial",
    description: "Scans Saudi Ministry of Hajj and GACA portals for regulatory changes (quotas, transport) to prevent operational misalignment.",
    benefit: "$675,000 / year",
    kpi: "Operational Efficiency & Risk Avoidance",
    users: "15 Ops Committee",
    tools: ["Translation", "News Aggregator"]
  },
  {
    id: "c4",
    name: "Corporate Prospector Agent",
    horizon: "Day 1 (Foundation)",
    department: "Commercial",
    description: "Utilizes public search to identify potential corporate clients and key decision-makers in target sectors (Mining, Oil & Gas).",
    benefit: "$337,500 / year",
    kpi: "Sales Pipeline Velocity",
    users: "30 Sales Managers",
    tools: ["LinkedIn", "Company News"]
  },
  {
    id: "c5",
    name: "Brand Sentiment Sentinel",
    horizon: "Day 1 (Foundation)",
    department: "Commercial",
    description: "Monitors social media for high-risk topics (safety, delays) to alert PR teams instantly, protecting brand equity.",
    benefit: "$112,500 / year",
    kpi: "Brand Equity Protection",
    users: "10 Comms Staff",
    tools: ["Social Listening", "Sentiment Analysis"]
  },
  {
    id: "c6",
    name: "RFP Response & Proposal Agent",
    horizon: "Quick Win (Process)",
    department: "Commercial",
    description: "Drafts complete corporate sales proposals by querying internal Drive folders for past contracts, safety records, and fleet specs.",
    benefit: "$1,250,000 / year",
    kpi: "Sales Conversion Rate",
    users: "45 Sales Managers",
    tools: ["Google Drive", "Docs", "Salesforce"]
  },
  {
    id: "c7",
    name: "Agency Debit Memo (ADM) Resolver",
    horizon: "Quick Win (Process)",
    department: "Commercial",
    description: "Automates the dispute resolution for travel agency booking violations by checking PNR history and drafting replies.",
    benefit: "$672,000 / year",
    kpi: "Cost Recovery & Revenue Leakage",
    users: "15 Analysts",
    tools: ["Gmail", "Billing Systems"]
  },
  {
    id: "c8",
    name: "Marketing Asset Coordinator",
    horizon: "Quick Win (Process)",
    department: "Commercial",
    description: "Locates approved digital assets across Drive folders using image recognition and metadata for hyper-local campaigns.",
    benefit: "$337,500 / year",
    kpi: "Time-to-Market",
    users: "30 Marketing Staff",
    tools: ["Drive", "Jira", "Image Rec"]
  },
  {
    id: "c9",
    name: "Customer Complaint Analyzer",
    horizon: "Quick Win (Process)",
    department: "Commercial",
    description: "Analyzes unstructured complaint text, tags root causes, routes to departments, and drafts initial apologies.",
    benefit: "$562,500 / year",
    kpi: "Churn Reduction & Response Time",
    users: "50 Support Agents",
    tools: ["Salesforce Service Cloud", "NLP"]
  },
  {
    id: "c10",
    name: "Commercial Policy Knowledge Bot",
    horizon: "Quick Win (Process)",
    department: "Commercial",
    description: "Ingests PDF manuals (refunds, baggage) to answer staff queries instantly, reducing errors and hold times.",
    benefit: "$900,000 / year",
    kpi: "Productivity Efficiency",
    users: "200 Commercial Staff",
    tools: ["Drive", "Sharepoint"]
  },
  {
    id: "c11",
    name: "Intelligent Interline Settlement",
    horizon: "Strategic (Transformational)",
    department: "Commercial",
    description: "Audits interline billing data against Proration Agreements to detect underpayments and draft Rejection Memos.",
    benefit: "$3,500,000 / year",
    kpi: "Revenue Recovery",
    users: "10 Rev Accounting",
    tools: ["Clearing House Data", "Proration Engine"]
  },
  {
    id: "c12",
    name: "Hajj Operations Command",
    horizon: "Strategic (Transformational)",
    department: "Commercial",
    description: "Synthesizes real-time data (Saudi ports, flight ops, ground handling) to predict delays and optimize logistics.",
    benefit: "$5,200,000 / year",
    kpi: "Ops Cost Reduction",
    users: "25 Ops Staff",
    tools: ["Fleet Mgmt", "Saudi Portals"]
  },
  {
    id: "c13",
    name: "Dynamic Loyalty Fraud Prevention",
    horizon: "Strategic (Transformational)",
    department: "Commercial",
    description: "Monitors redemptions in real-time using pattern recognition to flag Account Takeovers or broker fraud.",
    benefit: "$1,100,000 / year",
    kpi: "Fraud Loss Prevention",
    users: "8 Fraud Analysts",
    tools: ["GarudaMiles DB", "Transaction Logs"]
  },
  {
    id: "c14",
    name: "Predictive Corporate Pricing",
    horizon: "Strategic (Transformational)",
    department: "Commercial",
    description: "Analyzes flown revenue vs contract commitments to suggest dynamic mid-cycle discount adjustments.",
    benefit: "$2,800,000 / year",
    kpi: "Yield / RASK Uplift",
    users: "15 Pricing Analysts",
    tools: ["Historical Sales", "Fare DB"]
  },
  {
    id: "c15",
    name: "Hyper-Local Ancillary Engine",
    horizon: "Strategic (Transformational)",
    department: "Commercial",
    description: "Builds 360-degree passenger profiles to generate personalized pre-flight offers (golf clubs, extra bags).",
    benefit: "$1,900,000 / year",
    kpi: "Ancillary Revenue Growth",
    users: "40 Ancillary Staff",
    tools: ["Pax Profile DB", "Inventory"]
  },

  // --- MAINTENANCE (15 Agents) ---
  {
    id: "o1",
    name: "MRO Technical Librarian",
    horizon: "Day 1 (Foundation)",
    department: "Maintenance",
    description: "Multimodal RAG system ingesting AMMs, IPCs, and WDMs to answer technician queries with direct PDF citations.",
    benefit: "Reduces research time by 50%",
    kpi: "MTTR Reduction",
    users: "GMF Technicians",
    tools: ["Vertex AI Search", "OEM Manuals"]
  },
  {
    id: "o2",
    name: "Regulatory Compliance Sentinel",
    horizon: "Day 1 (Foundation)",
    department: "Maintenance",
    description: "Monitors DGCA/FAA/EASA for new ADs and cross-references with fleet configuration to assess impact.",
    benefit: "Avoidance of regulatory grounding",
    kpi: "Compliance Rate",
    users: "Quality Assurance",
    tools: ["Regulatory Portals", "Fleet DB"]
  },
  {
    id: "o6",
    name: "Predictive Maintenance Triage",
    horizon: "Quick Win (Process)",
    department: "Maintenance",
    description: "Analyzes ACARS sensor trends to predict failures and draft pre-emptive replacement orders.",
    benefit: "Increases Aircraft Utilization",
    kpi: "Unscheduled Removal Rate",
    users: "Maintenance Control",
    tools: ["ACARS", "ML Models"]
  },
  {
    id: "m1",
    name: "Hangar Slot Optimizer",
    horizon: "Quick Win (Process)",
    department: "Maintenance",
    description: "Optimizes hangar bay allocation based on incoming aircraft defects, labor availability, and tool requirements.",
    benefit: "Increased Hangar Throughput",
    kpi: "Turnaround Time (TAT)",
    users: "Base Maintenance Planners",
    tools: ["Scheduling Engine", "ERP"]
  },
  {
    id: "m2",
    name: "Tooling & Calibration Tracker",
    horizon: "Day 1 (Foundation)",
    department: "Maintenance",
    description: "Tracks expiration of tool calibration certificates and locates shared specialized tooling across hangars.",
    benefit: "Prevents Work Stoppages",
    kpi: "Tool Availability Rate",
    users: "Tool Crib Mgrs",
    tools: ["Inventory DB", "Barcode"]
  },
  {
    id: "m3",
    name: "Line Maintenance Dispatcher",
    horizon: "Quick Win (Process)",
    department: "Maintenance",
    description: "Automates the assignment of engineers to arriving aircraft based on gate location, skills, and turnaround time.",
    benefit: "Reduced Delays",
    kpi: "Technician Utilization",
    users: "Line Station Mgrs",
    tools: ["Ops System", "Location API"]
  },
  {
    id: "m4",
    name: "Warranty & Guarantee Hunter",
    horizon: "Quick Win (Process)",
    department: "Maintenance",
    description: "Automatically flags removed parts that are still under OEM warranty to initiate claim processes.",
    benefit: "$2M+ Cost Recovery",
    kpi: "Warranty Recovery Rate",
    users: "Supply Chain",
    tools: ["Purchase History", "Contracts"]
  },
  {
    id: "m5",
    name: "Structural Health Mapper",
    horizon: "Strategic (Transformational)",
    department: "Maintenance",
    description: "Digital twin mapping of dent and buckle charts to track structural repairs and plan future skin work.",
    benefit: "Faster Lease Returns",
    kpi: "Structural Audit Time",
    users: "Structure Engineers",
    tools: ["3D Models", "Scan Data"]
  },
  {
    id: "m6",
    name: "Heavy Maintenance Critical Path",
    horizon: "Strategic (Transformational)",
    department: "Maintenance",
    description: "AI project manager that constantly recalculates the critical path for C/D checks based on finding reports.",
    benefit: "Reduced TAT Overage",
    kpi: "Check TAT Adherence",
    users: "Check Managers",
    tools: ["Project Mgmt", "Jira"]
  },
  {
    id: "m7",
    name: "Cabin Condition & Defect Grouper",
    horizon: "Quick Win (Process)",
    department: "Maintenance",
    description: "Clusters similar cabin defects (e.g., broken IFE at 12A, 12B) to generate single efficient work orders.",
    benefit: "Technician Efficiency",
    kpi: "Cabin Serviceability",
    users: "Cabin Maint",
    tools: ["Cabin Logs", "NLP"]
  },
  {
    id: "m8",
    name: "Vendor Repair Order Chaser",
    horizon: "Quick Win (Process)",
    department: "Maintenance",
    description: "Automated agent that emails external repair shops for status updates on components sent for overhaul.",
    benefit: "Reduced Inventory Holding",
    kpi: "Avg Repair Turnaround",
    users: "Material Planning",
    tools: ["Email", "ERP"]
  },
  {
    id: "m9",
    name: "Reliability Program Analyst",
    horizon: "Strategic (Transformational)",
    department: "Maintenance",
    description: "Generates mandatory monthly reliability reports by synthesizing PIREPS, MAREPS, and component removal data.",
    benefit: "Engineering Productivity",
    kpi: "Report Cycle Time",
    users: "Reliability Eng",
    tools: ["Data Warehouse", "Report Gen"]
  },
  {
    id: "m10",
    name: "AD/SB Cost Modeler",
    horizon: "Strategic (Transformational)",
    department: "Maintenance",
    description: "Estimates total cost (parts + manhours + downtime) for optional Service Bulletins to aid decision making.",
    benefit: "ROI-based Maintenance",
    kpi: "Mod Budget Accuracy",
    users: "Engineering Directors",
    tools: ["OEM Bulletins", "Cost DB"]
  },
  {
    id: "m11",
    name: "Part Interchangeability Genius",
    horizon: "Day 1 (Foundation)",
    department: "Maintenance",
    description: "Instantly identifies allowable alternative part numbers (NHA/IPC) when requested parts are out of stock.",
    benefit: "AOG Avoidance",
    kpi: "Fill Rate Improvement",
    users: "Material Services",
    tools: ["IPC", "Inventory DB"]
  },
  {
    id: "o13",
    name: "Digital Twin Engine Monitor",
    horizon: "Strategic (Transformational)",
    department: "Maintenance",
    description: "Simulates engine life based on specific route conditions to optimize overhaul schedules and defer CapEx.",
    benefit: "Capital Expenditure Deferral",
    kpi: "Engine On-Wing Time",
    users: "Powerplant Engineering",
    tools: ["Digital Twin", "Physics Models"]
  },

  // --- OPERATIONS (15 Agents) ---
  {
    id: "o3",
    name: "Intelligent Crew Briefing",
    horizon: "Day 1 (Foundation)",
    department: "Operations",
    description: "Filters flight packages to generate concise executive summaries of NOTAMs and Weather threats for pilots.",
    benefit: "Enhanced Safety Awareness",
    kpi: "Safety Audit Scores",
    users: "Flight Crew",
    tools: ["Flight Plan", "NOTAMs/Weather"]
  },
  {
    id: "o4",
    name: "Operational Procurement Guide",
    horizon: "Day 1 (Foundation)",
    department: "Operations",
    description: "Chatbot for station managers to query spending limits and identify contract vendors for urgent supplies.",
    benefit: "Prevents cost leakage",
    kpi: "Procurement Compliance",
    users: "Station Managers",
    tools: ["SAP", "Policy Docs"]
  },
  {
    id: "o5",
    name: "Pass-Down Shift Agent",
    horizon: "Day 1 (Foundation)",
    department: "Operations",
    description: "Monitors logs and comms to auto-generate shift handover briefs, ensuring continuity in OCC/MCC.",
    benefit: "Prevents comms-related delays",
    kpi: "Operational Continuity",
    users: "Duty Managers",
    tools: ["Slack", "Ops Logs"]
  },
  {
    id: "o7",
    name: "The Fuel Coach",
    horizon: "Quick Win (Process)",
    department: "Operations",
    description: "Analyzes QAR data post-flight to give personalized fuel efficiency feedback to pilots.",
    benefit: "$5M - $10M / year (Est)",
    kpi: "Fuel Burn per ASK",
    users: "Pilots",
    tools: ["QAR Data", "Flight Plans"]
  },
  {
    id: "o8",
    name: "Turnaround Coordinator (Ramp Hawk)",
    horizon: "Quick Win (Process)",
    department: "Operations",
    description: "Monitors ground handling timestamps and alerts stakeholders of critical path delays (catering, fuel).",
    benefit: "Proactive OTP Recovery",
    kpi: "On-Time Performance",
    users: "Station Managers",
    tools: ["Ground Handling System"]
  },
  {
    id: "o9",
    name: "Automated Crew Swapping",
    horizon: "Quick Win (Process)",
    department: "Operations",
    description: "Instantly scans reserve pools for legal/qualified crew when sickness occurs and sends automated offers.",
    benefit: "90% reduction in rescheduling time",
    kpi: "Crew-Related Delays",
    users: "Crew Schedulers",
    tools: ["Rostering System", "Crew App"]
  },
  {
    id: "o10",
    name: "Cargo Space Optimizer",
    horizon: "Quick Win (Process)",
    department: "Operations",
    description: "Uses 3D bin-packing algorithms to simulate and optimize cargo loading for passenger bellies.",
    benefit: "Increases Cargo Load Factor",
    kpi: "Revenue per Flight",
    users: "Load Masters",
    tools: ["Cargo Manifest", "3D Algo"]
  },
  {
    id: "o11",
    name: "IROPS Recovery Orchestrator",
    horizon: "Strategic (Transformational)",
    department: "Operations",
    description: "Swarm intelligence to solve complex disruption scenarios (aircraft, crew, pax) and recommend optimal recovery.",
    benefit: "Reduces Cost of Disruption",
    kpi: "Recovery Time",
    users: "OCC Directors",
    tools: ["Multi-Agent System"]
  },
  {
    id: "o12",
    name: "Dynamic Network Adjuster",
    horizon: "Strategic (Transformational)",
    department: "Operations",
    description: "Recommends tail swaps (e.g., B777 to A330) based on daily demand fluctuations to maximize profitability.",
    benefit: "Maximize Yield per ASK",
    kpi: "Route Profitability",
    users: "Network Planning",
    tools: ["Commercial Data", "Ops Data"]
  },
  {
    id: "o14",
    name: "Autonomous Pax Concierge",
    horizon: "Strategic (Transformational)",
    department: "Operations",
    description: "Initiates outbound voice/chat to rebook passengers during disruptions instantly.",
    benefit: "NPS Retention & Call Center Savings",
    kpi: "Pax Recovery Speed",
    users: "Customer Care",
    tools: ["PSS", "Voice AI"]
  },
  {
    id: "o15",
    name: "The Garuda Brain",
    horizon: "Strategic (Transformational)",
    department: "Operations",
    description: "Enterprise Knowledge Graph linking Ops, Finance, and Commercial silos for strategic Q&A.",
    benefit: "Strategic Agility",
    kpi: "Decision Velocity",
    users: "C-Suite",
    tools: ["Enterprise Knowledge Graph"]
  },
  {
    id: "o16",
    name: "Catering Waste Optimizer",
    horizon: "Quick Win (Process)",
    department: "Operations",
    description: "Analyzes consumption data per route to optimize catering load, reducing weight and food waste.",
    benefit: "Lower Fuel & Catering Costs",
    kpi: "Waste per Passenger",
    users: "Catering Managers",
    tools: ["Consumption Logs", "ERP"]
  },
  {
    id: "o17",
    name: "Slot Portfolio Manager",
    horizon: "Strategic (Transformational)",
    department: "Operations",
    description: "Tracks airport slot usage rules (80/20 rule) to prevent slot loss and identifies trading opportunities.",
    benefit: "Asset Protection",
    kpi: "Slot Retention Rate",
    users: "Slot Coordinators",
    tools: ["Airport Data", "Regulation DB"]
  },
  {
    id: "o18",
    name: "Pilot Fatigue Risk Monitor",
    horizon: "Day 1 (Foundation)",
    department: "Operations",
    description: "Predictive model that integrates rosters and actual flight times to flag high fatigue risk pairings.",
    benefit: "Safety & Compliance",
    kpi: "Fatigue Reports",
    users: "Safety Team",
    tools: ["Rostering", "Bio-Math Models"]
  },
  {
    id: "o19",
    name: "GSE Telematics Tracker",
    horizon: "Quick Win (Process)",
    department: "Operations",
    description: "Monitors location and fuel status of Ground Service Equipment to optimize utilization and refueling.",
    benefit: "Asset Utilization",
    kpi: "GSE Availability",
    users: "Ground Ops",
    tools: ["GPS", "IoT Sensors"]
  },

  // --- TRANSFORMATION (15 Agents) ---
  {
    id: "t1",
    name: "Transformation Program Tracker",
    horizon: "Day 1 (Foundation)",
    department: "Transformation",
    description: "Centralized agent monitoring all 60+ AI initiatives, tracking milestones, budget burn, and alerting on blockers.",
    benefit: "Program Visibility & Governance",
    kpi: "Initiative Success Rate",
    users: "Transformation Office",
    tools: ["Jira", "Project Online"]
  },
  {
    id: "t2",
    name: "Change Management Pulse",
    horizon: "Quick Win (Process)",
    department: "Transformation",
    description: "Analyzes employee feedback, slack sentiment, and survey results to measure adoption barriers for new AI tools.",
    benefit: "Accelerated Adoption",
    kpi: "Employee Adoption Rate",
    users: "Change Managers",
    tools: ["Workplace", "Forms"]
  },
  {
    id: "t3",
    name: "Innovation Scout",
    horizon: "Strategic (Transformational)",
    department: "Transformation",
    description: "Continuously scans the aviation tech landscape (startups, patents) to recommend new POC opportunities.",
    benefit: "Future-Proofing Strategy",
    kpi: "Innovation Pipeline Value",
    users: "Strategy Directors",
    tools: ["Crunchbase", "TechCrunch"]
  },
  {
    id: "t4",
    name: "Digital Capability Assessor",
    horizon: "Quick Win (Process)",
    department: "Transformation",
    description: "Automated assessment tool for departments to self-evaluate their data maturity and readiness for AI adoption.",
    benefit: "Targeted Upskilling",
    kpi: "Digital Maturity Score",
    users: "Dept Heads",
    tools: ["LMS", "HRIS"]
  },
  {
    id: "t5",
    name: "Data Governance Sentinel",
    horizon: "Day 1 (Foundation)",
    department: "Transformation",
    description: "Automates data lineage mapping and quality checks across the Enterprise Data Warehouse to ensure reliable AI inputs.",
    benefit: "Data Trust & Compliance",
    kpi: "Data Quality Score",
    users: "Data Stewards",
    tools: ["BigQuery", "Collibra"]
  },
  {
    id: "t6",
    name: "Legacy Code Modernizer",
    horizon: "Strategic (Transformational)",
    department: "Transformation",
    description: "Analyzes legacy application codebases to identify dependencies and draft refactoring plans for cloud migration.",
    benefit: "Tech Debt Reduction",
    kpi: "Migration Velocity",
    users: "Enterprise Architects",
    tools: ["GitHub Copilot", "SonarQube"]
  },
  {
    id: "t7",
    name: "Sustainability Impact Tracker",
    horizon: "Quick Win (Process)",
    department: "Transformation",
    description: "Calculates the carbon footprint reduction of digital initiatives (e.g., paperless cockpit, flight path opt) for ESG reporting.",
    benefit: "ESG Rating Improvement",
    kpi: "Carbon Emissions Avoided",
    users: "Sustainability Team",
    tools: ["PowerBI", "Fuel Data"]
  },
  {
    id: "t8",
    name: "Agile Squad Coach",
    horizon: "Quick Win (Process)",
    department: "Transformation",
    description: "AI-driven agile coach analyzing Jira sprint metrics to suggest process improvements and remove bottlenecks.",
    benefit: "Delivery Velocity",
    kpi: "Sprint Completion Rate",
    users: "Scrum Masters",
    tools: ["Jira", "Slack"]
  },
  {
    id: "t9",
    name: "Vendor Tech Radar",
    horizon: "Strategic (Transformational)",
    department: "Transformation",
    description: "Continuously evaluates the vendor landscape for overlapping toolsets to consolidate licenses and reduce IT spend.",
    benefit: "IT Opex Reduction",
    kpi: "License Cost Savings",
    users: "IT Procurement",
    tools: ["Gartner", "Vendor Contracts"]
  },
  {
    id: "t10",
    name: "Cloud FinOps Optimizer",
    horizon: "Quick Win (Process)",
    department: "Transformation",
    description: "Analyzes cloud utilization (GCP/AWS) to recommend rightsizing, spot instances, and idle resource termination.",
    benefit: "Cloud Cost Savings",
    kpi: "Monthly Cloud Bill",
    users: "DevOps",
    tools: ["Cloud Billing", "Usage Logs"]
  },
  {
    id: "t11",
    name: "Cyber Threat Hunter",
    horizon: "Strategic (Transformational)",
    department: "Transformation",
    description: "Uses behavioral analytics to detect anomalous network patterns indicating potential APTs or ransomware attempts.",
    benefit: "Security Posture",
    kpi: "Mean Time to Detect",
    users: "InfoSec",
    tools: ["SIEM", "Network Logs"]
  },
  {
    id: "t12",
    name: "API & Integration Documenter",
    horizon: "Day 1 (Foundation)",
    department: "Transformation",
    description: "Automatically generates and updates Swagger/OpenAPI documentation by scanning code repositories.",
    benefit: "Developer Productivity",
    kpi: "Doc Freshness",
    users: "Developers",
    tools: ["Code Repos", "Swagger"]
  },
  {
    id: "t13",
    name: "Data Privacy & PII Masker",
    horizon: "Day 1 (Foundation)",
    department: "Transformation",
    description: "Scans lower environments and testing datasets to automatically detect and mask Passenger PII.",
    benefit: "GDPR/PDP Compliance",
    kpi: "Data Leak Incidents",
    users: "QA Engineers",
    tools: ["DLP Tools", "Test Data"]
  },
  {
    id: "t14",
    name: "Model Drift & Bias Monitor",
    horizon: "Strategic (Transformational)",
    department: "Transformation",
    description: "Continuously evaluates deployed AI models for accuracy drift and bias against protected groups.",
    benefit: "Responsible AI",
    kpi: "Model F1 Score",
    users: "Data Scientists",
    tools: ["Vertex AI Monitoring"]
  },
  {
    id: "t15",
    name: "RPA Process Miner",
    horizon: "Quick Win (Process)",
    department: "Transformation",
    description: "Analyzes user interaction logs to identify repetitive manual tasks suitable for RPA automation.",
    benefit: "Process Automation Pipeline",
    kpi: "Hours Automated",
    users: "Process Analysts",
    tools: ["Process Mining Logs"]
  },

  // --- FINANCE (15 Agents) ---
  {
    id: "f1",
    name: "Fuel Hedging Sentiment Analyst",
    horizon: "Day 1 (Foundation)",
    department: "Finance",
    description: "Scans global financial news and geopolitical events to synthesize market sentiment scores for hedging decisions.",
    benefit: "$2M - $5M / year",
    kpi: "Hedge Effectiveness",
    users: "15 Treasury",
    tools: ["Web Search", "Deep Research"]
  },
  {
    id: "f2",
    name: "Global Tax & Regulatory Scout",
    horizon: "Day 1 (Foundation)",
    department: "Finance",
    description: "Monitors international tax codes and aviation levies to prevent non-compliance penalties.",
    benefit: "$500k - $1.5M / year",
    kpi: "Penalty Avoidance",
    users: "25 Tax/Legal",
    tools: ["Deep Research", "Translation"]
  },
  {
    id: "f3",
    name: "Competitor Financial Benchmark",
    horizon: "Day 1 (Foundation)",
    department: "Finance",
    description: "Extracts and normalizes financial metrics from competitor annual reports for instant strategic comparison.",
    benefit: "$200k - $500k / year",
    kpi: "Strategic Agility",
    users: "40 FP&A",
    tools: ["Doc Analysis", "File Upload"]
  },
  {
    id: "f4",
    name: "Macro Risk Scenario Gen",
    horizon: "Day 1 (Foundation)",
    department: "Finance",
    description: "Generates detailed narrative risk scenarios (e.g., IDR depreciation) to stress-test business plans.",
    benefit: "High Intangible Value",
    kpi: "Risk Mitigation",
    users: "20 Risk Mgmt",
    tools: ["Reasoning", "Web Search"]
  },
  {
    id: "f5",
    name: "Procurement Market Research",
    horizon: "Day 1 (Foundation)",
    department: "Finance",
    description: "Benchmarks incoming vendor quotes against real-time market prices to provide negotiation leverage.",
    benefit: "$300k - $800k / year",
    kpi: "Cost Savings %",
    users: "50 Procurement",
    tools: ["Shopping Search", "Price Comp"]
  },
  {
    id: "f6",
    name: "Auto Invoice Reconciliation",
    horizon: "Quick Win (Process)",
    department: "Finance",
    description: "Reads invoices via OCR, matches with POs, and autonomously drafts dispute emails for discrepancies.",
    benefit: "$1.2M - $2.5M / year",
    kpi: "Processing Cost Reduction",
    users: "80 AP/AR",
    tools: ["Gmail", "Drive", "OCR"]
  },
  {
    id: "f7",
    name: "Lease Contract Monitor",
    horizon: "Quick Win (Process)",
    department: "Finance",
    description: "Crawls lease contracts to track Redelivery Notice windows and alert management to prevent auto-extensions.",
    benefit: "$1.5M - $3M / year",
    kpi: "Avoided Penalties",
    users: "30 Fleet Finance",
    tools: ["Drive", "Calendar"]
  },
  {
    id: "f8",
    name: "Risk Committee Tracker",
    horizon: "Quick Win (Process)",
    department: "Finance",
    description: "Transcribes meetings, summarizes decisions, and tracks action items in a central log for governance.",
    benefit: "$150k - $300k / year",
    kpi: "Decision Velocity",
    users: "100 Mgmt",
    tools: ["Meet", "Docs"]
  },
  {
    id: "f9",
    name: "Finance Policy Helpdesk",
    horizon: "Quick Win (Process)",
    department: "Finance",
    description: "Internal chatbot answering staff queries on travel expenses and reimbursement policies.",
    benefit: "$400k / year",
    kpi: "Ticket Reduction",
    users: "All Staff",
    tools: ["Confluence", "Drive"]
  },
  {
    id: "f10",
    name: "Vendor Onboarding Agent",
    horizon: "Quick Win (Process)",
    department: "Finance",
    description: "Manages compliance document collection and validation for new vendors via email automation.",
    benefit: "$100k - $250k / year",
    kpi: "Cycle Time Reduction",
    users: "40 Procurement",
    tools: ["Outlook", "Forms"]
  },
  {
    id: "f11",
    name: "Lease Return Condition Agent",
    horizon: "Strategic (Transformational)",
    department: "Finance",
    description: "Bridges AMOS and Lease Contracts to forecast redelivery liabilities and advise on part installation.",
    benefit: "$10M - $25M / year",
    kpi: "Maint Reserve Savings",
    users: "50 Tech/Fin",
    tools: ["SAP", "AMOS"]
  },
  {
    id: "f12",
    name: "Revenue Leakage Audit",
    horizon: "Strategic (Transformational)",
    department: "Finance",
    description: "Audits 100% of tickets sold vs flown to detect fare rule violations and issue ADMs.",
    benefit: "$5M - $10M / year",
    kpi: "Recovered Revenue",
    users: "40 Rev Acct",
    tools: ["Flown Data", "Sales Data"]
  },
  {
    id: "f13",
    name: "Predictive Fuel Cost Opt",
    horizon: "Strategic (Transformational)",
    department: "Finance",
    description: "Automates tankering calculations per flight leg based on real-time station fuel prices and burn penalties.",
    benefit: "$8M - $15M / year",
    kpi: "Fuel Burn Reduction",
    users: "20 Ops/Fin",
    tools: ["Flight Ops", "Fuel Sys"]
  },
  {
    id: "f14",
    name: "Dynamic Hajj Profitability",
    horizon: "Strategic (Transformational)",
    department: "Finance",
    description: "Simulates Hajj flight rotations to maximize margin per pilgrim by balancing slots and crew costs.",
    benefit: "$3M - $7M / year",
    kpi: "Margin per Pilgrim",
    users: "30 Commercial",
    tools: ["Scheduling", "Costing"]
  },
  {
    id: "f15",
    name: "Integrated Cash Flow Agent",
    horizon: "Strategic (Transformational)",
    department: "Finance",
    description: "Predicts cash inflows/outflows based on booking velocity and payment schedules for real-time liquidity views.",
    benefit: "$2M - $4M / year",
    kpi: "Working Capital Opt",
    users: "15 Treasury",
    tools: ["Banks", "ERP"]
  },

  // --- CORPORATE & HR (15 Agents) ---
  {
    id: "h1",
    name: "RTS Regulatory Analyst",
    horizon: "Day 1 (Foundation)",
    department: "Corporate & HR",
    description: "Synthesizes OEM docs and ADs to accelerate Return to Service (RTS) compliance checks.",
    benefit: "$1.2M - $2.5M",
    kpi: "RTS Lead Time",
    users: "50 Engineers",
    tools: ["Deep Research", "NotebookLM"]
  },
  {
    id: "h2",
    name: "HR Policy Compliance Advisor",
    horizon: "Day 1 (Foundation)",
    department: "Corporate & HR",
    description: "Researches and interprets labor laws (Omnibus Law) and internal regulations for complex HR queries.",
    benefit: "$600k - $900k",
    kpi: "Legal Risk Mitigation",
    users: "300 HR Staff",
    tools: ["Deep Research"]
  },
  {
    id: "h3",
    name: "Training Content Architect",
    horizon: "Day 1 (Foundation)",
    department: "Corporate & HR",
    description: "Generates course outlines, scripts, and quizzes from technical manuals for the Training Center.",
    benefit: "$400k - $650k",
    kpi: "Content Dev Cost",
    users: "100 Trainers",
    tools: ["Media Gen"]
  },
  {
    id: "h4",
    name: "Enterprise IT Service Agent",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Autonomous Tier-1 IT support handling access requests, password resets, and basic troubleshooting.",
    benefit: "$2.5M - $4.0M",
    kpi: "Support Cost / Ticket",
    users: "11,000 Employees",
    tools: ["ServiceNow", "Jira"]
  },
  {
    id: "h5",
    name: "HR Onboarding Assistant",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Automates document collection, reminders, and validation for flight crew and ground staff onboarding.",
    benefit: "$1.0M - $1.8M",
    kpi: "Admin Cost Reduction",
    users: "11,000 Employees",
    tools: ["Workday", "Gmail"]
  },
  {
    id: "h6",
    name: "Strategic Meeting Synthesizer",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Records and diarizes executive meetings, extracting decisions and populating tracking logs.",
    benefit: "$500k - $900k",
    kpi: "Mgmt Productivity",
    users: "300 Execs",
    tools: ["Meet", "Calendar"]
  },
  {
    id: "h7",
    name: "Talent Acquisition Scout",
    horizon: "Day 1 (Foundation)",
    department: "Corporate & HR",
    description: "Screens inbound resumes against job descriptions to shortlist candidates and draft interview questions.",
    benefit: "Faster Time-to-Hire",
    kpi: "Hiring Cycle Time",
    users: "Recruitment Team",
    tools: ["LinkedIn", "ATS"]
  },
  {
    id: "h8",
    name: "Legal Contract Sentinel",
    horizon: "Day 1 (Foundation)",
    department: "Corporate & HR",
    description: "First-pass review of standard NDAs and vendor contracts to flag clauses deviating from corporate playbooks.",
    benefit: "Legal Team Efficiency",
    kpi: "Contract Review Time",
    users: "Legal Counsel",
    tools: ["Doc Analysis", "OCR"]
  },
  {
    id: "h9",
    name: "Corporate Travel Desk Agent",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Optimizes internal staff travel booking (Duty Travel) by finding cheapest own-metal options and hotels.",
    benefit: "Duty Travel Savings",
    kpi: "Travel Budget Adherence",
    users: "All Staff",
    tools: ["Booking Engine", "Policy DB"]
  },
  {
    id: "h10",
    name: "Expat Pilot Visa Manager",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Tracks work permit expirations for expatriate pilots and automates renewal document collection.",
    benefit: "Crew Availability",
    kpi: "Visa Compliance Rate",
    users: "Crew HR",
    tools: ["Govt Portals", "Email"]
  },
  {
    id: "h11",
    name: "Crisis Communication Drafter",
    horizon: "Strategic (Transformational)",
    department: "Corporate & HR",
    description: "Instantly drafts press releases and internal memos during operational incidents based on facts entered.",
    benefit: "Reputation Management",
    kpi: "Response Time",
    users: "Corp Comms",
    tools: ["Templates", "Generative AI"]
  },
  {
    id: "h12",
    name: "Facility Energy Optimizer",
    horizon: "Strategic (Transformational)",
    department: "Corporate & HR",
    description: "Analyzes smart meter data from HQ and hangars to recommend HVAC adjustments for energy savings.",
    benefit: "Utility Cost Reduction",
    kpi: "Energy Usage per Sqm",
    users: "Facility Managers",
    tools: ["IoT Sensors", "BMS"]
  },
  {
    id: "h13",
    name: "Benefits & Payroll Concierge",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Answers complex employee questions about insurance coverage, tax withholding, and payroll dates.",
    benefit: "HR Service Quality",
    kpi: "Ticket Deflection Rate",
    users: "All Employees",
    tools: ["Payroll DB", "Policy Docs"]
  },
  {
    id: "h14",
    name: "Whistleblower & Ethics Intake",
    horizon: "Day 1 (Foundation)",
    department: "Corporate & HR",
    description: "Secure, anonymous intake bot for ethics violations that categorizes reports for compliance review.",
    benefit: " Governance & Compliance",
    kpi: "Risk Detection",
    users: "Internal Audit",
    tools: ["Secure Forms", "Encryption"]
  },
  {
    id: "h15",
    name: "Performance Review Synthesizer",
    horizon: "Quick Win (Process)",
    department: "Corporate & HR",
    description: "Helps managers write performance reviews by summarizing employee achievements and feedback from the year.",
    benefit: "Manager Productivity",
    kpi: "Review Completion Rate",
    users: "People Managers",
    tools: ["HRIS", "Feedback Logs"]
  }
];