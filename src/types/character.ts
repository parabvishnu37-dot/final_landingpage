/**
 * SOLO Learner Character - Type Definitions & Narrative Registry
 * 
 * Based on the official SOLO Learner Character Sheet reference.
 * "Curious today. Career ready tomorrow."
 */

export type SoloCharacterState =
  | 'starting'
  | 'profile'
  | 'explore'
  | 'build'
  | 'prove'
  | 'share'
  | 'ready';

export interface CharacterPoseMeta {
  id: string;
  state: SoloCharacterState;
  stepNumber: number;
  label: string;
  tagline: string;
  narrative: string;
  image1x: string;
  image2x: string;
  expression: 'Curious' | 'Thoughtful' | 'Happy' | 'Confident' | 'Excited';
  props: string[];
  associatedSection?: string;
}

export const CHARACTER_STATES: Record<SoloCharacterState, CharacterPoseMeta> = {
  starting: {
    id: '01_starting',
    state: 'starting',
    stepNumber: 1,
    label: 'Starting',
    tagline: 'Not sure where to begin.',
    narrative: 'Curious and uncertain, holding a resume/tablet and wondering how to start the career journey.',
    image1x: '/character/01_starting.png',
    image2x: '/character/01_starting@2x.png',
    expression: 'Curious',
    props: ['Resume Tablet', 'Floating Question Mark (?)'],
    associatedSection: 'Resume Import'
  },
  profile: {
    id: '02_profile',
    state: 'profile',
    stepNumber: 2,
    label: 'Profile',
    tagline: 'Now I know what I have.',
    narrative: 'Looking at his structured profile on the tablet, realizing the value of his existing experience.',
    image1x: '/character/02_profile.png',
    image2x: '/character/02_profile@2x.png',
    expression: 'Thoughtful',
    props: ['Structured Profile Tablet'],
    associatedSection: 'Learner Profile'
  },
  explore: {
    id: '03_explore',
    state: 'explore',
    stepNumber: 3,
    label: 'Explore',
    tagline: "What's possible for me?",
    narrative: 'Hand shading eyes and looking ahead toward open horizons — discovering courses, internships, and pathways.',
    image1x: '/character/03_explore.png',
    image2x: '/character/03_explore@2x.png',
    expression: 'Confident',
    props: ['Backpack', 'Hand Shading Forehead'],
    associatedSection: 'Explore & Opportunities'
  },
  build: {
    id: '04_build',
    state: 'build',
    stepNumber: 4,
    label: 'Build',
    tagline: "I'm building my skills.",
    narrative: 'Seated comfortably with a laptop on his lap, focused and actively building projects and technical skills.',
    image1x: '/character/04_build.png',
    image2x: '/character/04_build@2x.png',
    expression: 'Thoughtful',
    props: ['Dark Laptop', 'Pedestal Seat'],
    associatedSection: 'Career Pathways / Skills'
  },
  prove: {
    id: '05_prove',
    state: 'prove',
    stepNumber: 5,
    label: 'Prove',
    tagline: "I can prove what I've done.",
    narrative: 'Holding up a verified credential certificate with a dark checkmark badge and radiating sparkles, proud and validated.',
    image1x: '/character/05_prove.png',
    image2x: '/character/05_prove@2x.png',
    expression: 'Happy',
    props: ['Verified Credential Certificate', 'Verification Badge', 'Radiating Sparkles'],
    associatedSection: 'Verified Credentials'
  },
  share: {
    id: '06_share',
    state: 'share',
    stepNumber: 6,
    label: 'Share',
    tagline: "I can show what I've achieved.",
    narrative: 'Arms open with a floating share bubble, ready to broadcast verified proof to employers and networks.',
    image1x: '/character/06_share.png',
    image2x: '/character/06_share@2x.png',
    expression: 'Excited',
    props: ['Share Node Speech Bubble', 'Open Welcoming Gesture'],
    associatedSection: 'Credential Sharing'
  },
  ready: {
    id: '07_ready',
    state: 'ready',
    stepNumber: 7,
    label: 'Ready',
    tagline: "I know what's next.",
    narrative: 'Striding forward with thumbs tucked into backpack straps and a bright smile — fully prepared for career opportunities.',
    image1x: '/character/07_ready.png',
    image2x: '/character/07_ready@2x.png',
    expression: 'Confident',
    props: ['Travel Backpack', 'Confident Stride'],
    associatedSection: 'Final CTA / Career Launch'
  },
};

export const CHARACTER_PALETTE = {
  accentOrange: '#FD4322',      // SOLO brand signature accent
  darkNavy: '#14243D',          // Pants, backpack straps, primary darks
  hoodieCream: '#F7F5F0',       // Off-white hoodie (NO logo)
  neutralLight: '#E2E8F0',      // Card backgrounds & borders
  skinPeach: '#F7C5A8',         // Warm natural skin tone
  darkText: '#0F172A',
  mutedText: '#64748B',
} as const;

export const CHARACTER_ORDER: SoloCharacterState[] = [
  'starting',
  'profile',
  'explore',
  'build',
  'prove',
  'share',
  'ready',
];
