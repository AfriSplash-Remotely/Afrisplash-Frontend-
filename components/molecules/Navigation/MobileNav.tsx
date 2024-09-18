import { Fragment, useState } from 'react'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { headerType } from './Navigation';
import { Bars, Times } from '@/assets/svg';
// import logo from "@/assets/afrisplash-logo-main.png"
import { generateUniqueId } from '@/utils/helper';

import logo from "assets/svg/new-logo-beta.svg"; 

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

const MobileNav = (): JSX.Element => {
    const [show, setShow] = useState<boolean>(false);
    const { t: translate } = useTranslation("home");
    const router = useRouter();

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
            title: `${translate("Dashboard")}`,
            icon: "",
            link: "/dashboard",
            active: false,
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
            link: "/candidates",
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

    const handleMenuClick = (item: headerType, index: number) => {
        header.map((item) => (item.active = false));
        if (router.pathname === item.link) {
            header[index].active = true;
            setShow(false);
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
        <div>
            <div className={`w-full bg-white pt-4   nav-index  flex flex-col lg:hidden  ${show ? "h-screen overflow-y-hidden fixed top-0 right-0 left-0 bottom-0 z-high" : ""} `}>
                <div className="w-full flex items-center justify-between px-4 h-[65px]">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={logo.width} height={logo.height} />
                    </Link>
                    <div className="flex gap-6 items-center relative">
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
                                <Menu.Items className="absolute right-0 mt-4 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-high">
                                    <div className="px-1 py-3  bg-white">
                                        {languages.map((locale) => {
                                            return (
                                                <Menu.Item key={locale.tag}>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => handleClick(locale.tag)}
                                                            className={`${active
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
                        <div className="w-fit" onClick={() => setShow(!show)}>
                            {
                                show ? <Times /> : <Bars />
                            }
                        </div>
                    </div>
                </div>

                {show && (
                    <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-[90vh]  ">
                        <ul className="flex w-full mt-8 space-y-8 flex-col items-start justify-around px-4 ">
                            {header.map((item: headerType, index: number) => (

                                <li
                                    onClick={() => handleMenuClick(item, index)}
                                    key={generateUniqueId()}
                                    className={`text-lg flex capitalize cursor-pointer hover:text-primary_green hover:underline hover:underline-offset-4 ${item.active &&
                                        "text-primary_green underline underline-offset-4"
                                        }`}
                                >
                                    <span>{item.title}</span>
                                    <span>{item.icon ? item.icon : ""}</span>
                                </li>

                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MobileNav