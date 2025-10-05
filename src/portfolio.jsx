import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


// --- ICONS (as inline SVGs) ---
const GithubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
);
const LinkedinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>
);
const GoogleScholarIcon = (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.14 10.151h-3.924v1.547h2.845c-.328 1.21-1.553 3.39-4.385 3.39C3.653 15.088 1.5 12.937 1.5 10s2.153-5.088 5.335-5.088c1.944 0 3.245.923 3.817 1.49l1.24-1.206C10.61 3.923 8.89 3 6.835 3C3.074 3 0 5.865 0 10s3.074 7 6.835 7c3.953 0 6.604-2.805 6.604-6.834 0-.464-.045-.88-.135-1.242h-2.164z"/>
    </svg>
);
const EmailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2-2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
    </svg>
);
const CVIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        <path d="M4.5 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 7h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
    </svg>
);

// --- SEO Component ---
const SEO = ({ title, description }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
    </Helmet>
);


// --- DATA ---
const educationHistory = [
    { degree: "Ph.D. in Information Technology", institution: "Towson University", date: "2024 - 2027 (Expected)", details: "GPA: 4.00/4.00" },
    { degree: "M.Sc. in Software Engineering", institution: "Mewar University", date: "2019 - 2021", details: "First Division with Distinction" },
    { degree: "B.Sc. in Computer Science", institution: "Bayero University Kano (BUK)", date: "2015 - 2019", details: "First Class Honors" },
    { degree: "Associate of Science in Computer Science", institution: "Jigawa State Institute of Information Technology", date: "2013 - 2015", details: "Distinction" },
];

const news = [
    { date: "01/2024", text: "Began Ph.D. in Information Technology at Towson University, USA." },
    { date: "06/2022", text: "Started as Lecturer II at Bayero University, Kano, Nigeria." },
    { date: "08/2021", text: "Graduated M.Sc. in Software Engineering (First Division with Distinction) from Mewar University, India." },
    { date: "07/2019", text: "Graduated B.Sc. in Computer Science (First Class Honors) from Bayero University Kano, Nigeria." },
    { date: "05/2019", text: "Awarded Kwankwasiyya Development Foundation Masters Scholarship." },
    { date: "01/2019", text: "Presented research at a local tech meetup on software engineering principles." },
    { date: "11/2018", text: "Completed final year project on data mining in education with high distinction." },
    { date: "09/2018", text: "Began mentorship role for junior computer science students at BUK." },
    { date: "06/2018", text: "Interned at a local software development firm, focusing on web technologies." },
    { date: "03/2017", text: "Published first early work on agile methodology quality assurance." },
    { date: "10/2015", text: "Began B.Sc. in Computer Science at Bayero University Kano." }
];

const professionalExperience = [
    { role: "Research Assistant", company: "Towson University", date: "Jan 2024 - Present", description: "Conducting doctoral research on non-invasive health monitoring using WiFi CSI, developing hybrid CNN and Vision Transformer architectures for brain tumor segmentation, and exploring federated learning with digital twin frameworks." },
    { role: "Lecturer II", company: "Bayero University, Kano", date: "Jun 2022 - Jan 2024", description: "Led research in applying machine learning to environmental health challenges and supervised undergraduate projects combining ML and software engineering." },
    { role: "Software Engineer (Part-Time)", company: "Perfect Timing Technologies", date: "2023 - 2024", description: "Led front-end development for enterprise applications, implementing modern web interfaces using React.js, TypeScript, and Tailwind CSS." },
];

const teachingExperience = [
     { role: "Adjunct Faculty", institution: "Towson University, USA", date: "2024 - Present", details: "Taught undergraduate courses: Database Management (ITEC 315) and Advanced Data Management & Analysis (ITEC 451). Consistently earned outstanding student evaluations (5.0/5.0)." },
    { role: "Lecturer II", institution: "Bayero University, Kano, Nigeria", date: "2022 - 2024", details: "Developed and delivered curricula in Machine Learning, Software Engineering, and Java Programming." },
    { role: "Mentor", institution: "Arewa Data Science Academy", date: "2023 - Present", details: "Mentoring recent graduates in data science, focusing on machine learning techniques and real-world applications using Python, TensorFlow, and PyTorch." }
];

const awards = [
    { name: "Graduate Assistantship Funding", institution: "Towson University", date: "2024-2027" },
    { name: "Summer Research Fellowship", institution: "Towson University", date: "2025" },
    { name: "Professional Development / Travel Fund Award", institution: "Towson University", date: "2025" },
    { name: "Kwankwasiyya Development Foundation Masters Scholarship", institution: "Kano State, Nigeria", date: "2019-2021" },
    { name: "Winner, Mewar Tech Expo", institution: "Mewar University", date: "2020" },
];

const skills = {
    "AI/ML & Data Science": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy", "MATLAB"],
    "LLMs": ["Prompt Engineering", "RAG", "Fine-tuning", "LLM Agents"],
    "Languages": ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++"],
    "Web/Mobile": ["React", "Tailwind CSS", "Kotlin", "Flutter", "Android Dev"],
    "Databases & Cloud": ["MySQL", "PostgreSQL", "SQL Server", "AWS", "Firebase"],
    "Developer Tools": ["Git", "Docker", "Jupyter", "VS Code", "Google Colab"],
};

const allPublications = [
    { type: 'Journal', title: 'Breath as a Biomarker: A Survey of Contact and Contactless Applications and Approaches in Respiratory Health Monitoring.', venue: 'Elsevier Smart Health (Q1), 2025.', authors: 'Wakili, A. A., Asaju, B. J., Jung, W.', selected: true, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Journal' },
    { type: 'Journal', title: 'Breath Rate Detection in Single and Multi-User Scenarios Using Wi-Fi CSI.', venue: 'Techno-computing Journal, 1(1):42-51, 2025.', authors: 'Wakili, A. A., Asaju, B. J., Jung, W.', selected: true, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Journal' },
    { type: 'Conference', title: 'Evaluating BiLSTM and CNN+GRU Approaches for Human Activity Recognition Using WiFi CSI Data.', venue: 'IEEE/ACIS International Conference on Software Engineering Research, Management and Applications (SERA), 2025.', authors: 'Wakili, A. A., Asaju, B. J., Jung, W.', selected: true, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Conference' },
    { type: 'Journal', title: 'Detecting SARS-CoV-2 in CT Scans Using Vision Transformer and Graph Neural Network.', venue: 'Algorithms, 18(7):413, 2025.', authors: 'Amuda, K., Wakili, A. A., Amoo, T., et al.', selected: true, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Journal' },
    { type: 'Journal', title: 'Tracking the Impact of Heavy Metals on Human Health and Ecological Environments in Complex Coastal Aquifers Using Improved Machine Learning Optimization.', venue: 'Environmental Science and Pollution Research, 31(40):53219-53236, Springer, 2024.', authors: 'Jibrin, A. M., Abba, S. I., Wakili, A. A., et al.', selected: false, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Journal' },
    { type: 'Conference', title: 'Safeguarding Smart Inhaler Devices and Patient Privacy in Respiratory Health Monitoring.', venue: 'In Proc. 20th International Conference on Cyber Warfare and Security (ICCWS), 2025.', authors: 'Asaju, B. J., Wakili, A. А.', selected: false, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Conference' },
    { type: 'Conference', title: 'LLM-Based Framework for Next-Generation Cyber Threat Detection.', venue: 'In IJCAI-25 Workshop on AI for Time Series (AI4TS), 2025.', authors: 'Hussaini, A., Wakili, A. A., Musa, U. S., and Yu, W.', selected: false, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Conference' },
    { type: 'Conference', title: 'TwinSegNet: A Digital Twin-Enabled Federated Learning Framework for Collaborative Brain Tumor Analysis.', venue: 'In IEEE Vehicular Technology Conference (VCC), 2025.', authors: 'Wakili, A. A., et al.', selected: false, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Conference' },
    { type: 'Preprint', title: 'Tumor VisNet: A Hybrid CNN + Vision Transformer Model for Enhanced Brain Tumor Segmentation.', venue: 'Submitted to IEEE International Conference on Biomedical and Health Informatics (BHI), 2025.', authors: 'Wakili, A. A., et al.', status: 'Under Review', selected: false, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Preprint' },
    { type: 'Preprint', title: 'Advancing IoT Security: Machine Learning Strategies for Power Consumption-Based Botnet Detection.', venue: 'Submitted to IEEE International Conference on Security, 2025.', authors: 'Wakili, A. A., et al.', status: 'Under Review', selected: false, imageUrl: 'https://placehold.co/150x100/e2e8f0/334155?text=Preprint' },
];

// --- SECTION COMPONENTS ---
const AboutSection = () => (
    <section id="about" className="mb-12 scroll-mt-20">
        <p className="text-gray-700 leading-relaxed">
            Hi! I am a Ph.D. candidate in Information Technology at Towson University. My research focuses on developing original advances in non-invasive health monitoring using WiFi signals, enhancing medical imaging with privacy-preserving digital twins, and securing the Internet of Medical Things (IoMT).
        </p>
    </section>
);

const ResearchOverviewSection = () => (
     <section id="research-overview" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Research</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
            My research work lies at the intersection of AI, healthcare, and security. I build and apply machine learning models to solve complex health-tech challenges.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Non-invasive health monitoring (WiFi CSI) for applications like breath classification and fall detection.</li>
            <li>Privacy-preserving medical imaging analysis using federated learning and digital twins.</li>
            <li>IoMT security, including LLM-based intrusion detection and power-consumption-based botnet detection.</li>
        </ul>
    </section>
);


const ResearchPublicationsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const publicationsToShow = showAll ? allPublications : allPublications.filter(p => p.selected);

    return (
        <section id="research" className="mb-12 scroll-mt-20">
            <SEO 
                title="Research & Publications | Almustapha Wakili"
                description="Explore the research and publications of Almustapha Wakili, focusing on AI in healthcare, non-invasive monitoring with WiFi CSI, medical imaging, and IoMT security."
            />
            <ResearchOverviewSection />
            <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xl font-bold text-gray-800">Publications</h3>
                 <button 
                    onClick={() => setShowAll(!showAll)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-md transition-colors"
                >
                    Show {showAll ? 'Selected' : 'All'}
                </button>
            </div>
            <ul className="space-y-6">
                {publicationsToShow.map((pub, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <img src={pub.imageUrl} alt="Publication preview" className="w-24 h-auto object-cover rounded-md flex-shrink-0" />
                        <div className="text-gray-700">
                             <p className="font-medium text-gray-800">{pub.title}</p>
                             <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
                             <p className="text-sm text-gray-600 mt-1 italic">{pub.venue} {pub.status && `(${pub.status})`}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

const SelectedPublicationsSection = () => {
    const selectedPublications = allPublications.filter(p => p.selected);
    return (
        <section id="selected-publications" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Selected Publications</h2>
            <ul className="space-y-6">
                {selectedPublications.map((pub, index) => (
                     <li key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <img src={pub.imageUrl} alt="Publication preview" className="w-24 h-auto object-cover rounded-md flex-shrink-0" />
                        <div className="text-gray-700">
                             <p className="font-medium text-gray-800">{pub.title}</p>
                             <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
                             <p className="text-sm text-gray-600 mt-1 italic">{pub.venue} {pub.status && `(${pub.status})`}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};


const EducationSection = () => (
    <section id="education" className="mb-12 scroll-mt-20">
         <SEO 
            title="Education | Almustapha Wakili"
            description="View the academic background of Almustapha Wakili, including his Ph.D. candidacy at Towson University and degrees in Computer Science and Software Engineering."
        />
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Education</h2>
        <ul className="space-y-6">
            {educationHistory.map((item, index) => (
                <li key={index} className="text-gray-700">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-gray-800">{item.degree}</h3>
                        <p className="text-sm text-gray-500 font-mono">{item.date}</p>
                    </div>
                    <p className="text-md text-blue-600 font-medium">{item.institution}</p>
                    <p className="mt-1 text-gray-600">{item.details}</p>
                </li>
            ))}
        </ul>
    </section>
);

const NewsSection = () => (
    <section id="news" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">News</h2>
        <div className="max-h-64 overflow-y-auto p-4 border rounded-lg bg-gray-50">
            <ul className="space-y-3">
                {news.map((item, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                        <span className="text-gray-500 font-mono mr-2">[{item.date}]:</span> {item.text}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const ExperienceSection = () => (
    <section id="experience" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Experience</h2>
        <ul className="space-y-6">
            {professionalExperience.map((item, index) => (
                <li key={index} className="text-gray-700">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-gray-800">{item.role}</h3>
                        <p className="text-sm text-gray-500 font-mono">{item.date}</p>
                    </div>
                    <p className="text-md text-blue-600 font-medium">{item.company}</p>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                </li>
            ))}
        </ul>
    </section>
);

const TeachingSection = () => (
    <section id="teaching" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Teaching & Mentorship</h2>
        <ul className="space-y-6">
            {teachingExperience.map((item, index) => (
                <li key={index} className="text-gray-700">
                     <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-gray-800">{item.role}</h3>
                        <p className="text-sm text-gray-500 font-mono">{item.date}</p>
                    </div>
                    <p className="text-md text-blue-600 font-medium">{item.institution}</p>
                    <p className="mt-2 text-gray-600">{item.details}</p>
                </li>
            ))}
        </ul>
    </section>
);

const AwardsSection = () => (
    <section id="awards" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Awards & Scholarships</h2>
        <ul className="space-y-4">
             {awards.map((item, index) => (
                <li key={index} className="text-gray-700">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.institution}, {item.date}</p>
                </li>
            ))}
        </ul>
    </section>
);

const SkillsSection = () => (
    <section id="skills" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Technical Skills</h2>
        <div className="space-y-4">
           {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                    <h3 className="font-bold text-md text-gray-800 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillList.map(skill => (
                            <span key={skill} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// --- PAGE COMPONENTS ---
const AboutPage = () => (
    <main>
        <SEO 
            title="About | Almustapha Wakili | AI Researcher"
            description="Learn about Almustapha Wakili, an AI Researcher and Ph.D. candidate. Explore his background, research interests in Smart & Connected Health, education, and experience."
        />
        <AboutSection />
        <ResearchOverviewSection />
        <EducationSection />
        <SelectedPublicationsSection />
        <NewsSection />
        <ExperienceSection />
        <TeachingSection />
        <AwardsSection />
        <SkillsSection />
    </main>
);

const ExperienceTeachingPage = () => (
    <>
        <SEO 
            title="Experience & Mentorship | Almustapha Wakili"
            description="Detailed professional and teaching experience of Almustapha Wakili, including roles as a Research Assistant, Lecturer, and Software Engineer."
        />
        <ExperienceSection />
        <TeachingSection />
    </>
);

const navLinks = [
    { id: "research", label: "Research", component: ResearchPublicationsSection },
    { id: "education", label: "Education", component: EducationSection },
    { id: "experience", label: "Experience", component: ExperienceTeachingPage },
];

// --- MAIN APP COMPONENT ---
function Portfolio() {
    const [currentPage, setCurrentPage] = useState('about');

    const renderPage = () => {
        if (currentPage === 'about') {
            return <AboutPage />;
        }
        const page = navLinks.find(link => link.id === currentPage);
        const PageComponent = page ? page.component : AboutPage;
        return (
             <main className="pt-8">
                <PageComponent />
            </main>
        );
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            <div className="container mx-auto max-w-4xl p-6 md:p-8">
                
                <header className="mb-12">
                     <nav className="mb-8">
                        <ul className="flex flex-wrap gap-x-4 gap-y-2">
                            <li><button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-blue-600 font-medium pb-1 border-b-2 border-transparent hover:border-blue-500">About</button></li>
                            {navLinks.map(link => (
                               <li key={link.id}><button onClick={() => setCurrentPage(link.id)} className="text-gray-600 hover:text-blue-600 font-medium pb-1 border-b-2 border-transparent hover:border-blue-500">{link.label}</button></li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Almustapha Wakili</h1>
                            <p className="text-lg text-gray-600 mt-1">Ph.D. Candidate at Towson University</p>
                            
                            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                                <a href="https://scholar.google.com/citations?user=Yt2DrTYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600"><GoogleScholarIcon className="mr-1.5" /> Google Scholar</a>
                                <a href="https://github.com/Binwakil" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600"><GithubIcon className="mr-1.5" /> GitHub</a>
                                <a href="http://linkedin.com/in/binwakili/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600"><LinkedinIcon className="mr-1.5" /> LinkedIn</a>
                                <a href="mailto:awakili@towson.com" className="flex items-center hover:text-blue-600"><EmailIcon className="mr-1.5" /> Email</a>
                                <a href="/CV___Resume__Wakili (2).pdf" download className="flex items-center hover:text-blue-600"><CVIcon className="mr-1.5" /> CV</a>
                            </div>
                        </div>
                        <img 
                            src="/profile-photo.jpg" 
                            alt="AW" 
                            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mb-4 sm:mb-0 object-cover border-2 border-gray-200"
                        />
                    </div>
                </header>
                {renderPage()}
            </div>
        </div>
    );
}

export default function App() {
    return (
        <HelmetProvider>
            <Portfolio />
        </HelmetProvider>
    );
}

