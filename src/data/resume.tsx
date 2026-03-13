import { Icons } from '@/components/icons';
import { SparklesText } from '@/components/ui/sparkles-text';
import {
  CodeIcon,
  HomeIcon,
  LocateIcon,
  MapPin,
  NotebookIcon,
  PencilLine,
} from 'lucide-react';

export const DATA = {
  name: 'Tran Duong',
  initials: 'TD',
  url: 'https://tran-duong.vercel.app/',
  location: (
    <span className='flex items-center'>
      <MapPin className='mr-2 h-4 w-4' strokeWidth={1} /> Kaohsiung, Taiwan
    </span>
  ),
  locationLink: '',
  description: '3+ years of experience in Web Development',
  summary:
    'A fast learner who loves the process of creating new products. I adapt quickly, work seamlessly with teams, and am equally comfortable driving independent projects.',
  avatarUrl: '/me.jpeg',
  skills: [
    'ReactJS',
    'Redux',
    'Next.js',
    'HTML/CSS',
    'TailwindCSS',
    'ShadcnUI',
    'Material UI',
    'Ant Design',
    'Node.js',
    'Nest.js',
    'Prisma',
    'Python',
    'Javascript/Typescript',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: '/projects', icon: CodeIcon, label: 'Projects' },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: 'dtran2108@gmail.com',
    tel: '+886972722795',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/dtran2108',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/tran-boba-duong/',
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'INVINCIX',
      href: 'https://www.invincix.com',
      badges: [],
      location: 'Remote',
      title: 'Associate Consultant - Full time',
      logoUrl: '/invincix.png',
      start: 'June 2022 ',
      end: 'May 2024',
      description: (
        <>
          <ul>
            <li>
              - Developed Instablood's management system, a web application that
              connects and coordinates 1,000+ blood donors and recipients across
              India and Vietnam.
            </li>
            <li>
              - Developed a task ticket management system using AngularJS on
              frontend side and Microsoft Azure Active Directory for
              authentication.
            </li>
            <li>
              - Led a team of 3 to build a garage management system using
              Next.js 14, Nest.js, and Prisma.
            </li>
          </ul>
          <p className='mt-2'>
            <b>Tech stacks: </b>ReactJS, Redux, Prisma, Next.js, ShadcnUI,
            Node.js, Nest.js, AngularJS, Recharts, Typescript, TailwindCSS
          </p>
        </>
      ),
    },
    {
      company: 'eCarAid',
      badges: [],
      href: 'https://ecaraid.com',
      location: 'Remote',
      title: 'Frontend Engineer - Part time',
      logoUrl: '/ecaraid.png',
      start: 'June 2021',
      end: 'June 2022',
      description: (
        <>
          <ul>
            <li>
              - Worked as a Frontend Engineer to develop an admin management
              system.
            </li>
            <li>
              - Communicated closely with the Backend team to integrate 100+
              APIs into the UI.
            </li>
            <li>- Configured i18n for localization.</li>
            <li>- Upgraded the source code from webpack version 4 to 5.</li>
          </ul>
          <p className='mt-2'>
            <b>Tech stacks: </b>ReactJS, Ant Design, Recharts, Typescript,
            TailwindCSS
          </p>
        </>
      ),
    },
  ],
  education: [
    {
      school: 'National Sun Yat-sen University',
      href: 'https://www.nsysu.edu.tw',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: '/nsysu.jpeg',
      start: 'February 2024',
      end: 'January 2027 (expected)',
      description: (
        <div className='flex gap-1'>
          <SparklesText className='text-sm'>
            NSYSU International Student Scholarship holder
          </SparklesText>{' '}
          since the 2nd semester onward
        </div>
      ),
    },
  ],
  projects: [
    {
      title: 'CollaboSpeak',
      href: 'https://collabospeak.vercel.app/',
      dates: '',
      active: true,
      description:
        'A full-stack AI communication trainer featuring real-time voice interactions, role-play scenarios, and data-driven skill assessments. Integrated ElevenLabs AI, Supabase, and interactive analytics dashboards for English language learners.',
      technologies: [
        'Next.js',
        'Supabase',
        'TypeScript',
        'TailwindCSS',
        'Shadcn UI',
        'ElevenLabs AI',
        'Recharts',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://collabospeak.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/collabospeak.png',
      video: '',
    },
    {
      title: 'Telto',
      href: 'https://telto.xprodedge.com/',
      dates: '',
      active: true,
      description:
        'Led a team of 4 to build Telto, an SaaS application that digitizes and improves garage workflows.',
      technologies: [
        'Next.js',
        'Node.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://telto.xprodedge.com/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/telto.png',
      video: '',
    },
    {
      title: 'Saigonxanh',
      href: 'https://saigonxanh.vercel.app',
      dates: '',
      active: true,
      description:
        "A project for a local non-profit organization. This initiative focuses on protecting Saigon's rivers by collecting and recycling waste. They install trash barriers, organize cleanups, and collaborate with communities to improve waste management.",
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI'],
      links: [
        {
          type: 'Website',
          href: 'https://saigonxanh.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/dtran2108/saigonxanh',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/saigonxanh.png',
      video: '',
    },
    {
      title: 'Duy Dien Wedding',
      href: 'https://wedding-uyq9-git-version-2-tran-duongs-projects-a30b6eff.vercel.app',
      dates: '',
      active: true,
      description:
        "Designed and developed a wedding website for my friend's special day, incorporating personalized elements and features to celebrate their unique love story.",
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI'],
      links: [
        {
          type: 'Website',
          href: 'https://wedding-uyq9-git-version-2-tran-duongs-projects-a30b6eff.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/duydienwedding.png',
      video: '',
    },
  ],
  hackathons: [
    {
      title: 'DeveloperWeek Hackathon',
      dates: 'February 3rd - 4th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
      links: [
        {
          title: 'Github',
          icon: <Icons.github className='h-4 w-4' />,
          href: 'https://github.com/cryptotrends/cryptotrends',
        },
      ],
    },
  ],
} as const;
