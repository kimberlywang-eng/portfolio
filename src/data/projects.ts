import { ProjectMeta } from '@/types/content';

export const projects: ProjectMeta[] = [
  {
    slug: 'f1-car',
    title: 'Formula 1 Chassis: CAD from a Blank Canvas',
    category: 'Engineering',
    tags: ['SolidWorks', 'CAD', 'Aerodynamics'],
    summary:
      'Full-scale SolidWorks chassis design for a 2021-spec F1 car, built from hand sketches through to a finished assembly — including drag-minimization math and a homage I-beam.',
    date: 'Dec 2021 – Oct 2022',
    image: '/images/f1_chassisfront.png',
    links: [{ label: 'Overview render', href: '/images/f1_chassis_genshape.png' }],
    content: [
      {
        type: 'p',
        text: "After a training session in SolidWorks, I wanted to prove I could take on something bigger than a class exercise: model a modern F1 car's chassis from a blank sketch. Real F1 chassis geometry is largely proprietary, so a chunk of the work was reconstructing plausible dimensions from public data, race broadcasts, and conversations with Texas Guadaloop's suspension lead.",
      },
      { type: 'h2', text: 'Process' },
      {
        type: 'list',
        items: [
          'Researched F1 chassis geometry and drag-coefficient requirements',
          'Hand-sketched the chassis with estimated dimensions before touching CAD',
          'Modeled each component in SolidWorks and extruded as needed',
          'Built a full assembly, including an I-beam spar as a nod to the hyperloop pod I worked on separately',
          'Used weldments to join the frame — after an early attempt to do it in assembly-mode failed and forced a rework in part-mode',
        ],
      },
      {
        type: 'image',
        src: '/images/f1_chassis_cadiso.png',
        alt: 'F1 chassis isometric CAD view',
      },
      { type: 'h2', text: 'What made it hard' },
      {
        type: 'p',
        text: "Most public F1 chassis data is either marketing material or heavily simplified, so I had to work backward from known constraints (aerodynamic goals, structural loads) rather than a spec sheet. I also learned the hard way that weldments only work in part-mode, not assembly — which meant rebuilding a chunk of the design after the I-beam integration approach hit a wall.",
      },
      {
        type: 'quote',
        text: 'A lot of F1 design is classified, so I had to research plausible ranges and defend my assumptions instead of looking up an answer.',
      },
      { type: 'h2', text: 'Outcome' },
      {
        type: 'p',
        text: "The finished assembly includes a full chassis, front and rear isometric views, and drag-minimization sketches. The project mattered less for the finished part and more for the process: research constraints, sketch by hand first, model deliberately, and expect to redo work when an assumption turns out wrong.",
      },
    ],
  },
  {
    slug: 'lateral-suspension',
    title: 'Lateral Suspension System — Texas Guadaloop Hyperloop Pod',
    category: 'Engineering',
    tags: ['SolidWorks', 'FEA', 'BOM', 'Manufacturing'],
    summary:
      'Designed and manufactured the lateral suspension subsystem for a competition hyperloop pod — from air-shock concept through a $4,287 manufactured assembly with a full bill of materials.',
    date: 'Fall 2021 – Spring 2022',
    image: '/images/suspension2_cadfront.jpg',
    content: [
      {
        type: 'p',
        text: "As a chemical engineer, SolidWorks wasn't part of my curriculum — I picked it up by joining the lateral suspension subteam on Texas Guadaloop, UT Austin's hyperloop pod team. The subsystem's job: keep the pod centered on the I-beam track, absorb vibration, and protect internal components, all while holding a safety factor above 2.",
      },
      { type: 'h2', text: 'Semester 1 — Design' },
      {
        type: 'list',
        items: [
          'Moved away from the team\'s previous reliance on air-bearings for levitation and suspension',
          'Prioritized modularity so the design could integrate cleanly with other subsystems',
          'Minimized roll and yaw, with lower priority on pitch',
          'Used air shocks (adjustable stiffness) between the u-channel and I-beam, with triangular braces for load distribution',
        ],
      },
      {
        type: 'image',
        src: '/images/suspension2_cadiso.jpg',
        alt: 'Suspension isometric CAD',
      },
      { type: 'h2', text: 'Semester 2 — Manufacturing' },
      {
        type: 'list',
        items: [
          'Full assembly cost: $4,286.88',
          '3D printed components in Onyx (nylon + carbon fiber)',
          'CNC, manual mill, and lathe work for triangular braces and drilled holes',
          'Water jet used to cut 2ft × 4ft aluminum plate for compression plates',
          'Shock absorbers: Fox DPS Float (lateral) and Fox DHX2 (vertical), 4 of each, 8 wheels total',
          'Full part numbering system so the team could manufacture and assemble without ambiguity',
        ],
      },
      {
        type: 'image',
        src: '/images/suspension2_latbom.jpg',
        alt: 'Lateral suspension bill of materials',
        caption: "Lateral suspension's bill of materials",
      },
      { type: 'h2', text: 'What I learned' },
      {
        type: 'p',
        text: "Design changes rippled across every other subsystem, so integration meetings mattered as much as CAD time. I also learned the limits of rapid prototyping — several 3D-printed parts weren't sturdy enough for the final assembly, which pushed the Gen II design toward magnetic (frictionless) suspension instead.",
      },
      {
        type: 'callout',
        text: 'Design is a process, not an end point — the version that shipped was the fourth or fifth iteration, not the first.',
      },
    ],
  },
  {
    slug: 'game-controller',
    title: 'Ergonomic Game Controller — SolidWorks Design',
    category: 'Engineering',
    tags: ['SolidWorks', 'Manufacturing', 'Ergonomics'],
    summary:
      'A from-scratch SolidWorks controller design covering hand-grip ergonomics, button and joystick geometry, and manufacturing tolerances for wall thickness and PCB clearance.',
    date: 'Winter 2021–2022',
    image: '/images/FinalProduct - TransparentTop.jpg',
    links: [{ label: 'GrabCAD file', href: 'https://grabcad.com/library/game-controller-11' }],
    content: [
      {
        type: 'p',
        text: "This started as a scoped-down version of a bigger ambition — I'd wanted to CAD a full F1 car chassis over winter break, but a Texas Guadaloop teammate suggested I build up SolidWorks fundamentals on something smaller first. A game controller gave me hand-grip ergonomics, button geometry, and a real PCB footprint to design around.",
      },
      { type: 'h2', text: 'Process' },
      {
        type: 'list',
        items: [
          'Sketched three ellipses referenced to a bounding box to define the hand-grip shape',
          'Connected the ellipses and added lofts and fillets for the grip contour',
          'Sketched buttons and joystick cutouts, extrude-cut to fit',
          'Modeled a basic PCB from footprint dimensions provided by an electronics-designer collaborator',
        ],
      },
      { type: 'h2', text: 'Manufacturing considerations' },
      {
        type: 'list',
        items: [
          'Rule of thumb applied: ribs at ~60% of main wall thickness (e.g. 2.00mm wall → 1.20mm ribs)',
          'Joystick cutout offset 22mm top-down to check clearance between joystick and housing',
          'Used SolidWorks Interference Detection to catch part overlaps before finalizing',
          'Applied real-world tolerancing — no part is ever made to an exact dimension, so features like the button cutouts carried a defined offset (0.2mm)',
        ],
      },
      {
        type: 'p',
        text: "The switch and button gap was never fully resolved — I didn't have exact switch dimensions, so the final model leaves a visible gap that a production version would need to close with either a redesigned PCB extension or an edge connector.",
      },
      {
        type: 'quote',
        text: 'Design is a process, not an end point.',
      },
    ],
  },
  {
    slug: 'interactive-3d-model',
    title: 'Interactive 3D Model Viewer — Three.js & model-viewer',
    category: 'Software',
    tags: ['Three.js', 'model-viewer', 'Animation', '3D'],
    summary:
      'A browser-based animated T-Rex viewer with live animation switching and playback-speed control — built after three days of format wrangling between .fbx, .obj, and .glb pipelines.',
    date: 'Mar – Jun 2023',
    image: '/images/mixamo_baymax.png',
    embed: 'model-viewer',
    content: [
      {
        type: 'p',
        text: "A coworker at Tesla suggested adding 3D modeling to my portfolio. I had zero Three.js experience going in, and it took three focused days — spread out over a few months around work and Texas Guadaloop — to go from a blank viewport to a live, animatable model.",
      },
      { type: 'h2', text: 'Day 1 — Learning Three.js' },
      {
        type: 'p',
        text: "Set up Three.js via Node/npm. First blocker: the viewport rendered a black placeholder no matter what I changed about lighting or camera. The real problem turned out to be unrelated JS files on the page conflicting with Three.js's module loading.",
      },
      { type: 'h2', text: 'Day 2 — Switching approaches' },
      {
        type: 'p',
        text: "Discovered model-viewer, Google's web component purpose-built for 3D in the browser — and immediately hit a new set of constraints: it only accepts .glb files. My first model (Baymax) had a subfolder structure and complex skin that model-viewer couldn't resolve. I converted a Wall-E .rar file, found a .glb version that was too large for GitHub's push limit, and eventually landed on a smaller Wall-E file that actually worked — my first live animated model.",
      },
      { type: 'h2', text: 'Day 3 — Animation' },
      {
        type: 'p',
        text: "Mixamo handles rigging and animation but exports .fbx, not .glb — another format-conversion chain. I found a pre-rigged, pre-animated T-Rex in native .glb format, which bypassed the Mixamo step entirely, and wired up buttons to swap between Bite, Run, and Roar animations plus a playback-speed slider.",
      },
      {
        type: 'callout',
        text: "One bug cost 30 minutes at 4am: I'd stripped the environment-image property to reduce file size before a GitHub push, and the model went completely black. That image was providing the PBR lighting the texture needed to render at all.",
      },
      { type: 'h2', text: 'Try it' },
      {
        type: 'p',
        text: 'The live viewer below uses the same technique — model-viewer with per-animation .glb files swapped on click. Model credit: "Animated T-Rex Model (free)" by ulunkwulunk, CC BY 4.0.',
      },
      { type: 'h2', text: 'Skills gained' },
      {
        type: 'list',
        items: [
          '3D rendering in the browser with model-viewer and Three.js',
          'Rigging and animating models in Mixamo',
          'File-format pipelines: .fbx → .obj → .glb',
          'Dynamic DOM manipulation to swap model sources on user interaction',
        ],
      },
    ],
  },
  {
    slug: 'covid-data-analysis',
    title: 'COVID-19 Data Analysis — Pandas & Kaggle',
    category: 'Data',
    tags: ['Python', 'Pandas', 'Kaggle', 'Data Visualization'],
    summary:
      'Self-taught Pandas project analyzing a public COVID-19 dataset — cleaning, indexing, and visualizing the relationship between pre-existing health conditions and case counts.',
    date: '2023',
    image: '/images/finaldata_covidcsv.png',
    links: [
      {
        label: 'Kaggle dataset',
        href: 'https://www.kaggle.com/datasets/meirnizri/covid19-dataset?resource=download',
      },
    ],
    content: [
      {
        type: 'p',
        text: "This project started with a throwaway comment on a call with an F1 simulation software architect, who mentioned Pandas for data processing. I'd never used it. A Tesla colleague on the Vision Automation team explained it was a Python library for working with large, Excel-style datasets — and I decided to learn it hands-on with a real dataset rather than a tutorial.",
      },
      { type: 'h2', text: 'Process' },
      {
        type: 'list',
        items: [
          'Sourced a public COVID-19 dataset from Kaggle',
          'Set up Jupyter Notebook and loaded the data into a Pandas DataFrame',
          'Fixed indexing (Excel column A → Python index 0)',
          'Filtered and rearranged columns to isolate the variables I wanted to compare',
          'Built a bar chart with matplotlib comparing case counts across pre-existing health conditions',
        ],
      },
      { type: 'h2', text: 'Debugging' },
      {
        type: 'p',
        text: "The chart didn't render on the first several attempts. Isolating the plotting code into its own cell, restarting the kernel, and re-running from scratch ruled out interference from earlier cells. The real bug was in the aggregation logic — a boolean mask (df.iloc[:,7:17] == 1) was being used directly instead of summed, so the count values feeding the chart were wrong. Rewriting it as df.iloc[:, 7:17].eq(1).sum(axis=1) fixed it.",
      },
      {
        type: 'quote',
        text: 'Sleep is the best debugger — the chart wasn\'t rendering at midnight, and the fix was obvious the next morning.',
      },
      { type: 'h2', text: 'Takeaways' },
      {
        type: 'list',
        items: [
          'loc is label-based indexing; iloc is integer-based — mixing them up caused most of the early bugs',
          'Reading library documentation properly matters more with an unfamiliar plotting API',
          'Restart the kernel after installing a new library, or it silently won\'t load',
        ],
      },
    ],
  },
  {
    slug: 'calendar-app',
    title: 'Calendar App — Python',
    category: 'Software',
    tags: ['Python', 'CS303E'],
    summary:
      "A from-scratch Python calendar generator for CS303E — computes leap years and days-per-month manually and renders a formatted calendar for any valid year.",
    date: 'Fall 2021',
    image: '/images/calendarapp_code.png',
    content: [
      {
        type: 'p',
        text: "One of the first projects from my first-ever coding class, CS303E, and still one I'm proud of. The assignment: build a program that takes a year as input and prints a correctly formatted calendar for all 12 months — no calendar libraries allowed, so the leap-year and days-per-month math had to be derived and coded by hand.",
      },
      { type: 'h2', text: 'Process' },
      {
        type: 'list',
        items: [
          'Worked out the leap-year rule and days-per-month logic on paper before writing code',
          'Coded input handling with validation for non-positive or non-integer input',
          'Built functions to calculate the first weekday of each month and the number of days in it',
          'Used a formatted print loop to lay out each month in a standard Su–Sa grid',
        ],
      },
      { type: 'h2', text: 'What I learned' },
      {
        type: 'p',
        text: "The professor gave a goal with no implementation instructions, which meant the research and structure were entirely mine to figure out. I lost a few points for a formatting detail — the retry-input message needed two-space indentation to match spec — a reminder that correctness and exact spec-matching aren't the same thing.",
      },
      {
        type: 'callout',
        text: 'Try something new, learn something new.',
      },
    ],
  },
  {
    slug: 'vima',
    title: 'Vima — Study Space Finder (Hackathon, Best Education Hack)',
    category: 'Software',
    tags: ['React Native', 'Hackathon', 'Mobile'],
    summary:
      'A React Native app to help students find open study spaces, built in 24 hours for my first hackathon — won Best Education Hack.',
    date: 'Feb 2022',
    image: '/images/vima_logo.png',
    links: [
      {
        label: 'Final presentation',
        href: 'https://docs.google.com/presentation/d/12E553FCIHd4CmFgBeUYKqA8yx5rvi2v0YEdeEZDE7eE/view?usp=sharing',
      },
    ],
    content: [
      {
        type: 'p',
        text: "My first hackathon, joined at a friend's request right after I'd finished my first Python class. The brief: design, code, and pitch a product in 24 hours. Our team picked education as our focus category and identified a specific, relatable problem — it's hard to find an open study space on a crowded campus.",
      },
      { type: 'h2', text: 'Process' },
      {
        type: 'list',
        items: [
          'Identified the problem: students couldn\'t quickly find available study spaces',
          'Chose React Native for cross-platform (iOS/Android) reach, on a mentor\'s recommendation',
          'Split work — I built the front end and GPS/location logic; teammates built the pitch deck and login flow',
          'Built and rehearsed a live pitch for a judging panel',
        ],
      },
      { type: 'h2', text: 'What I learned' },
      {
        type: 'list',
        items: [
          'Delegating under a hard deadline, and asking mentors for help early rather than late',
          'JavaScript fundamentals via React Native, with zero prior JS experience',
          'Pitching technical work to judges, mentors, and managers in a tight time window',
        ],
      },
      {
        type: 'p',
        text: "After a sleepless 24 hours and a lot of coffee, the team won Best Education Hack — our first hackathon, first placement.",
      },
      {
        type: 'image',
        src: '/images/vima_win.jpg',
        alt: 'Vima team after winning Best Education Hack',
      },
    ],
  },
  {
    slug: 'portfolio-website',
    title: 'This Portfolio — Built, Then Rebuilt',
    category: 'Software',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'HTML/CSS'],
    summary:
      "The site you're on. Started as a winter-break HTML project after my first coding class; rebuilt in 2026 as a Next.js app with a dark, interactive, recruiter-facing design.",
    date: 'Winter 2022 — present',
    image: '/images/websiteCode.jpg',
    content: [
      {
        type: 'p',
        text: "This site started during winter break 2022, right after CS303E — my first coding class. I hadn't written a line of HTML before, but the Python fundamentals from class (syntax structure, logic, debugging habits) transferred faster than I expected. I taught myself HTML and CSS through YouTube and documentation, then hosted the result on GitHub Pages as a running journal of what I was building and learning.",
      },
      { type: 'h2', text: 'V1: static HTML, 2022–2026' },
      {
        type: 'p',
        text: "The original site was a hand-edited static HTML5UP template — every new project or blog post meant copy-pasting a page and manually keeping the navigation, footer, and contact form in sync across a dozen-plus files. It worked, and it shipped consistently for years, but it wasn't built to scale past a personal journal.",
      },
      { type: 'h2', text: 'V2: Next.js rebuild, 2026' },
      {
        type: 'p',
        text: "Heading into a more senior job search, I rebuilt the entire site as a Next.js + TypeScript + Tailwind app: one data-driven template for every case study and blog post instead of hand-copied HTML, real component architecture, scroll-triggered motion, a live GitHub activity widget, and a dark, tech-forward visual system aimed at the recruiters and engineers actually reading it.",
      },
      {
        type: 'list',
        items: [
          'Every project and blog page now renders from a typed content model instead of duplicated markup',
          'Framer Motion for scroll reveals and page transitions',
          'A live GitHub widget pulling real repo and activity data from the public API',
          'Contact form with structured project-brief fields instead of a single freeform message box',
        ],
      },
      {
        type: 'callout',
        text: "Keep innovating — the same principle behind the 2022 version is still true in 2026, just with a much better toolchain.",
      },
    ],
  },
  {
    slug: 'videography',
    title: 'Videography — Award-Winning Robotics Films',
    category: 'Design',
    tags: ['Adobe Premiere Pro', 'Storytelling', 'Video'],
    summary:
      "Self-taught video production for a FIRST Robotics team — including a Chairman's Award-winning film, the team's first win in its history.",
    date: '2019 – 2020',
    image: '/images/Chairman1.jpg',
    links: [
      { label: 'VorTX 2019 Chairman\'s video', href: 'https://www.youtube.com/watch?v=sE3U7BwqROc' },
      { label: 'VorTX 3735 channel', href: 'https://www.youtube.com/channel/UCxOHt6h_aFeYcS7nnuXV1mw' },
    ],
    content: [
      {
        type: 'p',
        text: "Video production found me, not the other way around — a robotics team needed someone to produce a film for a prestigious award and nobody else had picked it up. I'd never opened Adobe Premiere Pro before that first project.",
      },
      { type: 'h2', text: "2019 Chairman's Award" },
      {
        type: 'p',
        text: "I researched past award-winning FIRST Chairman's videos, identified patterns in narration structure, data use, and subject selection, and built a storyboard around the robotics program's story while staying inside copyright and competition rules. I iterated with mentor feedback through the whole process. Team VorTX 3735 won the Chairman's Award for the first time in its history that year.",
      },
      { type: 'h2', text: 'Beyond the award' },
      {
        type: 'p',
        text: "I kept producing videos for the team through April 2020 — recap videos, a follow-up Chairman's submission — and separately produced a video for Boy Scouts Troop 440, shown by Harris County Precinct 4 during Civic Adventure Week to promote outdoor conservation.",
      },
      {
        type: 'quote',
        text: "Never back down from a challenge — it's what makes you stronger.",
      },
    ],
  },
  {
    slug: 'atlas',
    title: 'Atlas — Android Route Planning App',
    category: 'Software',
    tags: ['Android Studio', 'Coming Soon'],
    summary: 'Route planning and data visualization app, in progress in Android Studio.',
    date: 'In progress',
    image: '/images/pic04.jpg',
    status: 'coming-soon',
    content: [
      {
        type: 'p',
        text: "Atlas is a route-planning and data-visualization app in active development in Android Studio, focused on mobile workflow and data-viz fundamentals outside of a web context. Details and a live build are coming — check back or reach out if you want a preview.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
