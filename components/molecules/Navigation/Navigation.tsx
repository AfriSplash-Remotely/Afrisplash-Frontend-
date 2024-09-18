import React, { ReactNode, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import styles from "./Navigation.module.scss";
import Button from "../../atoms/Button/Button";
import { generateUniqueId } from "@/utils/helper";
import logo from "assets/svg/new-logo-beta.svg"; 

export interface headerType {
  title: string;
  icon?: ReactNode;
  link: string;
  active: boolean;
  redirect?: boolean;
  dropDown?: {
    title: string;
    href: string;
  }[];
}

const Navigation = (): JSX.Element => {
  const { data: session, status } = useSession()
  const isUserSignedIn = session?.user?.accessToken && status === 'authenticated';

  const { t: translate } = useTranslation("home");
  const router = useRouter();

  const languages: { language: string; tag: string }[] = [
    { language: "English", tag: "en" },
    { language: "French", tag: "fr" },
    { language: "Arabic", tag: "ara" },
    { language: "Swahili", tag: "sw" },
    { language: "Zulu", tag: "zu" },
    { language: "Tigrinya", tag: "ti" },
    { language: "Igbo", tag: "ig" },
    { language: "Hausa", tag: "ha" },
    { language: "Yoruba", tag: "yo" },
  ];

  const handleClick = (locale: string) => {
    router.push(router.pathname, undefined, {
      locale: locale,
    });
  };

  const header: headerType[] = [
    {
      title: `${translate("Home")}`,
      icon: "",
      link: "/",
      active: true,
      redirect: false
    },
    {
      title: `${translate("Resources")}`,
      icon: <ChevronDownIcon className="w-5 h-5" />,
      link: "/coming-soon",
      active: false,
      dropDown: [{ title: "item", href: "#" }],
      redirect: false
    },
    {
      title: `${translate("Candidates")}`,
      icon: "",
      link: "/coming-soon",
      active: false,
      redirect: false
    },
    {
      title: `${translate("Employer")}`,
      icon: "",
      link: "/coming-soon",
      active: false,
      redirect: false
    },
    {
      title: `${translate("Hire Talent")}`,
      icon: "",
      link: "https://airtable.com/appMVjLaBQ4TFl1lV/shrDnNaoOtIXdevS2/tblwA0qs67n8fIoYh",
      active: false,
      redirect: true
    },
    {
      title: `${translate("Remote Jobs")}`,
      icon: "",
      link: "/remote-jobs",
      active: false,
      redirect: false
    },
    {
      title: `${translate("Pricing")}`,
      icon: "",
      link: "/coming-soon",
      active: false,
      redirect: false
    },
  ];

  const changePath = (path: string) => {
    router.push(path);
  };

  const handleMenuClick = (item: headerType, index: number) => {
    header.map((item) => (item.active = false));
    if (router.pathname === item.link) {
      header[index].active = true;
    }
    // If redirect is true, open link in a new tab
    if (item.redirect) {
      const newTab = window.open(item.link, '_blank');
      if (newTab) {
        newTab.focus();
      } else {
        console.error('Failed to open new tab');
      }
    } else {
      // Handle regular navigation behavior here if needed
      router.push(item.link);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-20 sticky top-0 z-50 bg-white`}
    >
      <div className={`relative h-20 ${styles.wrapper}`}>
        <header className="w-11/12 relative z-50 md:w-11/12 xl:w-10/12 mx-auto h-full flex justify-between  items-center">
          <Link href="/" legacyBehavior>
            <div
              className={`relative w-auto h-auto sm:w-28 md:w-32 md:h-14 flex items-center cursor-pointer ${styles.logo}`}
            >
              <Image src={logo} alt="logo" fill />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center h-full ">
            <ul className="flex lg:space-x-3 xl:space-x-5">
              {header.map((item: headerType, index: number) => (
          
                  <li
                    onClick={() => handleMenuClick(item, index)}
                    key={generateUniqueId()}
                    className={`text-sm flex capitalize cursor-pointer hover:text-primary_green hover:underline hover:underline-offset-4 ${
                      item.active &&
                      "text-primary_green underline underline-offset-4"
                    }`}
                  >
                    <span>{item.title}</span>
                    <span>{item.icon ? item.icon : ""}</span>
                  </li>
                
              ))}
            </ul>
          </nav>
          <div className="flex space-x-8 items-center">
            <div className="hidden md:hidden space-x-4 ">
              {isUserSignedIn ? (
                <Button
                  type="filled"
                  color="white"
                  text={translate("Dashboard")}
                  classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-dark_blue hover:bg-primary_green"
                  onClick={() => changePath("/dashboard")}
                />
              ) : (
                <Button
                  type="filled"
                  color="white"
                  text={translate("Sign In")}
                  classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-dark_blue hover:bg-primary_green"
                  onClick={() => changePath("/auth/login")}
                />
              )}
            </div>
            <div className="flex lg:hidden h-full items-center">
              <Bars3Icon className="w-8 h-6" />
            </div>
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button
                  title="Select language"
                  className="inline-flex w-full justify-center rounded-md h-10 px-1 py-2"
                >
                  <LanguageIcon
                    className="h-6 text-gray-500 inline-flex w-full justify-center"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-4 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
                    <div className="px-1 py-3">
                      {languages.map((locale) => {
                        return (
                          <Menu.Item key={locale.tag}>
                            {({ active }) => (
                              <button
                                onClick={() => handleClick(locale.tag)}
                                className={`${
                                  active
                                    ? "bg-primary_green text-white"
                                    : router.locale === locale.tag
                                    ? " bg-green-100 text-primary_green "
                                    : "text-gray-900"
                                } flex w-40 items-center rounded-md m-auto px-2 py-2 text-sm`}
                              >
                                {locale.language}
                              </button>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default Navigation;
