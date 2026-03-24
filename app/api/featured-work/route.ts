import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Daily Trust",
        description: "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
        roles: ["Frontend Developer",],
        image: "/images/feature-work/dailytrust.svg"
    },
    {
        title: "Thriveagric",
        description: "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
        roles: ["Frontend Developer", "Mobile Developer"],
        image: "/images/feature-work/thrive-agric.svg"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};