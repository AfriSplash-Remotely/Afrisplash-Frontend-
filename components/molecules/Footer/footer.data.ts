
export type FooterItems = {
    title: string;
    items: { title: string; url: string; external: boolean }[];
};

export type PolicyItems = {
    title: string;
    url: string;
};


export const footer: FooterItems[] = [
    {
        title: "talents",
        items: [
            {
                external: false,
                title: "product designers",
                url: "#",
            },
            {
                external: false,
                title: "website developers",
                url: "#",
            },
            {
                external: false,
                title: "software engineers",
                url: "#",
            },
            {
                external: false,
                title: "data analysts",
                url: "#",
            },
            {
                external: false,
                title: "brand identity designers",
                url: "#",
            },
            {
                external: false,
                title: "product managers",
                url: "#",
            },
        ],
    },
    {
        title: "about",
        items: [
            {
                external: false,
                title: "afrisplash",
                url: "#",
            },
            { external: false, title: "careers", url: "#" },
            { external: false, title: "FAQs", url: "#" },
            { external: false, title: "our team", url: "#" },
            { external: false, title: "contact", url: "#" },
        ],
    },
    {
        title: "others",
        items: [
            {
                external: false,
                title: "co-working space",
                url: "#",
            },
            { external: false, title: "forum", url: "#" },
            {
                external: false,
                title: "blogs & news",
                url: "#",
            },
            { external: false, title: "events", url: "#" },
        ],
    },
    {
        title: "social",
        items: [
            {
                external: true,
                title: "twitter",
                url: "https://twitter.com/Afrisplash",
            },
            {
                external: true,
                title: "linkedin",
                url: "https://www.linkedin.com/company/afrisplash/",
            },
            {
                external: true,
                title: "facebook",
                url: "https://web.facebook.com/AfriSplashRemotely",
            },
            { external: true, title: "instagram", url: "#" },
            { external: true, title: "product hunt", url: "#" },
        ],
    },
];

export const policies: PolicyItems[] = [
    { title: "Terms of use", url: "/terms" },
    { title: "Privacy policy", url: "/privacy" },
    { title: "Copyright policy", url: "/copyright-policy" },
];