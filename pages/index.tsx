/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/molecules/Hero/Hero";
import GeneralLayout from "layouts/generalLayout";

import propel from "assets/icons/Propel.svg";
import nextford from "assets/icons/nextford.svg";
import panther from "assets/icons/panther.svg";
import rootlo from "assets/icons/rootlo.svg";
import cleva from "assets/svg/cleva.svg";
import chipper from "assets/svg/chipper.svg";
import safetyWing from "assets/icons/safetyWing.svg";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { generateUniqueId } from "@/utils/helper";
import {
  Faq,
  HomeJobs,
  MapWorkSpace,
  Newsletter,
  Talents, ExternalHomeJobs
} from "@/components/HomePageComponents";

const Home: NextPage = () => {
  const lang = ["common", "home", "footer"];
  const { t: translate, i18n } = useTranslation("home", {
    bindI18n: "languageChanged loaded",
  });

  React.useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, lang);
  },[]);

  const globalCompanies = [
    chipper,
    nextford,
    cleva,
    rootlo,
    propel,
    safetyWing,
  ];

  return (
    <GeneralLayout>
      <Head>
        <title>Afrisplash</title>
        <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
      </Head>
      <Hero translate={translate} />

      <section className="w-full my-10 mt-32">
        <div className="w-10/12 mx-auto space-y-10">
          <h3 className="text-center text-gray-400 text-2xl font-light">
            {translate("Trusted by these global companies")}
          </h3>
          <div className="flex justify-around lg:justify-between flex-wrap gap-4">
            {globalCompanies.map((item: string) => (
              <div key={generateUniqueId()} className="w-auto max-w-[120px] lg:max-w-fit  md:w-auto">
                <Image src={item} alt="global companies" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <HomeJobs translate={translate} /> */}
      <Talents translate={translate} />
      <ExternalHomeJobs translate={translate}/>
      <MapWorkSpace translate={translate} />
      <Faq translate={translate} />
      <Newsletter translate={translate} />
    </GeneralLayout>
  );
};

type Props = {
  _nextI18Next?: {
    initialI18nStore: any;
    initialLocale: string;
    ns: string[];
    userConfig: any;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["home", "common", "footer"],
        null,
        ["en", "no"]
      )),
    },
  };
};

export default Home;
