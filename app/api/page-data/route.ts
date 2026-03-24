import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/feature-work/livelens.png",
        role: "Mobile Developer — Livelens",
        location: "Remote",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Built the mobile app and website of Livelens across all devices using React Native, Next.js, and Tailwind CSS",
            "Collaborated with the backend engineers and product managers to ship features that allow users to capture real-time photos or videos and turn them into actionable requests with rewards attached",
        ]
    },
    {
        icon: "/images/feature-work/thrive-agric.svg",
        role: "Fullstack Engineer — ThriveAgric",
        location: "Abuja, Nigeria",
        startYear: "2022",
        endYear: "2024",
        bulletPoints: [
            "Built and maintained farmer onboarding and investment platforms serving 200k+ users",
            "Integrated Paystack and Flutterwave for seamless payments across web and mobile",
            "Worked on data dashboards to help farmers track yields and investors monitor returns"
        ]
    },
    {
        icon: "/images/icon/localmarket-icon.svg",
        role: "Backend Developer — LocalMarket",
        location: "Remote",
        startYear: "2025",
        endYear: "2026",
        bulletPoints: [
            "Developed marketplace APIs using Node.js, Express, and PostgreSQL",
            "Implemented session-based authentication and Paystack payment integration",
            "Worked with Drizzle ORM and optimized queries for faster checkout performance"
        ]
    },
    {
        icon: "/images/icon/capitalcars-icon.svg",
        role: "FullStack Developer — CapitalCars",
        location: "Remote",
        startYear: "2025",
        endYear: "2025",
        bulletPoints: [
            "Developed landing pages and dashboards with Laravel 11 and Tailwind CSS",
            "Created reusable UI components and implemented responsive design for optimal user experience",
            "Built the backend with the Admin panel for updating car listings and managing bookings."
        ]
    }
];

const educationData = [
    {
        date: "Aug 2023 - Aug 2025",
        title: "ADSE Certification",
        subtitle: "Aptech — Abuja, Nigeria"
    },
];

const projectOverview = {
    caseStudies: [
        /*         { name: "Wellnest", url: "#" },
                { name: "ScoutHire", url: "#" }, */
        { name: "Capitlcars", url: "https://capitalcars.site/" },
        { name: "Thrive Agric", url: "https://thriveagric.com/" },
        { name: "Daily Trust", url: "https://dailytrust.com/" },
    ],
    sideProjects: [
        { name: "Livelens", comingSoon: true },
        { name: "KOGIS", comingSoon: true },
        { name: "HelthCloud", comingSoon: true },
        /*   { name: "Zenboard Productivity Tool", url: "#" }, */
    ]
};

export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};
