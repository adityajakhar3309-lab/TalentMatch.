
# TalentMatch 🎯

### Skill-Based Job Discovery & Recommendation Platform

TalentMatch is a skill-based job discovery and recommendation platform designed to help job seekers find technology job opportunities that match their skills, experience, and preferences.

The platform brings job listings from multiple sample sources into one unified catalog, removes duplicate listings, and uses a rule-based matching algorithm to calculate how well a candidate matches each job. It also identifies matched and missing skills, ranks job recommendations, and helps users manage their saved jobs and applications.

## 🚀 Key Features

- **Candidate Profile:** Add skills, years of experience, preferred location, and remote-work preferences.
- **Job Listings:** Explore technology job opportunities from multiple sample sources.
- **Job Normalization:** Standardize job titles, company names, and skill information.
- **Duplicate Detection:** Identify and remove duplicate job listings.
- **Skill Matching:** Compare candidate skills with job requirements.
- **Match Score:** Calculate a compatibility score between 0 and 100.
- **Skill Gap Analysis:** Identify matched and missing skills.
- **Job Recommendations:** Rank jobs based on candidate compatibility.
- **Search & Filters:** Search by job title, company, or skills and filter opportunities.
- **Saved Jobs:** Save interesting job opportunities.
- **Application Tracking:** Track application statuses.

## 🧮 Matching Algorithm

TalentMatch uses a transparent, rule-based weighted scoring system.

| Matching Factor | Weight |
|---|---:|
| Required Skill Coverage | 60% |
| Nice-to-Have Skill Coverage | 20% |
| Experience Fit | 10% |
| Location / Remote Fit | 10% |
| **Total** | **100%** |

Each job receives a compatibility score from 0 to 100, along with a breakdown of matched and missing skills.

**Note:** The matching score is a rule-based estimate, not an AI prediction or actual hiring decision.

## 🛠️ Technology Stack

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- Bootstrap 5
- JSON / JavaScript Sample Data
- Browser LocalStorage
- Git & GitHub

## 📂 Project Structure

```text
TalentMatch/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── data.js
│   ├── matching.js
│   └── storage.js
│
├── assets/
│   └── images/
│
├── README.md
└── .gitignore
```

*The folder structure may change as development progresses.*

## ⚙️ How to Run the Project

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd TalentMatch
   ```

3. Open `index.html` in your browser.

4. Explore the platform and test its features.

No backend installation is required for the current demo.

## 🎯 Project Objectives

- Make technology job discovery more organized.
- Help candidates understand their compatibility with job requirements.
- Identify skill gaps and areas for improvement.
- Provide transparent and explainable job recommendations.
- Build a practical job recommendation platform using frontend technologies.

## 🔮 Future Improvements

- Resume parsing and profile generation.
- Integration with real job listing APIs.
- User authentication and backend database.
- Advanced recommendation algorithms.
- Recruiter dashboard and job management.

*These are potential future enhancements and are not part of the current MVP.*

## 👨‍💻 Team Members

- **Aditya Jakhar**
- **Aryav Sharma**

## 👩‍🏫 Project Mentor

**Madhushri Tangali**

## 📌 Project Information

| Detail | Information |
|---|---|
| Project Name | TalentMatch |
| Project ID | PST_PD_005 |
| Track | Intermediate |
| Duration | 4 Weeks |
| Category | Job Discovery & Recommendation |
| Institution | Polaris School of Technology |

---

**TalentMatch — Find opportunities that match your skills.**

