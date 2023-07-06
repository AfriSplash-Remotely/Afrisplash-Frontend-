import Link from "next/link";

type FooterItems = {
  title: string,
  items: { title: string, url: string, external: boolean }[]
}

type PolicyItems = {
  title:string,
  url:string
}


const Footer = (): JSX.Element => {


  const footer: FooterItems[] = [
    {
      title: "talents",
      items: [
        { external: false, title: "product designers", url: "#" },
        { external: false, title: "website developers", url: "#" },
        { external: false, title: "software engineers", url: "#" },
        { external: false, title: "data analysts", url: "#" },
        { external: false, title: "brand identity designers", url: "#" },
        { external: false, title: "product managers", url: "#" },
      ],
    },
    {
      title: "about",
      items: [
        { external: false, title: "afrisplash", url: "/about-us" },
        { external: false, title: "careers", url: "#" },
        { external: false, title: "FAQs", url: "#" },
        { external: false, title: "our team", url: "#" },
        { external: false, title: "contact", url: "#" },
      ],
    },
    {
      title: "others",
      items: [
        { external: false, title: "co-working space", url: "#" },
        { external: false, title: "forum", url: "#" },
        { external: false, title: "blogs & news", url: "/blog" },
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

  const policies: PolicyItems[] = [
    { title: "Terms of use", url: "/terms" },
    { title: "Privacy policy", url: "/privacy" },
    { title: "Copyright policy", url: "/copyright-policy" },
  ];
  return (
    <footer className="bg-dark_blue w-full py-5">
      <div className="w-11/12 md:w-10/12 mx-auto space-y-12">
        <div className="flex w-full justify-between flex-wrap pt-14">
          {footer.map((item: FooterItems, index) => (
            <section
              key={index}
              className="text-white_2 mx-5 py-3 w-4/12 sm:w-3/12 md:w-max space-y-4"
            >
              <div className="capitalize font-bold text-sm md:text-base">
                {item.title}
              </div>
              <ul className="space-y-3 text-xs sm:text-sm md:text-base">
                {item.items.map((subItems: any, index: number) => (
                  <li key={index} className="capitalize">
                    <Link href={subItems.url} target={subItems.external ? '_blank' : '_self'}>
                      {subItems.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="text-white_2 flex items-center flex-col md:flex-row md:justify-between border-t border-white_2/20 py-10">
          <section>
            <span>&copy;</span>
            <span className="capitalize xs:text-xs md:text-sm lg:text-base">
              afrisplash remotely. all rights reserved
            </span>
          </section>
          <section>
            <ul className="flex space-x-3  text-sm lg:text-base">
              {policies.map((policy: PolicyItems, index) => (
                <li key={index}>
                  <Link href={policy.url}>{policy.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
