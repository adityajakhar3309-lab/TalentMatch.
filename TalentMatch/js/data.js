// TalentMatch prototype source — split from the complete working prototype.
const KEY={jobs:'talentmatch_jobs',profiles:'talentmatch_profiles',apps:'talentmatch_applications',prefs:'talentmatch_prefs'};
const seedJobs=[
{jobId:'j1',title:'Frontend Developer',company:'NovaStack',source:'TechBoard',location:'Bengaluru',remote:true,jobType:'Full-time',requiredSkills:['JavaScript','React','HTML','CSS'],niceSkills:['TypeScript','Jest'],minYears:1,postedAt:'2026-11-20',description:'Build accessible interfaces and reusable frontend components for a growing product team.'},
{jobId:'j2',title:'Junior Backend Engineer',company:'CloudNest',source:'Launchpad',location:'Hyderabad',remote:false,jobType:'Full-time',requiredSkills:['Python','SQL','REST APIs'],niceSkills:['Docker','Redis'],minYears:0,postedAt:'2026-11-19',description:'Help develop and maintain APIs, data workflows, and backend services.'},
{jobId:'j3',title:'Data Analyst Intern',company:'MetricMint',source:'CareerHub',location:'Remote',remote:true,jobType:'Internship',requiredSkills:['SQL','Python','Excel'],niceSkills:['Power BI','Statistics'],minYears:0,postedAt:'2026-11-21',description:'Analyze product and business data, build dashboards, and communicate insights.'},
{jobId:'j4',title:'Full Stack Developer',company:'Orbit Labs',source:'TechBoard',location:'Mumbai',remote:true,jobType:'Full-time',requiredSkills:['JavaScript','Node.js','React','SQL'],niceSkills:['AWS','Docker'],minYears:2,postedAt:'2026-11-17',description:'Own product features across the frontend and API layers in a collaborative engineering team.'},
{jobId:'j5',title:'UI Engineer',company:'NovaStack',source:'Launchpad',location:'Bengaluru',remote:false,jobType:'Full-time',requiredSkills:['React','CSS','HTML'],niceSkills:['Figma','Accessibility'],minYears:1,postedAt:'2026-11-18',description:'Turn design systems into polished, responsive product experiences.'},
{jobId:'j6',title:'Python Developer Intern',company:'ByteForge',source:'CareerHub',location:'Delhi',remote:false,jobType:'Internship',requiredSkills:['Python','Git','SQL'],niceSkills:['Flask','Linux'],minYears:0,postedAt:'2026-11-16',description:'Contribute to Python services and internal automation with mentorship.'},
{jobId:'j7',title:'Frontend Developer',company:'NovaStack',source:'CareerHub',location:'Bengaluru',remote:true,jobType:'Full-time',requiredSkills:['JavaScript','React','HTML','CSS'],niceSkills:['TypeScript','Jest'],minYears:1,postedAt:'2026-11-15',description:'Duplicate listing from another sample source.'},
{jobId:'j8',title:'QA Automation Engineer',company:'PixelRoute',source:'TechBoard',location:'Hyderabad',remote:false,jobType:'Full-time',requiredSkills:['Java','Selenium','Testing'],niceSkills:['CI/CD','SQL'],minYears:1,postedAt:'2026-11-14',description:'Create automated tests and improve quality processes for web applications.'}
];
const seedProfiles=[
{candidateId:'c1',name:'Riya Mehta',skills:['JavaScript','React','HTML','CSS','TypeScript','Jest','Git'],yearsExperience:2,location:'Bengaluru',remoteOk:true},
{candidateId:'c2',name:'Karan Shah',skills:['Python','SQL','REST APIs','Docker','Redis','Git'],yearsExperience:1,location:'Hyderabad',remoteOk:false},
{candidateId:'c3',name:'Ishita Rao',skills:['SQL','Python','Excel','Power BI','Statistics','Tableau'],yearsExperience:0,location:'Remote',remoteOk:true},
{candidateId:'c4',name:'Dev Malhotra',skills:['React','JavaScript','Node.js','SQL','AWS','Docker'],yearsExperience:3,location:'Mumbai',remoteOk:true},
{candidateId:'c5',name:'Aarav Singh',skills:['Java','Selenium','Testing','SQL','CI/CD','Git'],yearsExperience:2,location:'Hyderabad',remoteOk:false},
{candidateId:'c6',name:'Meera Nair',skills:['Python','Git','SQL','Flask','Linux','JavaScript'],yearsExperience:0,location:'Delhi',remoteOk:true}
];
let jobs,profiles,apps,role='applicant',page='dashboard',skills=[],selectedJobId=null,selectedRankJob='j1';
