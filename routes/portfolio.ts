import { Request, Response, Router } from "express";
import { Achievement } from "../models";

const router = Router();

const portfolioData = {
  profile: {
    name: "LA QUOC ANH",
    role: "FULLSTACK & BLOCKCHAIN DEVELOPER",
    intro:
      "Passionate developer focused on building efficient solutions with a commitment to clean code and continuous learning",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Solidity",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Chakra UI",
      "Flutter",
      "Node.js",
      "Express.js",
      "Nest.js",
    ],
    github: "https://github.com/quocanhbk",
  },
  companies: [
    {
      name: "Blockpixels",
      intro: "Becoming a professional software engineer",
      role: "Fullstack and Blockchain Developer",
      period: "06/2023 - 01/2025",
      projects: [
        {
          title: "Mystery Box",
          description:
            "A web application platform that allows users to buy mystery boxes and open them to get random NFTs. Users can also trade NFTs on the marketplace.",
        },
        {
          title: "Kemi",
          description:
            "A web application platform that allows users to craft their own characters from wearable NFTs. Users can also trade NFTs on the marketplace.",
        },
      ],
    },
    {
      name: "Ather Labs",
      intro: "Stepping into the world of blockchain development",
      role: "Fullstack and Blockchain Developer",
      period: "09/2021 - 05/2023",
      projects: [
        {
          title: "Sipher Shop",
          description:
            "A web application platform that allows users to buy game items using various payment methods, including crypto.",
        },
        {
          title: "Play To Earn",
          description:
            "A web application to manage and reward users for completing in-game activities.",
        },
      ],
    },
    {
      name: "Trung Thuy Group",
      intro: "My first step into the world of software development",
      role: "Software Developer",
      period: "03/2020 - 09/2021",
      projects: [
        {
          title: "Sign-off Application",
          description:
            "A web application for a real estate company to manage sign-off process.",
        },
        {
          title: "Customer Management System",
          description:
            "A web application for a real estate company to manage customer information.",
        },
        {
          title: "Human Resource Management System",
          description:
            "A web application for a real estate company to manage company organization and human resource information.",
        },
      ],
    },
  ],
  sideProjects: [
    {
      title: "Greetin",
      description:
        "A cross-platform mobile application, built with Flutter, that allows users to find language exchange partners using match-making algorithm.",
    },
  ],
  funProjects: [
    {
      title: "Merkle Root Generator & Verifier",
      description:
        "A web application that allows users to generate and verify Merkle roots for a given list of items.",
      link: "https://merkle-root.vercel.app",
    },
    {
      title: "Sorting Visualizer",
      description:
        "A web application that allows users to visualize different sorting algorithms.",
      link: "https://quocanhbk17.vercel.app/",
    },
  ],
  extras: {
    education: {
      school: "Ho Chi Minh University of Technology",
      major: "Computer Science",
      period: "08/2017 - 04/2022",
    },
    certifications: ["TOEIC Certificate with score 960 (2023)"],
    contact: {
      email: "quocanhbk17@gmail.com",
      github: "https://github.com/quocanhbk",
    },
    workingStyle: [
      "Embracing Simplicity: Develop simple, efficient solutions for complex problems",
      "Prioritizing Cleanliness: Maintain clean and well-organized code",
      "Commitment to Learning: Continuously expand knowledge in technologies",
    ],
  },
};

// Landing page
router.get("/", (req: Request, res: Response) => {
  res.render("portfolio/index", { profile: portfolioData.profile });
});

// Projects page
router.get("/projects", (req: Request, res: Response) => {
  res.render("portfolio/projects", {
    companies: portfolioData.companies,
    sideProjects: portfolioData.sideProjects,
    funProjects: portfolioData.funProjects,
  });
});

// Extras page
router.get("/extras", (req: Request, res: Response) => {
  res.render("portfolio/extras", { extras: portfolioData.extras });
});

// Achievements page
router.get("/achievements", async (req: Request, res: Response) => {
  try {
    const achievements = await Achievement.findAll({
      order: [["date_achieved", "DESC"]],
    });
    res.render("portfolio/achievements", { achievements });
  } catch (error) {
    res.status(500).send("Error fetching achievements");
  }
});

// Add new achievement
router.post("/achievements", async (req: Request, res: Response) => {
  try {
    const { date_achieved, time_achieved, title, description } = req.body;

    // Combine date and time into a single DateTime
    const dateTimeString = `${date_achieved}T${time_achieved}`;
    const achievementDateTime = new Date(dateTimeString);

    await Achievement.create({
      date_achieved: achievementDateTime,
      title,
      description,
    });
    res.redirect("/achievements");
  } catch (error) {
    res.status(500).send("Error creating achievement");
  }
});

export default router;
