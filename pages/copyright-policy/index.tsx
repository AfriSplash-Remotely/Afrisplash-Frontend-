import React from "react";
import { GetStaticProps } from 'next';
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import GeneralLayout from "layouts/generalLayout";
import PrivacyPolicy from "@/components/Legal";
import styles from ".././../styles/legal.module.scss";

interface PrivacyPolicyData {
  content: string;
  data: {
    title: string;
  };
}
interface PrivacyPolicyProps {
  privacyPolicyData: PrivacyPolicyData;
}

const PrivacyPolicyPage = ({ privacyPolicyData }: PrivacyPolicyProps):JSX.Element => {
  const { content, data: metaData } = privacyPolicyData;

  return (
    <GeneralLayout>
      <div className={styles.legalDocs}>
        <h1 className="text-3xl font-bold">{metaData.title}</h1>
        <PrivacyPolicy content={content} />
      </div>{" "}
    </GeneralLayout>
  );
};

export async function getStaticProps(): GetStaticProps {
  const filePath = path.join(
    process.cwd(),
    "content",
    "copyright-policy.md"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent) as GrayMatterFile<string>;

  return {
    props: {
      privacyPolicyData: {
        content,
        data,
      },
    },
  };
}
export default PrivacyPolicyPage;