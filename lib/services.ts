import { FileText, Users, BarChart, LineChart, ClipboardCheck, Settings, Shield, Phone ,User , Globe ,Code ,BadgeCheck} from "lucide-react"

export const services = [
  {
    slug: "medical-billing",
    title: "Medical Billing",
    description:
      "Maximize your revenue and minimize claim denials with our complete medical billing solutions tailored for healthcare providers.",
    icon: Users,
    image: "/medicalBilling.jpg?height=400&width=600",
    details: [
      "Accurate charge entry and claim submission",
      "Payment posting and reconciliation",
      "Denial management and appeals",
      "Detailed monthly reporting and analysis",
      "End-to-end claims management for faster reimbursements",
      "Real-time insurance eligibility verification",
      "Proactive accounts receivable (AR) follow-up",
      "HIPAA-compliant processes ensuring data security",
    ],
    pricing: [
      { plan: "Basic", price: "5% of Net Collection", features: ["5% billing on net collection", "Standard reports", "Email support"] },
      { plan: "Pro", price: "5% of Net Collection", features: ["5% billing on net collection", "Advanced analytics", "Priority support", "Email support","Custom integrations"] },
      { plan: "Enterprise", price: "Custom", features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"] },
    ],
     faqs: [
      {
        question: "What services are included in your medical billing package?",
        answer:
          "Our comprehensive medical billing services include claim creation and submission, payment posting, denial management, patient billing, and regular reporting.",
      },
      {
        question: "How do you ensure billing accuracy?",
        answer:
          "We follow a strict quality control process with multiple checkpoints, experienced billers, and the use of advanced billing software to minimize errors and ensure clean claims.",
      },
      {
        question: "Do you handle both insurance and patient billing?",
        answer:
          "Yes, we manage insurance claim submissions, follow-ups, and appeals, as well as patient billing and statements to ensure maximum revenue collection.",
      },
      {
        question: "How long does it take to process a claim?",
        answer:
          "We typically process and submit claims within 24 to 48 hours after receiving all necessary documentation from your office.",
      },
      {
        question: "Can you integrate with our existing EHR or PM system?",
        answer:
          "Yes, we are experienced with most major EHR and practice management systems and can seamlessly integrate to streamline workflows.",
      },
      {
        question: "How do you handle denied or rejected claims?",
        answer:
          "Our team proactively follows up on all denied or rejected claims, analyzes the root cause, and resubmits them promptly to recover lost revenue.",
      },
    ],
    
  },  
  {
    slug: "credentialing",
    title: "Credentialing",
    description:
      "Simplify your provider enrollment and credentialing process with our expert services tailored for healthcare organizations.",
    icon: BadgeCheck,
    image: "/credenteling.jpg?height=400&width=500",
    details: [
      "Complete provider enrollment and credentialing",
      "CAQH profile management",
      "Primary source verification",
      "Ongoing credentialing maintenance and updates", 
      "Comprehensive provider credentialing services",
      "Timely completion and submission of enrollment applications",
      "Regular follow-up with insurance companies",
      "Maintenance and updates of provider information",
    ],
    pricing: [
      { plan: "Basic", price: "$150/provider", features: ["150 per payour","Initial credentialing", "Application submission", "Basic follow-up"] },
      { plan: "Pro", price: "$150/provider", features: ["Buy 10, get 1 free","Initial + re-credentialing","Detailed tracking", "Priority support", "Daily follow-up"] },
      { plan: "Enterprise", price: "Custom", features: ["High-volume credentialing", "Custom reporting", "Dedicated credentialing specialist" ] },
    ],
     faqs : [
      {
        question: "What is provider credentialing?",
        answer:
          "Credentialing is the process of verifying a healthcare provider's qualifications, including education, training, licensure, and work history, to ensure they meet the standards required by payers and healthcare organizations.",
      },
      {
        question: "How long does the credentialing process take?",
        answer:
          "Credentialing typically takes between 60 to 120 days, depending on the payer and the completeness of the submitted information.",
      },
      {
        question: "What documents are needed for credentialing?",
        answer:
          "Required documents usually include medical licenses, DEA certificate, malpractice insurance, board certifications, work history, and a completed CAQH profile.",
      },
      {
        question: "Do you help with hospital privileging as well?",
        answer:
          "Yes, we assist providers with hospital privileging applications, ensuring all paperwork is properly completed and submitted on time.",
      },
      {
        question: "Can you credential providers with multiple payers?",
        answer:
          "Yes, we handle credentialing with Medicare, Medicaid, and all major commercial payers across all 50 states.",
      },
      {
        question: "Do you monitor recredentialing and expirations?",
        answer:
          "Yes, we track recredentialing deadlines and license expirations to ensure your credentials stay current and in good standing with all payers.",
      },
    ]
    
  },
  {
    slug: "virtual-assistant",
    title: "Virtual Assistant",
    description:
      "Boost your productivity with our professional virtual assistant services, designed to handle your administrative tasks efficiently.",
    icon: User,
    image: "/virtualAssistant.jpg?height=400&width=600",
    details: [
      "Appointment scheduling and calendar management",
      "Email management and client communication",
      "Data entry and CRM updates",
      "Task management and workflow optimization",
      "Insurance verification and pre-authorization support",
      "Patient intake and onboarding",
      "Follow-up and recall scheduling",
      "Transcription and documentation",
      "Telehealth coordination",
      "HIPAA-compliant communication handling",
      "Supply order coordination",
    ],    
    pricing: [
      { plan: "Basic", price: "$600/month", features: ["Up to 4 hours/day", "Standard task handling", "Email support", "Priority support","Data entry and CRM updates",] },
      { plan: "Pro", price: "$1000/month", features: ["Up to 8 hours/day","Appointment scheduling and calendar management", "Priority task handling","Follow-up and recall scheduling","Dedicated virtual assistant"] },
      { plan: "Enterprise", price: "Custom", features: ["Unlimited hours", "Custom solutions", "Transcription and documentation","Email management and client communication", "Telehealth coordination",  ] },
    ],
    faqs: [
      {
        question: "What types of tasks can a virtual assistant handle for a medical practice?",
        answer:
          "Our VAs can manage a wide range of tasks including patient appointment scheduling, calendar management, follow-up reminders, insurance verifications, prior authorizations, and basic billing coordination."
      },
      {
        question: "Are your virtual assistants trained in healthcare administration?",
        answer:
          "Yes, our VAs have experience in healthcare operations and are trained in HIPAA compliance, medical terminology, EHR systems, and front-office workflows."
      },
      {
        question: "Can a virtual assistant work with my existing scheduling or EHR software?",
        answer:
          "Absolutely. Our VAs are adaptable and familiar with popular tools like Athenahealth, Kareo, eClinicalWorks, and others. We ensure a smooth integration with your current systems."
      },
      {
        question: "Do I need to provide training to the virtual assistant?",
        answer:
          "While our VAs come pre-trained in general medical office tasks, we recommend a brief onboarding session to cover your specific processes and preferences for optimal alignment."
      },
      {
        question: "Is there coverage during off-hours or weekends?",
        answer:
          "We offer flexible scheduling options, including after-hours and weekend support, depending on your practice's needs and the service package you select."
      }
    ]
    
  }, 
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Get a custom, high-performance website that meets your business needs and delights your users.",
    icon: Code,
    image: "/webDev.jpg?height=400&width=600",
    details: [
      "Custom website design and development",
      "Responsive and mobile-friendly layouts",
      "E-commerce solutions",
      "Ongoing maintenance and updates",
      "Search engine optimization (SEO)",
      "Content management system (CMS) integration",
      "Website performance optimization",
      "UI/UX design and prototyping",
      "Cross-browser compatibility",
      "Secure hosting and SSL setup",
      "API integration and third-party service support",
      "Analytics and conversion tracking setup",
      "Accessibility (ADA) compliance",
      "Blog and dynamic content features",
      "Landing page design for campaigns",
    ],
    
    pricing: [
      { plan: "Basic", price: "$600 one-time", features: ["CMS integration","Responsive design","Ongoing maintenance and updates","Search engine optimization (SEO)",
          "UI/UX design and prototyping"] },
      { plan: "Pro", price: "$1200 one-time", features: ["Custom large-scale websites","Website performance optimization","Integrations and APIs", "Advanced features", "Enhanced SEO"] },
      { plan: "Enterprise", price: "Custom", features: ["Custom website design and development", "Responsive and mobile-friendly layouts", "Integrations and APIs", "Full support & maintenance","Analytics and conversion tracking setup","Cross-browser compatibility"] },
    ],
    faqs: [
      {
        question: "What platforms do you use for website development?",
        answer:
          "We work with a variety of platforms including WordPress, Shopify, Webflow, and fully custom solutions using HTML, CSS, JavaScript, and modern frameworks like React and Next.js."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, every website we build is fully responsive and optimized for seamless performance across desktops, tablets, and smartphones."
      },
      {
        question: "Do you offer e-commerce development?",
        answer:
          "Absolutely. We build secure and scalable e-commerce sites tailored to your business needs, using platforms like Shopify, WooCommerce, or custom-built solutions."
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes, we specialize in both creating new sites and revamping outdated ones with modern design, improved performance, and better user experience."
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer:
          "Yes, we offer flexible maintenance plans that cover updates, performance optimization, security monitoring, and content changes to keep your site running smoothly."
      }
    ],    
  },
  
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Expand your brand's reach and drive more engagement with our tailored digital marketing services.",
    icon: Globe,
    image: "/digitalMarketing.jpg?height=400&width=600",
    details: [
        "Comprehensive SEO optimization (on-page & off-page)",
        "Content marketing strategy and blog writing",
        "Social media management (Facebook, Instagram, Twitter, LinkedIn)",
        "Targeted social media advertising campaigns",
        "PPC (Pay-Per-Click) ad management (Google Ads, Meta Ads, etc.)",
        "Weekly branded video content creation (1 video per week)",
        "Ad campaign creation, optimization, and performance tracking",
        "Competitor and keyword analysis",
        "Custom content calendar and posting schedule",
        "Performance analytics and monthly reporting",
        "Reputation management and online review monitoring"
      
    ],
    pricing: [
      { plan: "Basic", price: "$250/month", features: ["SEO setup", "4 social media posts/week", "Basic reporting"] },
      { plan: "Pro", price: "$500/month", features: ["Advanced SEO", "Daily social media posts","ad campaign planning and management", "Detailed analytics"] },
      { plan: "Enterprise", price: "Custom", features: ["Full-service digital marketing strategy","Custom ad campaign planning and management","Brand voice development and design alignment","5 post a week"] },
    ],
    faqs: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "We offer a full suite of services including SEO, social media management, pay-per-click (PPC) advertising, email marketing, content creation, and analytics reporting."
      },
      {
        question: "How long does it take to see results from digital marketing?",
        answer:
          "It depends on the strategy. SEO can take 3–6 months to show significant results, while paid ads and social media campaigns can deliver quicker returns—often within weeks."
      },
      {
        question: "Do you manage social media accounts?",
        answer:
          "Yes, we create and manage content calendars, post on your behalf, engage with your audience, and monitor performance across platforms like Facebook, Instagram, LinkedIn, and X (formerly Twitter)."
      },
      {
        question: "Can you help with local SEO for my business?",
        answer:
          "Absolutely. We optimize your Google Business Profile, local citations, and location-specific keywords to improve your visibility in local search results."
      },
      {
        question: "Will I receive regular reports and updates?",
        answer:
          "Yes, we provide detailed monthly reports that include campaign performance, insights, and actionable recommendations to continuously improve your marketing ROI."
      }
    ],  
  },
  {
    slug: "claims-processing",
    title: "Claims Processing",
    description:
      "Our advanced claims processing service ensures fast and accurate submission of medical claims, resulting in higher acceptance rates and quicker reimbursements.",
    icon: FileText,
    image: "/claimProcessing.jpg?height=400&width=600",
    details: [
      "Electronic claim submission to all major payers",
      "Real-time claim scrubbing and error correction",
      "Timely follow-up on pending and denied claims",
      "Detailed reporting on claim status and trends",
      "Insurance eligibility verification and benefits check",
      "Appeals submission for denied or underpaid claims",
      "Primary and secondary claim processing",
      "Compliance with HIPAA and payer-specific regulations",
      "Integration with EHR/EMR and billing software",
    ],    
    pricing: [
      { plan: "Basic", price: "$299/month", features: ["Up to 500 claims/month", "Standard reports", "Email support"] },
      {
        plan: "Pro",
        price: "$599/month",
        features: ["Up to 1500 claims/month", "Advanced analytics", "Priority support"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"],
      },
    ],
    faqs: [
      {
        question: "What is claims processing?",
        answer:
          "Claims processing involves reviewing and verifying insurance claims submitted by patients or providers to ensure accuracy, eligibility, and compliance with policy terms before approval or denial."
      },
      {
        question: "Do you handle both medical and dental claims?",
        answer:
          "Yes, we process both medical and dental insurance claims, ensuring accurate coding, timely submission, and proper documentation for each claim type."
      },
      {
        question: "How long does it take to process a claim?",
        answer:
          "Processing times can vary based on the complexity of the claim and the insurance provider, but most claims are submitted within 24–48 hours and followed up regularly until resolution."
      },
      {
        question: "Can you follow up on denied or delayed claims?",
        answer:
          "Absolutely. We investigate the reasons for denials or delays, correct any errors, resubmit claims if necessary, and ensure timely follow-up to maximize reimbursements."
      },
      {
        question: "Is your claims processing HIPAA compliant?",
        answer:
          "Yes, all of our processes follow HIPAA regulations strictly, ensuring the confidentiality and security of patient health information throughout the claims lifecycle."
      }
    ],
    
  },
  {
    slug: "revenue-optimization",
    title: "Revenue Optimization",
    description:
      "Maximize your practice's revenue with our comprehensive revenue optimization services, designed to streamline your billing cycle and improve cash flow.",
    icon: BarChart,
    image: "/revenueOptimization.jpg?height=400&width=600",
    details: [
      "In-depth analysis of your revenue cycle",
      "Identification and resolution of revenue leakage points",
      "Implementation of best practices for optimal reimbursement",
      "Verification of patient insurance and benefits before services",
      "Pre-authorization and referral management support",
      "Accurate charge capture and coding compliance",
      "Timely claim submission and tracking",
      "Denial management and appeals processing",
      "Patient billing and payment follow-up",
      "Compliance with payer and regulatory requirements",
      "Integration with practice management and EHR systems",
    ],
    
    pricing: [
      { plan: "Basic", price: "$299/month", features: ["Up to 500 claims/month", "Standard reports", "Email support"] },
      {
        plan: "Pro",
        price: "$599/month",
        features: ["Up to 1500 claims/month", "Advanced analytics", "Priority support"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"],
      },
    ],
    faqs: [
      {
        question: "How quickly are claims submitted after receiving the information?",
        answer:
          "Claims are typically submitted within 24-48 hours after receiving complete and accurate information from your practice.",
      },
      {
        question: "What is your clean claim submission rate?",
        answer:
          "Our clean claim submission rate consistently exceeds 98%, significantly higher than the industry average of 75-85%.",
      },
      {
        question: "How do you handle claim rejections?",
        answer:
          "We immediately analyze the reason for rejection, make necessary corrections, and resubmit claims within 24 hours. Our team also implements preventative measures to avoid similar rejections in the future.",
      },
      {
        question: "Do you provide reports on claim status?",
        answer:
          "Yes, we provide detailed weekly reports on claim status, including submitted, pending, paid, and denied claims, along with aging analysis and payer performance metrics.",
      },
    ],
  },
  {
    slug: "performance-metrics",
    title: "Performance Metrics",
    description:
      "Gain valuable insights into your practice's financial performance with our detailed analytics and reporting services.",
    icon: LineChart,
    image: "/performanceMetric.jpg?height=400&width=600",
    details: [
      "Customizable dashboards for key performance indicators",
      "Detailed financial reports and trend analysis",
      "Regular performance reviews and recommendations",
      "Staff scheduling and productivity tracking",
      "Patient flow optimization and appointment management",
      "Policy and procedure development for daily operations",
      "Compliance monitoring with healthcare regulations",
      "Credentialing and provider enrollment support",
      "Training and support for front-office staff",
      "Integration with EHR, billing, and CRM systems",
      "Patient satisfaction tracking and service improvements",
    ],
    
    pricing: [
      { plan: "Basic", price: "$299/month", features: ["Up to 500 claims/month", "Standard reports", "Email support"] },
      {
        plan: "Pro",
        price: "$599/month",
        features: ["Up to 1500 claims/month", "Advanced analytics", "Priority support"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"],
      },
    ],
    faqs: [
      {
        question: "What types of performance metrics do you track?",
        answer:
          "We track a wide range of metrics tailored to your business goals, including financial KPIs, operational efficiency, customer acquisition cost, ROI, and more."
      },
      {
        question: "Do you provide customizable dashboards?",
        answer:
          "Yes, we build interactive, user-friendly dashboards that let you monitor key performance indicators (KPIs) in real time, customized to your specific needs and industry."
      },
      {
        question: "How often do I receive reports?",
        answer:
          "We provide detailed reports on a weekly, bi-weekly, or monthly basis—depending on your preferences—along with insights and visual trend analysis to guide decision-making."
      },
      {
        question: "Can you compare our performance with industry standards?",
        answer:
          "Yes, we offer benchmarking services that measure your business performance against industry averages, helping identify gaps and opportunities for improvement."
      },
      {
        question: "Do you offer recommendations based on the data?",
        answer:
          "Absolutely. We don’t just report data—we interpret it and provide actionable recommendations during regular performance reviews to help you drive growth and efficiency."
      }
    ],
    
  },
  {
    slug: "practice-solutions",
    title: "Practice Solutions",
    description:
      "Our comprehensive practice management solutions are designed to optimize your operations and improve overall efficiency.",
    icon: Settings,
    image: "/practiceManagement.jpg?height=400&width=600",
    details: [
      
        "Workflow analysis and optimization",
        "Staff training and development programs",
        "Implementation of best practices for practice management",
        "Ongoing support and consultation",
        "Strategic planning for practice growth and scalability",
        "Operational audits to identify inefficiencies",
        "Change management and transition support",
        "Risk management and compliance consulting",
        "Patient engagement and retention strategies",
        "Custom solutions tailored to specialty or practice size",
        "Performance metrics tracking and goal setting",
      ],
      
    pricing: [
      { plan: "Basic", price: "$299/month", features: ["Up to 500 claims/month", "Standard reports", "Email support"] },
      {
        plan: "Pro",
        price: "$599/month",
        features: ["Up to 1500 claims/month", "Advanced analytics", "Priority support"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"],
      },
    ],
    faqs: [
      {
        question: "What types of practices do you support?",
        answer:
          "We work with a wide range of healthcare practices, including primary care, specialty clinics, dental offices, and allied health providers, tailoring solutions to each practice's unique needs."
      },
      {
        question: "What does your workflow analysis involve?",
        answer:
          "We conduct a thorough review of your current operations to identify inefficiencies, bottlenecks, and opportunities to streamline tasks, improve patient flow, and reduce administrative burden."
      },
      {
        question: "Do you provide staff training?",
        answer:
          "Yes, we offer customized training programs to enhance staff performance in areas like patient communication, EHR usage, scheduling, billing processes, and regulatory compliance."
      },
      {
        question: "What kind of best practices do you implement?",
        answer:
          "We implement industry-proven strategies for scheduling, billing, documentation, and compliance to help your practice operate more efficiently and provide better patient care."
      },
      {
        question: "Is ongoing support included?",
        answer:
          "Yes, we offer continuous consultation and support to address evolving challenges, update workflows, and ensure sustained improvements in practice operations."
      }
    ]
    
  },
  
  {
    slug: "compliance",
    title: "Compliance",
    description:
      "Stay up-to-date and compliant with the latest healthcare regulations through our comprehensive compliance services.",
    icon: Shield,
    image: "/compliance.jpg/?height=400&width=600",
    details: [
      "Regular compliance audits and risk assessments",
      "HIPAA compliance training for staff",
      "Implementation of compliance policies and procedures",
      "Ongoing monitoring of regulatory changes",
      "Development and enforcement of privacy and security protocols",
      "Assistance with OSHA and CMS compliance requirements",
      "Incident response planning and breach management",
      "Credentialing and licensure verification support",
      "Secure handling and storage of patient data",
      "Consultation on state-specific healthcare regulations",
    ],
    
    pricing: [
      { plan: "Basic", price: "$299/month", features: ["Up to 500 claims/month", "Standard reports", "Email support"] },
      {
        plan: "Pro",
        price: "$599/month",
        features: ["Up to 1500 claims/month", "Advanced analytics", "Priority support"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"],
      },
    ],

    faqs: [
      {
        question: "What compliance services do you offer?",
        answer:
          "We offer a comprehensive range of services, including regular compliance audits, risk assessments, HIPAA training for staff, policy development, and ongoing monitoring of regulatory changes."
      },
      {
        question: "How often should compliance audits be conducted?",
        answer:
          "We recommend conducting compliance audits at least annually, but depending on the size and complexity of your practice, we may recommend more frequent assessments to address evolving risks."
      },
      {
        question: "Do you provide HIPAA compliance training?",
        answer:
          "Yes, we offer customized HIPAA training for your staff, ensuring they are fully educated on privacy regulations, security protocols, and how to maintain compliance in everyday tasks."
      },
      {
        question: "How do you implement compliance policies and procedures?",
        answer:
          "We assist with creating and implementing clear, actionable policies and procedures tailored to your practice’s operations, ensuring all regulatory requirements are met and your team is well-informed."
      },
      {
        question: "How do you stay updated on regulatory changes?",
        answer:
          "We continuously monitor regulatory changes at the federal, state, and local levels and adjust your compliance protocols accordingly, ensuring that your practice remains compliant with the latest laws and standards."
      }
    ]
    
  },
  {
    slug: "support-services",
    title: "Support Services",
    description:
      "Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter.",
    icon: Phone,
    image: "/support.jpg?height=400&width=600",
    details: [
      "24/7 customer support via phone and email",
      "Rapid response times for urgent issues",
      "Regular check-ins and account reviews",
      "Dedicated account manager for personalized service",
      "Multi-channel support including chat, ticketing, and video calls",
      "Onboarding assistance and system setup support",
      "Proactive system monitoring and issue prevention",
      "Feedback collection and service improvement actions",
      "Service-level agreements (SLAs) with guaranteed response times",
      "User training sessions and support documentation",
      "Remote troubleshooting and technical assistance",
    ],
    
    pricing: [
      { plan: "Basic", price: "$299/month", features: ["Up to 500 claims/month", "Standard reports", "Email support"] },
      {
        plan: "Pro",
        price: "$599/month",
        features: ["Up to 1500 claims/month", "Advanced analytics", "Priority support"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited claims", "Custom integrations", "Dedicated account manager"],
      },
    ],
    faqs: [
      {
        question: "What types of support are available?",
        answer:
          "We provide 24/7 customer support through both phone and email, ensuring that your issues are addressed promptly, no matter the time or day."
      },
      {
        question: "How quickly can I expect a response to urgent issues?",
        answer:
          "We prioritize urgent issues and aim for a rapid response time, typically addressing critical concerns within an hour to minimize downtime and disruptions."
      },
      {
        question: "Do you offer regular check-ins or account reviews?",
        answer:
          "Yes, we conduct regular check-ins and account reviews to ensure your needs are being met, assess performance, and provide proactive solutions to potential issues."
      },
      {
        question: "Is there a knowledge base or training resources available?",
        answer:
          "Yes, we offer access to a comprehensive knowledge base and training materials, helping you and your team stay informed and resolve common issues independently."
      }
    ],
    
  }
  
  
]

