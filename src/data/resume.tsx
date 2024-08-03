import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Tran Duong",
  initials: "TD",
  url: "https://dillion.io",
  location: "",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "3+ years of experience in Frontend Development, I'm always on the hunt for new technologies to master and passionate about giving back to the community through innovative projects.",
  summary:
    "Presented as a team player, a fast learner, and a beauty enthusiast, I love the process of creating a new product. Willing to work as a team member as well as an individual, I am excited to continue my career with a focus on building sites with high accessibility and responsiveness.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Redux",
    "Next.js",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Prisma",
    "Python",
    "PostgreSQL",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "dtran2108@gmail.com",
    tel: "+886972722795",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dtran2108",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tran-duong-frontend/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "INVINCIX",
      href: "https://www.invincix.com",
      badges: [],
      location: "Remote",
      title: "Associate Consultant - Fulltime",
      logoUrl: "/invincix.png",
      start: "June 2022 ",
      end: "May 2024",
      description:
        "Worked as a Frontend developer in a team of 4 to develop task ticket management system using AngularJS on frontend side and Microsoft Azure Active Directory for authentication. Developed Instablood, an application that allows people to connect and donate blood, which has over 1,000 daily users in India and Vietnam. Led a team of 3 as a fullstack engineer to build a garage management system using Next.js 14, Nest.js, and Prisma.",
    },
    {
      company: "eCarAid",
      badges: [],
      href: "https://ecaraid.com",
      location: "Remote",
      title: "React Developer - Part time",
      logoUrl: "/ecaraid.png",
      start: "June 2021",
      end: "June 2022",
      description:
        "Configured i18n for localization. Upgraded the source code from webpack version 4 to 5. Used Ant Design UI library and styled-component to build a customer website. Connected 50+ APIs and processed data for UI display and user interaction.",
    },
    {
      company: "VSL Software",
      href: "https://vslsoft.com",
      badges: [],
      location: "Ho Chi Minh, Vietnam",
      title: "React Developer - Internship",
      logoUrl: "/vsl.png",
      start: "March 2021",
      end: "May 2021",
      description:
        "Used Nextjs to build a client site. Configured HTML to meet company standards for SEO and Accessibility. Participated in an admin portal project with Reactjs and Redux. Connected APIs for internal use.",
    },
    {
      company: "Komit Vietnam",
      href: "http://komit-consulting.com",
      badges: [],
      location: "Ho Chi Minh, Vietnam",
      title: "Odoo Developer - Internship",
      logoUrl: "/komit.png",
      start: "July 2019",
      end: "September 2019",
      description:
        "Upgraded the backup tool from version 11 of Odoo to version 12 of Odoo. Developed basic features in the Odoo Invoicing module. Worked in a team of 3 members to prepare a P&L report based on Vietnamese regulations. Developed a new module to manage meeting room booking for the company in 1 week.",
    }
  ],
  education: [
    {
      school: "National Sun Yat-sen University",
      href: "https://www.nsysu.edu.tw",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/nsysu.jpeg",
      start: "2024",
      end: "2028 (expected)",
    },
  ],
  projects: [
    {
      title: "Telto",
      href: "https://telto.xprodedge.com/en/welcome",
      dates: "",
      active: true,
      description:
        "I led a team of 4 to build Telto, a powerful SaaS application that digitizes and improves garage workflows. By managing job cards and inventory, Telto makes operations easier and more efficient.",
      technologies: [
        "Next.js",
        "Node.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://telto.xprodedge.com/en/welcome",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/telto.png",
      video: "",
    },
    {
      title: "Commercial Digitals",
      href: "https://www.commercialdigitals.com",
      dates: "",
      active: true,
      description:
        "Developed the landing page for Commercial Digitals, a forward-thinking digital marketing agency. They specialize in SEO, social media management, web development, and content creation to enhance online presence and drive business growth.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.commercialdigitals.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cdweb.png",
      video: "",
    },
    {
      title: "Saigonxanh",
      href: "https://saigonxanh.vercel.app",
      dates: "",
      active: true,
      description:
        "A community project I developed for a local non-profit organization. This initiative focuses on protecting Saigon's rivers by collecting and recycling waste. They install trash barriers, organize cleanups, and collaborate with communities to improve waste management.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://saigonxanh.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dtran2108/saigonxanh",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/saigonxanh.png",
      video: "",
    },
    {
      title: "Duy Dien Wedding",
      href: "https://wedding-uyq9-git-version-2-tran-duongs-projects-a30b6eff.vercel.app",
      dates: "",
      active: true,
      description:
        "I designed and developed a wedding website for my friend's special day, incorporating personalized elements and features to celebrate their unique love story.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://wedding-uyq9-git-version-2-tran-duongs-projects-a30b6eff.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/duydienwedding.png",
      video: "",
    },
    {
      title: "Bento Grid Wedding",
      href: "https://wedding-uyq9-os5utryex-tran-duongs-projects-a30b6eff.vercel.app/scroll",
      dates: "",
      active: true,
      description:
        "I developed a trendy bento grid design specifically tailored to a wedding theme, incorporating elegant and modern elements to enhance the overall aesthetic.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://wedding-uyq9-os5utryex-tran-duongs-projects-a30b6eff.vercel.app/scroll",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bentogridwed.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    }
  ]
} as const;
