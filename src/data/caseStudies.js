/*
  Case Study Data — Storytelling Framework
  -----------------------------------------
  Each case study follows a narrative arc:
  Context > Challenge > Process > Solution > Impact > Reflection

  Structure:
  - headline:   The project's big idea in < 8 words
  - tagline:    One-sentence elevator pitch
  - myRole:     What I specifically did (not the team)
  - context:    The world before — sets the stage
  - challenge:  The specific design problem
  - process:    Ordered steps with titles + descriptions
  - solution:   What was built and why it works
  - impact:     Specific, honest metrics + qualitative outcomes
  - reflection: What was learned / what would be done differently
*/

const caseStudies = [
  {
    id: 'nusuk',
    thumbnail: '/images/projects/behance-1.png',
    headline: 'Redesigning the Pilgrimage',
    tagline: 'A unified digital platform for pilgrims navigating one of humanity\'s largest annual gatherings.',
    subtitle: 'Redesigning the pilgrimage experience for millions of users',
    year: '2023',
    role: 'Lead Product Designer',
    myRole: 'Led the product design workstream across a 3-designer team. I owned the end-to-end UX — from contextual research with pilgrims across 6 languages, to the multilingual design system (RTL Arabic + 12 languages), to the real-time crowd density interface. Worked directly with the engineering lead to spec the offline-first architecture and conducted all 3 rounds of accessibility testing.',
    client: 'Ministry of Hajj & Umrah',
    duration: '8 months',
    team: '3 designers, 12 engineers, 2 PMs',
    scale: '40M+ addressable users',
    industry: 'GovTech / Religious Services',
    color: '#1a6b01',

    context: {
      text: 'Every year, millions of Muslims from over 180 countries converge on Mecca for Hajj and Umrah — a deeply spiritual journey that also happens to be one of the most complex logistical operations on Earth. The existing digital touchpoints were fragmented across 14 separate systems, inaccessible in most languages, and created dangerous bottlenecks at physical checkpoints.',
      stats: [
        { label: 'Pilgrims annually', value: '2.5M+' },
        { label: 'Countries served', value: '180+' },
        { label: 'Legacy systems', value: '14' },
      ],
    },

    challenge: {
      text: 'How do you design a single platform that serves users across 180 countries, 13 languages (including RTL Arabic), varying literacy levels, and extreme physical conditions — while reducing life-threatening crowd bottlenecks at entry checkpoints?',
      painPoints: [
        'Fragmented permit systems forced pilgrims to visit multiple offices in person',
        'No real-time crowd visibility meant dangerous overcrowding at gates',
        'Language barriers caused 40% of support tickets',
        'Offline access was non-existent despite poor network coverage at holy sites',
      ],
    },

    process: [
      {
        title: 'Contextual Research',
        description: 'Conducted field research with pilgrims across 6 languages, documenting pain points at every physical and digital touchpoint.',
        detail: 'Shadowed 48 pilgrims across 3 nationalities through the full Hajj process. Documented 127 unique friction points.',
      },
      {
        title: 'Journey Mapping',
        description: 'Mapped the end-to-end pilgrimage journey across 14 key touchpoints to identify the highest-friction moments.',
        detail: 'Created a service blueprint spanning physical spaces, digital interfaces, and backend systems — revealing that 68% of delays happened at just 3 checkpoints.',
      },
      {
        title: 'Multilingual Design System',
        description: 'Designed a scalable interface supporting RTL Arabic and 12 other languages without layout degradation.',
        detail: 'Built a bidirectional component library with mirrored layouts, culturally adaptive iconography, and high-contrast modes for outdoor visibility.',
      },
      {
        title: 'Crowd Intelligence',
        description: 'Worked with engineering to implement real-time crowd density indicators tied to permit scheduling.',
        detail: 'Integrated IoT sensor data with the permit system so pilgrims could see live congestion and plan movements around peak times.',
      },
      {
        title: 'Accessibility-First Build',
        description: 'Built a design system with accessibility at its core — high contrast, large tap targets, and offline-capable flows.',
        detail: 'Every screen tested at WCAG AA, tap targets minimum 48x48px, and critical flows cached for offline use in areas with no signal.',
      },
    ],

    solution: {
      text: 'A unified digital platform that centralises permit applications, real-time crowd management, and multilingual guidance into a single, accessible experience — reducing friction at every step of the pilgrimage journey.',
      keyFeatures: [
        'One-tap permit application replacing 4 separate systems',
        'Live crowd density map with suggested routing',
        '13-language interface with automatic RTL support',
        'Offline-first architecture for holy site dead zones',
      ],
    },

    impact: {
      metrics: [
        { label: 'Checkpoint wait time', value: '35%', prefix: '-', context: 'Avg wait dropped from ~45min to ~29min at peak' },
        { label: 'Support tickets', value: '28%', prefix: '-', context: 'Fewer language-related issues via in-app guidance' },
        { label: 'Countries live', value: '180+', prefix: '' },
        { label: 'Permit systems replaced', value: '4→1', prefix: '' },
      ],
      qualitative: [
        'Platform scaled to serve 180+ countries simultaneously in first full Hajj season',
        'Reduced support ticket volume by 28% through clearer in-app guidance',
        'Recognised by Saudi Digital Government Authority for accessibility standards',
      ],
    },

    reflection: 'The biggest lesson was that designing for extreme diversity — language, literacy, age, physical ability — isn\'t a constraint. It\'s the discipline that produces the most robust product. Every accessibility improvement we made for edge cases ended up improving the experience for everyone.',

    tools: ['Figma', 'FigJam', 'Principle', 'Zeplin', 'Maze'],

    visuals: {
      hero: null,
      process: [null, null, null],
      solution: [null, null],
      before: null,
      after: null,
    },
  },

  {
    id: 'civil-service',
    thumbnail: '/images/projects/iphone-mockup.png',
    headline: 'Digitising a Nation\'s Workforce',
    tagline: 'Nigeria\'s first fully digital civil service management system — replacing decades of paper workflows overnight.',
    subtitle: "Digitising Nigeria's federal civil service for 67,000 employees",
    year: '2022',
    role: 'Senior Product Designer',
    myRole: 'I was the senior designer on a 2-person design team. I led embedded research (3 weeks inside the ministry, shadowing clerks and directors), designed the role-based dashboard system that mapped directly to the existing hierarchy, and created the offline-first mobile experience for field staff. I ran all 3 rounds of usability testing with 45 civil servants across 4 seniority levels.',
    client: 'Federal Ministry of Education, Nigeria',
    duration: '10 months',
    team: '2 designers, 8 engineers, 1 PM',
    scale: '67,000+ civil servants',
    industry: 'GovTech / Public Sector',
    color: '#0a3d6b',

    context: {
      text: 'Nigeria\'s federal civil service — 67,000 employees across dozens of ministries — ran almost entirely on paper. Leave applications, promotions, payroll verification, and inter-ministry correspondence all required physical signatures and manual routing. A single leave request took an average of 3 weeks to process.',
      stats: [
        { label: 'Civil servants', value: '67K+' },
        { label: 'Paper workflows', value: '23 types' },
        { label: 'Avg. leave request time', value: '3 weeks' },
      ],
    },

    challenge: {
      text: 'How do you migrate 67,000 employees — many of whom have never used digital workflow tools — from paper-based processes to a fully digital system without retraining, without disrupting operations, and without losing institutional knowledge embedded in decades of paper trails?',
      painPoints: [
        'Routine processes took weeks to months due to physical routing between offices',
        'No audit trail made accountability nearly impossible',
        'Different ministries had incompatible paper formats and procedures',
        'Field staff had unreliable internet connectivity',
      ],
    },

    process: [
      {
        title: 'Embedded Research',
        description: 'Spent 3 weeks embedded in the ministry, shadowing clerks, officers, and directors to understand existing paper workflows.',
        detail: 'Documented the actual flow of 23 distinct workflow types, including informal shortcuts staff had developed over decades.',
      },
      {
        title: 'Workflow Prioritisation',
        description: 'Identified 23 distinct workflow types and prioritised the 8 highest-volume ones for the first release.',
        detail: 'Used a frequency x pain matrix to determine that leave requests, promotions, and payroll verification accounted for 72% of all workflows.',
      },
      {
        title: 'Mental Model Mapping',
        description: 'Designed role-based dashboards that mapped directly to the existing hierarchy — ensuring adoption without retraining.',
        detail: 'Every screen was structured to mirror the paper form it replaced, so clerks could find the same fields in the same order.',
      },
      {
        title: 'Offline-First Mobile',
        description: 'Created an offline-first mobile experience for field staff without reliable internet connectivity.',
        detail: 'Built progressive sync with conflict resolution so field staff could complete workflows offline and sync when back in range.',
      },
      {
        title: 'Validation Testing',
        description: 'Led user testing sessions with 45 civil servants across 4 seniority levels to validate the interface.',
        detail: 'Ran 3 rounds of testing, iterating the interface based on real clerk workflows and director approval patterns.',
      },
    ],

    solution: {
      text: 'A web-based platform enabling 67,000+ federal employees to manage HR workflows, documentation, and inter-ministry communication entirely online — with interfaces that mirror the paper forms they replace.',
      keyFeatures: [
        'Role-based dashboards matching existing organisational hierarchy',
        'Digital workflow engine replacing 23 paper-based processes',
        'Offline-first mobile app for field staff',
        'Complete audit trail for every action and approval',
      ],
    },

    impact: {
      metrics: [
        { label: 'Leave request time', value: '3wk→3d', prefix: '', context: 'From 3 weeks average to 3 days' },
        { label: 'Employees migrated', value: '67K+', prefix: '' },
        { label: 'Paper reduction', value: '90%', prefix: '-' },
        { label: 'Retraining budget', value: '0', prefix: '₦', context: 'Interface matched existing mental models' },
      ],
      qualitative: [
        'Zero retraining budget required — interface matched existing mental models',
        '67,000+ employees migrated to the platform within 6 months',
        'Became the template for digital transformation across other Nigerian ministries',
      ],
    },

    reflection: 'The counterintuitive insight was that innovation doesn\'t always mean reinvention. By deliberately making the digital system look and feel like the paper system, we achieved near-100% adoption with zero formal training. The lesson: respect the user\'s existing mental model.',

    tools: ['Figma', 'Miro', 'FigJam', 'UserTesting', 'Hotjar'],

    visuals: {
      hero: null,
      process: [null, null, null],
      solution: [null, null],
      before: null,
      after: null,
    },
  },

  {
    id: 'lean-insight',
    thumbnail: '/images/projects/mockup-10.png',
    headline: 'Insight to Action, Faster',
    tagline: 'Redesigning enterprise analytics handoffs to close the gap between data and decisions.',
    subtitle: 'Streamlining enterprise B2B analytics handoffs',
    year: '2022',
    role: 'Product Designer',
    myRole: 'Sole product designer on this engagement. I conducted all 18 stakeholder interviews (across analyst, PM, and executive roles), built the friction map that identified the 2 root causes behind 62% of delays, designed the template engine and progressive-disclosure executive dashboard, and ran the full notification workflow redesign from concept through to engineering handoff.',
    client: 'Lean Business Services',
    duration: '6 months',
    team: '2 designers, 6 engineers, 1 PM',
    scale: 'Enterprise B2B',
    industry: 'Analytics / Enterprise SaaS',
    color: '#6b1a6b',

    context: {
      text: 'Enterprise analytics teams were spending 3-4 hours per report cycle managing handoffs between data analysts, product managers, and executive stakeholders. The workflow required manual exports, email chains, and version-controlled spreadsheets — creating a significant lag between insight generation and decision-making.',
      stats: [
        { label: 'Hours per handoff', value: '3-4' },
        { label: 'Email chains per cycle', value: '12+' },
        { label: 'Version conflicts/week', value: '8' },
      ],
    },

    challenge: {
      text: 'How do you eliminate the 3-4 hour lag between an analyst generating an insight and an executive being able to act on it — without forcing either party to learn new tools or change their existing workflow?',
      painPoints: [
        'Format inconsistency across analyst and executive reports',
        'Unclear ownership of report stages led to dropped handoffs',
        'Manual export steps added 45 minutes per cycle',
        'No audit trail for stakeholder notification failures',
      ],
    },

    process: [
      {
        title: 'Stakeholder Interviews',
        description: 'Conducted interviews across 3 enterprise client teams to map the current-state handoff process.',
        detail: 'Interviewed 18 stakeholders across analyst, PM, and executive roles to understand each perspective on the handoff problem.',
      },
      {
        title: 'Friction Mapping',
        description: 'Identified the top 5 friction points and quantified their impact on handoff delays.',
        detail: 'Created a quantified friction map showing that 62% of delays were caused by just 2 issues: format inconsistency and unclear ownership.',
      },
      {
        title: 'Template Engine',
        description: 'Designed a templatised report builder that enforced structure while preserving analyst flexibility.',
        detail: 'Built a modular block system — analysts could write freely within structured sections, ensuring executives always got consistent format.',
      },
      {
        title: 'Notification Workflow',
        description: 'Built a notification and approval workflow that reduced email dependency by 70%.',
        detail: 'Designed an in-app routing system with escalation rules, read receipts, and deadline-triggered reminders.',
      },
      {
        title: 'Progressive Disclosure',
        description: 'Implemented progressive disclosure for executive dashboards — summary first, depth on demand.',
        detail: 'Executives see a 3-sentence summary by default. One click reveals the full analysis. Two clicks reach the raw data.',
      },
    ],

    solution: {
      text: 'A redesigned analytics handoff system with structured report templates, automated stakeholder routing, and an executive-facing dashboard layer that translates raw data into decision-ready summaries.',
      keyFeatures: [
        'Modular report builder with enforced structure',
        'Automated routing with escalation and read receipts',
        'Executive dashboard with progressive disclosure',
        'Full audit trail for every handoff stage',
      ],
    },

    impact: {
      metrics: [
        { label: 'Handoff time', value: '3.5hr→45min', prefix: '', context: 'From avg 3.5 hours to 45 minutes' },
        { label: 'Email handoffs', value: '70%', prefix: '-', context: 'Replaced by in-app routing' },
        { label: 'NPS change', value: '+22pts', prefix: '' },
        { label: 'Dashboard load', value: '40%', prefix: '-', context: 'Faster render via progressive disclosure' },
      ],
      qualitative: [
        'NPS increased by 22 points among enterprise users',
        'Reduced email-based handoff communication by 70%',
        'Client renewed 3-year contract based on redesign outcomes',
      ],
    },

    reflection: 'The most impactful design decision was progressive disclosure on the executive dashboard. Executives don\'t want more data — they want less, with the option to go deeper. Designing for the decision, not the dataset, changed everything.',

    tools: ['Figma', 'Notion', 'FullStory', 'Mixpanel', 'Zeplin'],

    visuals: {
      hero: null,
      process: [null, null, null],
      solution: [null, null],
      before: null,
      after: null,
    },
  },

  {
    id: 'chisquares',
    headline: 'Research Without the Learning Curve',
    tagline: 'Making complex statistical analysis accessible to non-technical academic researchers worldwide.',
    subtitle: 'Building a research analytics platform for global academics',
    year: '2021',
    role: 'Lead Product Designer',
    myRole: 'Led the design workstream from 0 to 1. I designed and ran the 120-researcher survey across 15 universities, created the "question-first" analysis flow that auto-maps research questions to statistical tests, built the 28-chart visualisation library spec, and designed the adaptive onboarding system. Ran 3 rounds of usability testing at Lagos and Nairobi universities.',
    client: 'Chisquares',
    duration: '7 months',
    team: '2 designers, 5 engineers, 1 PM',
    scale: 'Global academics',
    industry: 'EdTech / Research Analytics',
    color: '#6b4a1a',

    context: {
      text: 'Academic researchers worldwide struggle to analyse and visualise statistical data without expensive software licences (SPSS at $1,170/yr) or deep programming knowledge (R, Python). The result: researchers either pay for tools they barely use, or avoid complex analysis entirely — weakening their research.',
      stats: [
        { label: 'SPSS licence cost', value: '$1,170/yr' },
        { label: 'Researchers surveyed', value: '120' },
        { label: 'Universities', value: '15' },
      ],
    },

    challenge: {
      text: 'How do you make complex statistical analysis — regression, ANOVA, factor analysis — accessible to social science researchers who think in research questions, not statistical tests?',
      painPoints: [
        'Existing tools required knowledge of which test to run before running it',
        'Visualisation options were limited and not publication-ready',
        'No guided workflows — researchers had to know the full analysis pipeline',
        'Export formats didn\'t match academic journal requirements',
      ],
    },

    process: [
      {
        title: 'User Survey',
        description: 'Surveyed 120 academic researchers across 15 universities to understand analysis workflows and pain points.',
        detail: 'Discovered that 78% of researchers chose their statistical test by Googling "which test should I use" rather than from methodological understanding.',
      },
      {
        title: 'Question-First Design',
        description: 'Designed guided analysis flows that ask researchers what they want to know — not what test to run.',
        detail: 'Built a decision tree that translates research questions ("Is there a relationship between X and Y?") into the correct statistical test automatically.',
      },
      {
        title: 'Visualisation Library',
        description: 'Created 28 chart types with one-click export in publication-ready formats.',
        detail: 'Every chart automatically applies APA formatting, includes proper axis labels, and exports at 300 DPI for journal submission.',
      },
      {
        title: 'Adaptive Onboarding',
        description: 'Built an onboarding system that adapts to the researcher\'s discipline — different defaults for social vs. natural science.',
        detail: 'Social scientists see survey analysis tools first; natural scientists see experimental design tools. Both can access everything.',
      },
      {
        title: 'University Testing',
        description: 'Ran 3 rounds of usability testing with researchers at Lagos and Nairobi universities.',
        detail: 'Iterated on the question-to-test mapping based on real researcher confusion points. Reduced "wrong test" errors by 64%.',
      },
    ],

    solution: {
      text: 'A browser-based statistical analysis platform that makes complex data analysis accessible to non-technical researchers — with guided workflows, auto-generated visualisations, and exportable academic-format reports.',
      keyFeatures: [
        'Question-first analysis — describe your goal, get the right test',
        '28 publication-ready chart types with APA formatting',
        'Discipline-adaptive interface defaults',
        'One-click export in journal-submission format',
      ],
    },

    impact: {
      metrics: [
        { label: 'Session duration', value: '+45%', prefix: '', context: 'Researchers staying longer because they can complete analyses' },
        { label: 'Churn reduced', value: '18%', prefix: '-' },
        { label: 'Universities adopted', value: '12', prefix: '', context: 'Research departments in first year' },
        { label: 'Wrong-test errors', value: '64%', prefix: '-', context: 'Via question-first flow' },
      ],
      qualitative: [
        'Platform adopted by 12 university research departments in first year',
        '45% increase in average session duration — researchers completing full analyses instead of abandoning',
        'Featured in 3 academic technology conferences',
      ],
    },

    reflection: 'The question-first approach was the breakthrough. When we stopped asking "what statistical test?" and started asking "what do you want to learn?", everything clicked. The interface became a translator between research intent and statistical method.',

    tools: ['Figma', 'FigJam', 'Hotjar', 'Maze', 'Notion'],

    visuals: {
      hero: null,
      process: [null, null, null],
      solution: [null, null],
      before: null,
      after: null,
    },
  },

  {
    id: 'purchasa',
    headline: 'Making Crypto Payments Human',
    tagline: 'Eliminating the technical complexity that was costing merchants and customers thousands weekly.',
    subtitle: 'Eliminating user error in crypto merchant payments',
    year: '2023',
    role: 'Lead Product Designer',
    myRole: 'Sole designer on this project. I analysed 3,200 failed transactions to build the error taxonomy, designed the smart address validator UX, wrote all plain-language error prevention copy, and compressed the checkout flow from 14 steps to 5. I also designed the human-readable confirmation screen and ran all usability testing with merchants and end-users.',
    client: 'Purchasa',
    duration: '5 months',
    team: '2 designers, 4 engineers, 1 PM',
    scale: 'Crypto merchants globally',
    industry: 'Web3 / Fintech',
    color: '#1a4a6b',

    context: {
      text: 'Crypto payment errors — wrong addresses, incorrect networks, mismatched tokens — were costing merchants and customers thousands of dollars weekly. The existing payment flow had 14 steps requiring technical knowledge most users simply don\'t have, and error messages were written for developers, not humans.',
      stats: [
        { label: 'Failed txns/week', value: '3,200' },
        { label: 'Checkout steps', value: '14' },
        { label: 'Top error cause', value: 'Wrong network' },
      ],
    },

    challenge: {
      text: 'How do you reduce a 14-step, technically complex crypto payment flow to something as simple as a card payment — while preventing errors that are irreversible on the blockchain?',
      painPoints: [
        'Wrong network selection caused 42% of all failed transactions',
        'Address typos accounted for 28% of failures — and were unrecoverable',
        'Insufficient gas fees caused 18% of failures',
        'Error messages were cryptic ("Error: ERC-20 incompatible") and unhelpful',
      ],
    },

    process: [
      {
        title: 'Error Pattern Analysis',
        description: 'Analysed 3,200 failed transactions to identify the top 8 error patterns and their root causes.',
        detail: 'Built a taxonomy of failure modes: wrong network (42%), address typos (28%), insufficient gas (18%), wrong token (12%). Each required a different prevention strategy.',
      },
      {
        title: 'Smart Validation',
        description: 'Designed a smart address validator that auto-detects network compatibility before submission.',
        detail: 'The validator checks address format, matches it to the correct network, and warns users before they can submit an incompatible transaction.',
      },
      {
        title: 'Human Error Messages',
        description: 'Replaced technical error messages with plain-language prevention prompts.',
        detail: '"This address looks like it\'s on Ethereum. Switch network?" instead of "Error: ERC-20 incompatible." Prevention, not error reporting.',
      },
      {
        title: 'Flow Compression',
        description: 'Reduced the checkout flow from 14 steps to 5 using progressive disclosure and smart defaults.',
        detail: 'Analysed which steps could be automated (network detection, gas estimation) and which genuinely needed user input (amount, confirmation).',
      },
      {
        title: 'Confirmation Screen',
        description: 'Added a transaction summary that displays all parameters in plain language before final submission.',
        detail: 'Shows "You\'re sending 0.5 ETH (~$940) to alex.eth on Ethereum mainnet" instead of raw hex addresses and wei values.',
      },
    ],

    solution: {
      text: 'A reimagined crypto payment checkout with smart validation, plain-language error prevention, and a 5-step guided flow that reduces the cognitive load of crypto transactions to match traditional card payments.',
      keyFeatures: [
        'Smart address validator with auto network detection',
        'Plain-language prevention prompts (not error messages)',
        '5-step checkout (down from 14)',
        'Human-readable transaction confirmation',
      ],
    },

    impact: {
      metrics: [
        { label: 'User errors', value: '70%', prefix: '-', context: 'Failed transactions from user mistakes' },
        { label: 'Checkout steps', value: '14→5', prefix: '', context: 'Steps in checkout flow' },
        { label: 'Onboarding time', value: '55%', prefix: '-', context: 'For new merchant setup' },
        { label: 'Support tickets', value: '63%', prefix: '-', context: 'Related to failed transactions' },
      ],
      qualitative: [
        'Support tickets related to failed transactions dropped by 63%',
        'Merchant onboarding time cut by more than half',
        'Adopted as the default checkout by 3 major crypto payment processors',
      ],
    },

    reflection: 'The key insight was that crypto UX doesn\'t have a complexity problem — it has a translation problem. The blockchain is complex, but the user\'s intent is simple: send money to someone. Our job was to be the translator, not to expose the machinery.',

    tools: ['Figma', 'Framer', 'Maze', 'Amplitude', 'Linear'],

    visuals: {
      hero: null,
      process: [null, null, null],
      solution: [null, null],
      before: null,
      after: null,
    },
  },
]

export default caseStudies
