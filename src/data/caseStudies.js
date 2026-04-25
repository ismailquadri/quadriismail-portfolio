const caseStudies = [
  {
    id: 'nusuk',
    title: 'Nusuk',
    subtitle: 'Redesigning the pilgrimage experience for 40 million users',
    client: 'Ministry of Hajj & Umrah',
    year: '2023',
    role: 'Lead Product Designer',
    scale: '40M+ users',
    industry: 'GovTech / Religious Services',
    color: '#1a6b01',
    metrics: [
      { label: 'Wait Time Reduction', value: '-35%' },
      { label: 'Users Served', value: '40M+' },
      { label: 'Countries', value: '180+' },
    ],
    problem:
      'The Hajj and Umrah journey involves millions of pilgrims from over 180 countries navigating complex logistical, spiritual, and bureaucratic processes. The existing digital touchpoints were fragmented, language-inaccessible, and created dangerous bottlenecks at physical checkpoints — adding hours of wait time to an already physically demanding journey.',
    solution:
      'A unified digital platform that centralises permit applications, real-time crowd management, and multilingual guidance into a single, accessible experience — reducing friction at every step of the pilgrimage journey.',
    approach: [
      'Conducted contextual research with pilgrims across 6 languages, documenting pain points in the physical and digital journey.',
      'Mapped the end-to-end pilgrimage journey across 14 key touchpoints to identify the highest-friction moments.',
      'Designed a multilingual interface supporting RTL Arabic and 12 other languages without layout degradation.',
      'Built a scalable design system with accessibility at its core — high contrast, large tap targets, and offline-capable flows.',
      'Worked closely with engineering teams to implement real-time crowd density indicators tied to permit scheduling.',
    ],
    results: [
      '35% reduction in average wait time at key entry points',
      '40M+ users onboarded to the platform across its first full Hajj season',
      'Platform scaled to serve 180+ countries simultaneously',
      'Reduced support ticket volume by 28% through clearer in-app guidance',
    ],
    tools: ['Figma', 'FigJam', 'Principle', 'Zeplin', 'Maze'],
  },
  {
    id: 'civil-service',
    title: 'Civil Service Reform',
    subtitle: "Digitising Nigeria's federal civil service for 67,000 employees",
    client: 'Federal Ministry of Education, Nigeria',
    year: '2022',
    role: 'Senior Product Designer',
    scale: '67,000+ civil servants',
    industry: 'GovTech / Public Sector',
    color: '#0a3d6b',
    metrics: [
      { label: 'Workflow Speed', value: '+80%' },
      { label: 'Civil Servants', value: '67K+' },
      { label: 'Paper Reduction', value: '-90%' },
    ],
    problem:
      "Nigeria's federal civil service ran almost entirely on paper-based processes — leave applications, promotions, payroll verification, and inter-ministry correspondence all required physical signatures and manual routing. This created delays of weeks to months for routine processes, and made auditing and accountability nearly impossible.",
    solution:
      "Nigeria's first fully digital civil service management system — a web-based platform enabling 67,000+ federal employees to manage HR workflows, documentation, and inter-ministry communication entirely online.",
    approach: [
      'Spent 3 weeks embedded in the ministry, shadowing clerks, officers, and directors to understand the existing paper workflows.',
      'Identified 23 distinct workflow types and prioritised the 8 highest-volume ones for the first release.',
      'Designed role-based dashboards that mapped directly to the existing hierarchy — ensuring adoption without retraining.',
      'Created an offline-first mobile experience for field staff without reliable internet connectivity.',
      'Led user testing sessions with 45 civil servants across 4 seniority levels to validate the interface.',
    ],
    results: [
      '80% improvement in average workflow completion speed',
      '67,000+ employees migrated to the platform within 6 months',
      '90% reduction in paper-based documentation',
      'Zero retraining budget required — interface matched existing mental models',
    ],
    tools: ['Figma', 'Miro', 'FigJam', 'UserTesting', 'Hotjar'],
  },
  {
    id: 'lean-insight',
    title: 'Lean Insight + AXN',
    subtitle: 'Streamlining enterprise B2B analytics handoffs',
    client: 'Lean Business Services',
    year: '2022',
    role: 'Product Designer',
    scale: 'Enterprise B2B',
    industry: 'Analytics / Enterprise SaaS',
    color: '#6b1a6b',
    metrics: [
      { label: 'Handoff Time', value: '-15%' },
      { label: 'Dashboard Load', value: '-40%' },
      { label: 'NPS Score', value: '+22pts' },
    ],
    problem:
      'Enterprise analytics teams were spending an average of 3–4 hours per report cycle managing handoffs between data analysts, product managers, and executive stakeholders. The existing workflow required manual exports, email chains, and version-controlled spreadsheets — creating a significant lag between insight generation and decision-making.',
    solution:
      'A redesigned analytics handoff system with structured report templates, automated stakeholder routing, and an executive-facing dashboard layer that translated raw data into decision-ready summaries.',
    approach: [
      'Conducted stakeholder interviews across 3 enterprise client teams to map the current-state handoff process.',
      'Identified the top 5 friction points causing delay: format inconsistency, unclear ownership, manual export steps, no audit trail, and stakeholder notification failures.',
      'Designed a templatised report builder that enforced structure while preserving analyst flexibility.',
      'Built a notification and approval workflow that reduced email dependency by 70%.',
      'Implemented a progressive disclosure pattern for executive dashboards — summary first, depth on demand.',
    ],
    results: [
      '15% reduction in average handoff time per report cycle',
      '40% improvement in dashboard load performance',
      'NPS increased by 22 points among enterprise users',
      'Reduced email-based handoff communication by 70%',
    ],
    tools: ['Figma', 'Notion', 'FullStory', 'Mixpanel', 'Zeplin'],
  },
  {
    id: 'chisquares',
    title: 'Chisquares',
    subtitle: 'Building a research analytics platform for global academics',
    client: 'Chisquares',
    year: '2021',
    role: 'Lead Product Designer',
    scale: 'Global academics',
    industry: 'EdTech / Research Analytics',
    color: '#6b4a1a',
    metrics: [
      { label: 'User Engagement', value: '+30%' },
      { label: 'Session Duration', value: '+45%' },
      { label: 'Churn Rate', value: '-18%' },
    ],
    problem:
      'Academic researchers across universities worldwide were struggling to analyse and visualise statistical data without expensive software licences or deep programming knowledge. Existing tools were either too expensive (SPSS, SAS), too complex (R, Python), or too limited (Excel) for the kinds of analysis modern researchers needed.',
    solution:
      'A browser-based statistical analysis platform that made complex data analysis accessible to non-technical researchers — with guided workflows, auto-generated visualisations, and exportable academic-format reports.',
    approach: [
      'Surveyed 120 academic researchers across 15 universities to understand their analysis workflows and pain points.',
      'Designed guided analysis flows that asked researchers what they wanted to know — not what statistical test they wanted to run.',
      'Created a visualisation library of 28 chart types with one-click export in publication-ready formats.',
      'Built an onboarding system that adapted to the researcher\'s discipline — different defaults for social science vs. natural science.',
      'Ran 3 rounds of usability testing with researchers at Lagos and Nairobi universities.',
    ],
    results: [
      '30% increase in daily active engagement among registered researchers',
      '45% increase in average session duration',
      '18% reduction in churn rate within 6 months of redesign',
      'Platform adopted by 12 university research departments in first year',
    ],
    tools: ['Figma', 'FigJam', 'Hotjar', 'Maze', 'Notion'],
  },
  {
    id: 'purchasa',
    title: 'Purchasa',
    subtitle: 'Eliminating user error in crypto merchant payments',
    client: 'Purchasa',
    year: '2023',
    role: 'Lead Product Designer',
    scale: 'Crypto merchants globally',
    industry: 'Web3 / Fintech',
    color: '#1a4a6b',
    metrics: [
      { label: 'User Errors', value: '-70%' },
      { label: 'Transaction Success', value: '+42%' },
      { label: 'Onboarding Time', value: '-55%' },
    ],
    problem:
      'Crypto payment errors — sending to wrong addresses, incorrect network selection, mismatched token standards — were costing merchants and customers thousands of dollars weekly. The existing payment flow had 14 steps requiring technical knowledge most users did not have, and error messages were cryptic and unhelpful.',
    solution:
      'A reimagined crypto payment checkout experience with smart validation, plain-language error prevention, and a 5-step guided flow that reduced the cognitive load of crypto transactions to match the simplicity of traditional card payments.',
    approach: [
      'Analysed 3,200 failed transactions to identify the top 8 error patterns — wrong network (42%), address typos (28%), insufficient gas (18%), wrong token (12%).',
      'Designed a smart address validator that auto-detects network compatibility before submission.',
      'Replaced technical error messages with plain-language prevention prompts — "This address looks like it\'s on Ethereum. Switch network?" instead of "Error: ERC-20 incompatible."',
      'Reduced the checkout flow from 14 steps to 5 using progressive disclosure and smart defaults.',
      'Added a transaction summary confirmation screen that displayed all parameters in plain language before final submission.',
    ],
    results: [
      '70% reduction in user-caused transaction errors',
      '42% improvement in transaction success rate',
      '55% faster merchant onboarding',
      'Support tickets related to failed transactions dropped by 63%',
    ],
    tools: ['Figma', 'Framer', 'Maze', 'Amplitude', 'Linear'],
  },
]

export default caseStudies
