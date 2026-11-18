// ===== All the words and lists for the site live here =====
// Edit this file and every page updates.

// ----- My projects -----
export var projects = [
  {
    id: 1,
    code: 'Study Log',
    title: 'Study Log',
    type: 'web',
    color: 'c1',
    summary: 'A dashboard for logging study sessions, setting weekly goals and seeing how much I really studied.',
    role: 'Full-stack developer',
    status: 'Complete',
    tools: ['Node.js', 'EJS', 'MySQL'],
    overview: 'Students often lose track of how much they actually study. Study Log gives them one place to record sessions, set weekly targets and see their progress at a glance.',
    process: [
      'Asked classmates what annoyed them most. The answer was forgetting what they studied and for how long.',
      'Sketched a simple flow: log a session, view the week, change goals.',
      'Built the Express routes and the MySQL tables for users, sessions and goals.',
      'Made the EJS pages with clear progress bars and tested them with friends.'
    ],
    outcome: 'A working dashboard with login, session logging and weekly goal tracking. Testers said seeing their weekly total helped them study more regularly.'
  },
  {
    id: 2,
    code: 'GreenCommute',
    title: 'GreenCommute',
    type: 'web',
    color: 'c2',
    summary: 'A calculator that shows how much carbon your daily commute makes, and what a greener choice would save.',
    role: 'Front-end and UX',
    status: 'Complete',
    tools: ['JavaScript', 'UX', 'Data'],
    overview: 'Most people in Singapore never see the carbon cost of their daily trip. GreenCommute turns a few simple answers into a yearly number and suggests options like the MRT or cycling.',
    process: [
      'Looked up emission numbers for car, bus, MRT and cycling trips.',
      'Used a three-step form so it feels quick and not like homework.',
      'Wrote the calculation in plain JavaScript and showed results as easy comparisons.',
      'Tested it with users and changed the labels that confused them.'
    ],
    outcome: 'A responsive calculator that compares commute options side by side, so the greener choice is easy to see.'
  },
  {
    id: 3,
    code: 'Car Rental',
    title: 'Car Rental System',
    type: 'web',
    color: 'c3',
    summary: 'A rental website where customers can find cars, check dates and manage their bookings.',
    role: 'Full-stack developer',
    status: 'In progress',
    tools: ['Full stack', 'Database', 'Git'],
    overview: 'Renting a car should be as easy as ordering food. Customers can browse cars, check dates and manage bookings, while admins look after the cars.',
    process: [
      'Mapped out the booking steps for customers and for admins.',
      'Designed the database so the same car cannot be booked twice on the same dates.',
      'Built pages to add, view, edit and delete cars and bookings, with form checks.',
      'Used Git branches so new features did not break the main version.'
    ],
    outcome: 'Browsing and booking already work. Next I want to add a payment demo and an admin dashboard.'
  },
  {
    id: 4,
    code: 'BrainHack',
    title: 'BrainHack',
    type: 'uiux',
    color: 'c4',
    summary: 'A hackathon idea that my team turned into a clickable prototype and pitched. We placed first runner-up in 2026.',
    role: 'UI/UX designer',
    status: 'Active',
    tools: ['Figma', 'UI/UX', 'Prototype'],
    overview: 'At BrainHack my team had to turn one idea into a pitch-ready prototype very quickly. I worked on the user flow and the screens.',
    process: [
      'Talked through the problem with the team and picked one main user.',
      'Drew the user journey on paper before opening Figma.',
      'Designed the key screens and linked them into a clickable prototype.',
      'Cleaned up the visuals and practised the demo for the pitch.'
    ],
    outcome: 'A clickable prototype and a pitch that explained the idea clearly. My team placed first runner-up at BrainHack 2026.'
  }
];

// ----- My links. Paste your real links between the quotes. -----
export var myLinks = {
  github: '',
  linkedin: '',
  email: '',
  cv: '',
  repo: '',
  demo: ''
};

// ----- My credentials. Change this list when you earn a new one! -----
// state can be 'done' (earned), 'now' (working on it) or 'locked' (not yet)
export var certs = [
  { tag: '2026', title: 'BrainHack 2026: First Runner-up', by: 'BrainHack', state: 'done' },
  { tag: 'NOW',  title: 'Diploma in Information Technology', by: 'Republic Polytechnic', state: 'now' },
  { tag: '???',  title: 'Cloud app development', by: 'Currently learning', state: 'locked' },
  { tag: '???',  title: 'Mobile app development', by: 'Currently learning', state: 'locked' },
  { tag: '???',  title: 'DevOps basics', by: 'Learning a little bit', state: 'locked' }
];

// ----- Home page: "What I work with" pills -----
export var skills = [
  'HTML & CSS', 'JavaScript', 'Node.js', 'Express', 'EJS', 'MySQL',
  'Supabase', 'Git', 'Docker', 'n8n', 'Ansible', 'Figma'
];

// ----- About page: bubbles (size is in pixels, learning = dashed circle) -----
export var bubbles = [
  { name: 'HTML & CSS', size: 130, learning: false },
  { name: 'JavaScript', size: 120, learning: false },
  { name: 'Node.js', size: 104, learning: false },
  { name: 'Express', size: 96, learning: false },
  { name: 'MySQL', size: 108, learning: false },
  { name: 'Git', size: 80, learning: false },
  { name: 'Figma', size: 92, learning: true },
  { name: 'Mobile Apps', size: 104, learning: true },
  { name: 'Cloud', size: 92, learning: true },
  { name: 'Docker', size: 92, learning: true },
  { name: 'Ansible', size: 92, learning: true },
  { name: 'n8n', size: 78, learning: true }
];

// ----- Achievements page -----
export var moments = [
  {
    top: '1st', bottom: 'runner-up',
    title: 'BrainHack 2026: First Runner-up',
    text: 'My team placed first runner-up at BrainHack 2026. We turned one idea into a pitch-ready prototype in a short time, and I worked on the user flow and the screens in Figma.'
  },
  {
    top: 'Full', bottom: 'stack',
    title: 'Study Log is live',
    text: 'I built a full-stack study dashboard with login, session logging and weekly goals using Node.js, EJS and MySQL.'
  },
  {
    top: 'Level', bottom: '2',
    title: 'Year 2 at Republic Polytechnic',
    text: 'I moved into Year 2 and added automation, data analytics and DevNet to the things I can do.'
  }
];

// ----- Open a link (or say "coming soon" if it is empty) -----
export function openLink(name, showMessage) {
  var url = myLinks[name];
  if (url === '') {
    showMessage('Link coming soon!');
    return;
  }
  if (name === 'email') {
    window.location.href = 'mailto:' + url;
  } else {
    window.open(url, '_blank');
  }
}
