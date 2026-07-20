export interface SkillEvidence {
  type: 'project' | 'blog';
  slug: string;
}

export interface Skill {
  name: string;
  evidence?: SkillEvidence[];
  // Fallback label for skills used on the job (often NDA'd, so no public project page exists) —
  // shown instead of evidence links.
  context?: string;
}

export interface SkillGroup {
  category: string;
  icon: string; // lucide icon name, resolved in component
  skills: Skill[];
}

// Every skill here is grounded in either a linked case study / blog post, or a plain-text
// context note when the work is real but not publicly shown (e.g. NDA'd Tesla projects).
// No self-rated proficiency bars — see it in the work instead.
export const skillGroups: SkillGroup[] = [
  {
    category: 'Engineering & CAD',
    icon: 'Cog',
    skills: [
      {
        name: 'SolidWorks',
        evidence: [
          { type: 'project', slug: 'f1-car' },
          { type: 'project', slug: 'lateral-suspension' },
          { type: 'project', slug: 'game-controller' },
        ],
      },
      {
        name: 'GD&T / Bill of Materials',
        evidence: [{ type: 'project', slug: 'lateral-suspension' }],
      },
      {
        name: 'Finite Element Analysis (FEA)',
        evidence: [{ type: 'project', slug: 'lateral-suspension' }],
      },
      { name: 'AutoCAD Plant 3D', context: 'Tesla — Manufacturing Engineering (NDA)' },
      { name: 'DEM / ANSYS simulation', context: 'Tesla — Material Flow Automation (NDA)' },
    ],
  },
  {
    category: 'Data & Software',
    icon: 'Code2',
    skills: [
      {
        name: 'Python (Pandas, matplotlib)',
        evidence: [
          { type: 'project', slug: 'covid-data-analysis' },
          { type: 'project', slug: 'calendar-app' },
        ],
      },
      {
        name: 'React / React Native',
        evidence: [{ type: 'project', slug: 'vima' }],
      },
      {
        name: 'Next.js, TypeScript, Tailwind',
        evidence: [{ type: 'project', slug: 'portfolio-website' }],
      },
      {
        name: 'Three.js / model-viewer',
        evidence: [{ type: 'project', slug: 'interactive-3d-model' }],
      },
      { name: 'C# (SQLite, LINQ)', context: 'Tesla — Manufacturing Engineering (NDA)' },
    ],
  },
  {
    category: 'Project & Program Management',
    icon: 'ListChecks',
    skills: [
      {
        name: 'Cross-functional coordination',
        evidence: [{ type: 'blog', slug: 'disney-imagineering' }],
      },
      {
        name: 'Budget management ($33K raised)',
        evidence: [{ type: 'blog', slug: 'president-texas-guadaloop' }],
      },
      {
        name: 'Schedule & milestone tracking',
        evidence: [{ type: 'blog', slug: 'disney-imagineering' }],
      },
      {
        name: 'Executive & stakeholder presentations',
        evidence: [
          { type: 'blog', slug: 'president-texas-guadaloop' },
          { type: 'blog', slug: 'woven-by-toyota-tokyo' },
        ],
      },
    ],
  },
  {
    category: 'Design & Production',
    icon: 'Figma',
    skills: [
      {
        name: 'Adobe Premiere Pro',
        evidence: [{ type: 'project', slug: 'videography' }],
      },
      {
        name: 'Git / GitHub',
        evidence: [{ type: 'project', slug: 'portfolio-website' }],
      },
      { name: 'Figma', context: 'Course & side-project wireframes' },
    ],
  },
];

export const certifications = [
  '3D Printer Certified',
  'Laser Cutter Certified',
  'Breadboard & Soldering Certified',
  'Machine Shop Certified',
  'CPR Certified',
];
