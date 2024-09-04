import React from "react";
import Image from "next/image";
import newsletter from "assets/images/newsletter.png";
import styles from "./styles.module.scss";
import { TFunction } from "i18next";

interface Props {
  translate: TFunction<"home", undefined>;
}

function Newsletter({ translate }: Props): JSX.Element {
  return (
    <section className={`w-full flex justify-center items-center py-20  bg-[#fce8b6] ${styles.bg}`}>
      {/* <div className={`${styles.Newsletter} py-20  afri-container`}>
        <div
          className={`relative overflow-visible flex w-full p-8 md:px-16 md:pt-12 md:pb-32 ${styles.Newsletterbx}`}
        >
          <div>
            <div className="mb-6">
              <h3 className="text-3xl ">
                {translate("Be in the know")}
              </h3>
              <p>
                {translate(
                  "Get the gist on the latest jobs, career tips, and community activities"
                )}
              </p>
            </div>

            <div className="flex flex-wrap justify-content-center justify-items-start gap-3 md:gap-6 ">
              <div className="py-4 flex flex-wrap justify-content-center justify-items-start items-center  gap-3 md:gap-6">
                <div className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-6">
                  <div className="relative">
                    <label className="mb-3">
                      {translate("Your Full Name")}
                    </label>
                    <input
                      className="block outline-none w-full rounded-lg border bg-grey-50 py-2 px-3"
                      type="text"
                    />
                  </div>

                  <div className="relative ">
                    <label className="mb-3">{translate("Your Email")}</label>
                    <input
                      className="block outline-none w-full rounded-lg border bg-grey-50 py-2 px-3"
                      type="text"
                    />
                  </div>
                </div>

                <button
                  className="block outline-none rounded-lg text-white bg-black py-2 px-8 mt-6"
                  type="submit"
                >
                  {translate("Sign me up")}
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.NewsletterImg} hidden md:block`}>
            <Image src={newsletter} alt="newsletter" />
          </div>
        </div>
      </div> */}
      <iframe src="https://afrisplash.substack.com/embed" className="h-[320px] w-10/12 mx-auto rounded-lg  " width="100%" height="320"   scrolling="no"></iframe>
    </section>
  );
}
export default Newsletter;
