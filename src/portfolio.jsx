import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- ICONS (as inline SVGs) ---
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SunIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const MoonIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);
const GithubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GoogleScholarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 10h24L12 0z"/></svg>
);
const ExternalLinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const UniversityIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0l8.59-3.9z"/><path d="M6 12v4c0 1.66 4 3 6 3s6-1.34 6-3v-4"/><path d="M18 12.47V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6.53"/></svg>
);

const OrcidIcon = (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
        <path fill="#A6CE39" d="M128 256c70.7 0 128-57.3 128-128S198.7 0 128 0 0 57.3 0 128s57.3 128 128 128z"/>
        <g transform="translate(56 56) scale(0.6)">
            <path fill="#FFF" d="M152.4 184.4V73.6h-14.8v110.8h14.8zm-34.5-89.2c0-8.1 6.6-14.8 14.8-14.8s14.8 6.6 14.8 14.8-6.6 14.8-14.8 14.8-14.8-6.6-14.8-14.8zm34.5 59.2h-14.8V73.6h14.8v80.8z"/>
            <path fill="#FFF" d="M117.9 184.4h-14.8V73.6h14.8v110.8z"/>
        </g>
    </svg>
);


// --- DATA (Extracted from your resume) ---

const professionalExperience = [
    {
        role: "Research Assistant",
        company: "Towson University",
        date: "Jan 2024 - Present",
        description: [
            "Conducting doctoral research on non-invasive health monitoring using WiFi CSI.",
            "Developing hybrid CNN and Vision Transformer architectures for brain tumor segmentation.",
            "Exploring federated learning with digital twin frameworks for privacy-preserving medical imaging analysis.",
            "Investigating novel approaches to IoMT security, including LLM-based intrusion detection."
        ],
    },
    {
        role: "Lecturer II",
        company: "Bayero University, Kano",
        date: "Jun 2022 - Jan 2024",
        description: [
            "Led research in applying machine learning to environmental health challenges.",
            "Developed models for predicting heavy metal impacts on public health.",
            "Supervised undergraduate projects combining applied machine learning and software engineering.",
        ],
    },
     {
        role: "Software Engineer (Part-Time)",
        company: "Perfect Timing Technologies",
        date: "2023 - 2024",
        description: [
            "Led front-end development for enterprise applications like Conia Cloud and ConiaSoft Accounting.",
            "Implemented modern web interfaces using React.js, TypeScript, and Tailwind CSS to enhance usability."
        ],
    },
];

const teachingExperience = [
    {
        role: "Adjunct Faculty",
        institution: "Towson University, USA",
        date: "2024 - Present",
        details: [
            "Taught undergraduate courses: Database Management (ITEC 315) and Advanced Data Management & Analysis (ITEC 451).",
            "Consistently earned outstanding student evaluations (5.0/5.0 rating) for effectiveness and commitment to student success."
        ]
    },
    {
        role: "Lecturer II",
        institution: "Bayero University, Kano, Nigeria",
        date: "2022 - 2024",
        details: [
            "Developed and delivered curricula in Machine Learning, Software Engineering, and Java Programming.",
            "Supervised undergraduate projects that blended applied research with classroom instruction."
        ]
    },
     {
        role: "Lecturer I",
        institution: "Jigawa State Institute of Information Technology, Nigeria",
        date: "2021 - 2022",
        details: [
            "Taught Software Engineering, Database Management Systems, and Object-Oriented Programming with Java.",
            "Mentored students in coursework and capstone projects."
        ]
    },
    {
        role: "Mentor",
        institution: "Arewa Data Science Academy",
        date: "2023 - Present",
        details: [
            "Mentoring recent graduates in data science, focusing on machine learning techniques (regression, classification, deep learning).",
            "Guiding students in research methodology and real-world applications using Python, TensorFlow, PyTorch, and Scikit-learn."
        ]
    }
];

const publications = [
    { type: 'Journal', title: 'Breath as a Biomarker: A Survey of Contact and Contactless Applications and Approaches in Respiratory Health Monitoring.', venue: 'Elsevier Smart Health (Q1), 2025.', authors: 'Wakili, A. A., Asaju, B. J., Jung, W.' },
    { type: 'Journal', title: 'Breath Rate Detection in Single and Multi-User Scenarios Using Wi-Fi CSI.', venue: 'Techno-computing Journal, 1(1):42-51, 2025.', authors: 'Wakili, A. A., Asaju, B. J., Jung, W.' },
    { type: 'Journal', title: 'Detecting SARS-CoV-2 in CT Scans Using Vision Transformer and Graph Neural Network.', venue: 'Algorithms, 18(7):413, 2025.', authors: 'Amuda, K., Wakili, A. A., Amoo, T., et al.' },
    { type: 'Journal', title: 'Tracking the Impact of Heavy Metals on Human Health and Ecological Environments in Complex Coastal Aquifers Using Improved Machine Learning Optimization.', venue: 'Environmental Science and Pollution Research, 31(40):53219-53236, Springer, 2024.', authors: 'Jibrin, A. M., Abba, S. I., Wakili, A. A., et al.' },
    { type: 'Conference', title: 'Evaluating BiLSTM and CNN+GRU Approaches for Human Activity Recognition Using WiFi CSI Data.', venue: 'IEEE/ACIS International Conference on Software Engineering Research, Management and Applications (SERA), 2025.', authors: 'Wakili, A. A., Asaju, B. J., Jung, W.' },
    { type: 'Conference', title: 'Safeguarding Smart Inhaler Devices and Patient Privacy in Respiratory Health Monitoring.', venue: 'In Proc. 20th International Conference on Cyber Warfare and Security (ICCWS), 2025.', authors: 'Asaju, B. J., Wakili, A. А.' },
    { type: 'Conference', title: 'LLM-Based Framework for Next-Generation Cyber Threat Detection.', venue: 'In IJCAI-25 Workshop on AI for Time Series (AI4TS), 2025.', authors: 'Hussaini, A., Wakili, A. A., Musa, U. S., and Yu, W.' },
    { type: 'Conference', title: 'TwinSegNet: A Digital Twin-Enabled Federated Learning Framework for Collaborative Brain Tumor Analysis.', venue: 'In IEEE Vehicular Technology Conference (VCC), 2025.', authors: 'Wakili, A. A., et al.' },
    { type: 'Preprint', title: 'Tumor VisNet: A Hybrid CNN + Vision Transformer Model for Enhanced Brain Tumor Segmentation.', venue: 'Submitted to IEEE International Conference on Biomedical and Health Informatics (BHI), 2025.', authors: 'Wakili, A. A., et al.', status: 'Under Review' },
    { type: 'Preprint', title: 'Advancing IoT Security: Machine Learning Strategies for Power Consumption-Based Botnet Detection.', venue: 'Submitted to IEEE International Conference on Security, 2025.', authors: 'Wakili, A. A., et al.', status: 'Under Review' },
];


const projects = [
    {
        title: "Non-Invasive Health Monitoring with WiFi CSI",
        description: "Developed models for breath classification and human activity recognition using WiFi Channel State Information.",
        tags: ["AI/ML", "Signal Processing", "Python", "PyTorch", "BiLSTM"],
        liveUrl: "#", 
        repoUrl: "#" 
    },
    {
        title: "TwinSegNet: Federated Learning for Brain Tumor Analysis",
        description: "A novel Digital Twin-enabled federated learning framework for collaborative and privacy-preserving brain tumor analysis.",
        tags: ["Federated Learning", "Digital Twin", "Medical Imaging", "PyTorch"],
        liveUrl: "#", 
        repoUrl: "#" 
    },
    {
        title: "LLM-Based Cyber Threat Detection",
        description: "A framework utilizing Large Language Models for advanced cyber threat detection in time series data.",
        tags: ["LLM", "Cybersecurity", "AI", "Python", "RAG"],
        liveUrl: "#",
        repoUrl: "#" 
    },
    {
        title: "IoT Security via Power Consumption Analysis",
        description: "Machine learning strategies for botnet detection in IoT devices by analyzing power consumption patterns.",
        tags: ["IoT Security", "Machine Learning", "scikit-learn"],
        liveUrl: "#",
        repoUrl: "#" 
    },
];

const skills = {
    "AI/ML & Data Science": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy", "MATLAB"],
    "LLMs": ["Prompt Engineering", "RAG", "Fine-tuning", "LLM Agents"],
    "Languages": ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++"],
    "Web/Mobile": ["React", "Tailwind CSS", "Kotlin", "Flutter", "Android Dev"],
    "Databases & Cloud": ["MySQL", "PostgreSQL", "SQL Server", "AWS (EC2, S3)", "Firebase"],
    "Developer Tools": ["Git", "Docker", "Jupyter", "VS Code", "Google Colab"],
};


// --- HOOK for scroll animations ---
const useScrollAnimation = () => {
    const [elements, setElements] = useState([]);
    const observer = useRef(null);

    useEffect(() => {
        if (elements.length === 0) return;

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.current.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            if (el) observer.current.observe(el);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [elements]);

    return setElements;
};

// --- Reusable Animated Section Component ---
const AnimatedSection = ({ children, id }) => {
    const setElements = useScrollAnimation();
    
    const refCallback = useCallback(node => {
        if (node) {
            setElements(prevElements => {
                if (prevElements.includes(node)) {
                    return prevElements;
                }
                return [...prevElements, node];
            });
        }
    }, [setElements]);

    return (
        <section 
            id={id} 
            ref={refCallback} 
            className="py-20 lg:py-28 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out"
        >
            {children}
        </section>
    );
};

// --- UI COMPONENTS ---

function Header({ theme, toggleTheme, setCurrentPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { id: 'home', label: "Home" },
        { id: 'experience', label: "Experience" },
        { id: 'research', label: "Research"},
        { id: 'teaching', label: "Teaching" },
        { id: 'projects', label: "Projects" },
        { id: 'contact', label: "Contact" }
    ];

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsOpen(false);
    }

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-800 dark:text-slate-300 sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => handleNavClick('home')} className="text-xl font-bold text-cyan-400">AW</button>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, i) => (
                        <button key={link.id} onClick={() => handleNavClick(link.id)} className="hover:text-cyan-400 transition-colors duration-300">
                           <span className="text-cyan-400">0{i+1}.</span> {link.label}
                        </button>
                    ))}
                    <button onClick={toggleTheme} className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                       {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5 text-yellow-300" />}
                    </button>
                    <a href="/CV___Resume__Wakili (2).pdf" download className="bg-transparent border border-cyan-400 text-cyan-400 font-medium py-2 px-4 rounded-md hover:bg-cyan-400/10 transition-colors duration-300">
                        CV
                    </a>
                </div>
                <div className="md:hidden flex items-center gap-4">
                     <button onClick={toggleTheme} className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                       {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5 text-yellow-300" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <XIcon /> : <MenuIcon />}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900"><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                    {navLinks.map(link => (<button key={link.id} onClick={() => handleNavClick(link.id)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-cyan-400">{link.label}</button>))}
                     <a href="/CV___Resume__Wakili (2).pdf" download className="mt-2 bg-transparent border border-cyan-400 text-cyan-400 font-medium py-2 px-4 rounded-md hover:bg-cyan-400/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div></div>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <p className="text-cyan-400 text-lg mb-4">Hi, my name is</p>
                    <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4">Almustapha Wakili.</h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-8">I build intelligent systems for health.</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-8">
                        I'm an AI Researcher specializing in Smart & Connected Health. Currently, I'm focused on developing novel solutions in non-invasive monitoring, medical imaging, and IoMT security as a Ph.D. candidate at Towson University.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="mailto:awakili@towson.com" className="bg-transparent border border-cyan-400 text-cyan-400 font-medium py-3 px-6 rounded-md hover:bg-cyan-400/10 transition-colors duration-300">
                            Get In Touch
                        </a>
                        <div className="flex items-center space-x-5">
                            <a href="https://github.com/awakili" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><GithubIcon className="w-6 h-6" /></a>
                            <a href="http://linkedin.com/in/binwakili/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><LinkedinIcon className="w-6 h-6" /></a>
                            <a href="https://scholar.google.com/citations?user=Yt2DrTYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><GoogleScholarIcon className="w-7 h-7" /></a>
                            <a href="https://orcid.org/0009-0002-5854-2227" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><OrcidIcon className="w-6 h-6" /></a>
                            <a href="https://wp.towson.edu/awakili2/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><UniversityIcon className="w-7 h-7" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <AnimatedSection id="about">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center"><span className="text-cyan-400 text-2xl mr-4">01.</span> About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    <div className="md:col-span-3 text-slate-600 dark:text-slate-400 text-lg space-y-4">
                        <p>I am an AI Researcher and a Ph.D. candidate in Information Technology at Towson University. My research is centered on Smart and Connected Health, where I contribute to original advances in non-invasive health monitoring, privacy-preserving medical imaging with digital twins, and the security of the Internet of Medical Things (IoMT).</p>
                        <p>My academic journey includes an M.Sc. in Software Engineering with First Division distinction from Mewar University, India, and a B.Sc. in Computer Science with First Class Honors from Bayero University Kano, Nigeria. This strong foundation fuels my current doctoral work and my passion for solving complex challenges.</p>
                        <p>Beyond research, I am a dedicated educator and mentor. With teaching experience at both U.S. and Nigerian institutions, I am committed to fostering the next generation of computer scientists. I currently serve as a Mentor at the <a href="#" className="text-cyan-400 hover:underline">Arewa Data Science Academy</a>, helping to democratize data science and AI education for underserved students.</p>
                    </div>
                     <div className="md:col-span-2 flex justify-center items-start">
                        <div className="w-64 h-64 relative group">
                            <div className="absolute inset-0 bg-cyan-400 rounded-md z-0 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                            <img src="https://placehold.co/400x400/334155/e0f2fe?text=A.W." alt="Almustapha Wakili" className="w-full h-full object-cover rounded-md relative z-10"/>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                     <h3 className="text-slate-800 dark:text-slate-200 font-semibold text-xl mb-6">Technologies I Work With:</h3>
                     {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="mb-6">
                            <h3 className="text-cyan-400 font-semibold mb-3 text-lg">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillList.map(skill => (
                                    <span key={skill} className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 py-1 px-3 rounded-md text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

function Experience() {
    return (
        <AnimatedSection id="experience">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center"><span className="text-cyan-400 text-2xl mr-4">02.</span> Where I've Worked</h2>
                <div className="max-w-3xl">
                    {professionalExperience.map((job, index) => (
                        <div key={index} className="relative pl-8 mb-10 border-l border-slate-300 dark:border-slate-700">
                             <div className="absolute -left-2 top-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white dark:border-slate-900"></div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{job.role} @ <span className="text-cyan-400">{job.company}</span></h3>
                             <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">{job.date}</p>
                             <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                                 {job.description.map((point, i) => <li key={i}>{point}</li>)}
                             </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

function Teaching() {
    return (
        <AnimatedSection id="teaching">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center"><span className="text-cyan-400 text-2xl mr-4">04.</span> Teaching & Mentorship</h2>
                <div className="max-w-3xl">
                    {teachingExperience.map((job, index) => (
                        <div key={index} className="relative pl-8 mb-10 border-l border-slate-300 dark:border-slate-700">
                             <div className="absolute -left-2 top-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white dark:border-slate-900"></div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{job.role} @ <span className="text-cyan-400">{job.institution}</span></h3>
                             <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">{job.date}</p>
                             <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                                 {job.details.map((point, i) => <li key={i}>{point}</li>)}
                             </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

function RecentResearch() {
    return (
        <AnimatedSection id="research">
             <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center"><span className="text-cyan-400 text-2xl mr-4">03.</span> Recent Research</h2>
                <div className="space-y-8">
                    {publications.map((pub, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800/50 rounded-md p-6 shadow-md dark:shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300">
                           <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex-1">{pub.title}</h3>
                                <span className={`text-xs font-semibold py-1 px-3 rounded-full ml-4 ${pub.type === 'Journal' ? 'bg-green-500/20 text-green-300' : pub.type === 'Conference' ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                                    {pub.type}
                                </span>
                           </div>
                           <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pub.authors}</p>
                           <p className="text-sm text-cyan-400">{pub.venue}
                            {pub.status && <span className="text-yellow-400 ml-2">({pub.status})</span>}
                           </p>
                        </div>
                    ))}
                </div>
             </div>
        </AnimatedSection>
    )
}

function Projects() {
    return (
        <AnimatedSection id="projects">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center"><span className="text-cyan-400 text-2xl mr-4">05.</span> Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.title} className="bg-white dark:bg-slate-800 rounded-md p-6 flex flex-col justify-between shadow-md dark:shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 transform hover:-translate-y-1">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-400">{project.title}</h3>
                                    <div className="flex space-x-3">
                                        {project.repoUrl !== "#" && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><GithubIcon className="w-6 h-6"/></a>}
                                        {project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-400"><ExternalLinkIcon/></a>}
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

function Contact() {
    return (
        <AnimatedSection id="contact">
            <div className="container mx-auto px-6 text-center max-w-2xl">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2"><span className="text-cyan-400 text-xl mr-2">06.</span> What's Next?</h2>
                <h3 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">Get In Touch</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    I'm currently seeking opportunities for research collaborations and challenging roles where I can contribute to meaningful projects. My inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                <a href="mailto:awakili@towson.com" className="bg-transparent border border-cyan-400 text-cyan-400 font-medium py-3 px-8 rounded-md hover:bg-cyan-400/10 transition-colors duration-300 inline-block">
                    Say Hello
                </a>
            </div>
        </AnimatedSection>
    );
}

function Footer() {
    return (
        <footer className="py-6 text-center text-slate-600 dark:text-slate-500 text-sm">
            <p>Designed & Built by Almustapha Wakili</p>
        </footer>
    );
}


// --- PAGE COMPONENTS ---

const HomePage = () => (
    <>
        <Hero />
        <About />
        <Experience />
        <RecentResearch />
        <Teaching />
        <Projects />
        <Contact />
    </>
);

const ExperiencePage = () => (
    <main className="container mx-auto px-6 pt-10">
        <Experience />
    </main>
);

const ResearchPage = () => (
     <main className="container mx-auto px-6 pt-10">
        <RecentResearch />
    </main>
);

const TeachingPage = () => (
    <main className="container mx-auto px-6 pt-10">
        <Teaching />
    </main>
);

const ProjectsPage = () => (
    <main className="container mx-auto px-6 pt-10">
        <Projects />
    </main>
);

const ContactPage = () => (
    <main className="container mx-auto px-6 pt-10 min-h-[calc(100vh-150px)] flex items-center justify-center">
        <Contact />
    </main>
);


// --- MAIN APP COMPONENT ---
export default function App() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme;
            }
            return 'dark'; // Set dark mode as the default
        }
        return 'dark';
    });

    const [currentPage, setCurrentPage] = useState('home');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const renderPage = () => {
        switch (currentPage) {
            case 'experience':
                return <ExperiencePage />;
            case 'research':
                return <ResearchPage />;
            case 'teaching':
                return <TeachingPage />;
            case 'projects':
                return <ProjectsPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-300 selection:bg-cyan-300 selection:text-cyan-900">
        <Header theme={theme} toggleTheme={toggleTheme} setCurrentPage={setCurrentPage} />
        <main>
            {renderPage()}
        </main>
        <Footer />
    </div>
  );
}

