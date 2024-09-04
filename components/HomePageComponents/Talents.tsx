import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { TFunction } from "i18next";
import Link from "next/link";
import talentStars from "assets/home-page/talent_stars_bg.svg";
import talentUser from "assets/home-page/talent_user.svg";
import { MentorCard } from "@/components/Forum/MentorCardComponent";
import Button from "@/components/atoms/Button/Button";
import styles from "./styles.module.scss";
import { getTotalCandidates } from "@/api-endpoints/get-candidates/get-candidates.api";
import GhanaFlag from "assets/general/ghana-flag.svg";
import candidatePic from "../../assets/candidate-pics.png"

interface Props {
  translate: TFunction<"home", undefined>;
}

const datas = [
  {
    name: "Joel Adewole ",
    position: "Software Engineer",
    image: "",
  },
  {
    name: "Olaniyi Elumalero",
    position: "Graphic Designer ",
    image: "",
  },
  {
    name: "Opeyemi Oni",
    position: "Product Manager ",
    image: "",
  },
 
  {
    name: "Beauty Ohia",
    position: "UI Designer ",
    image: "",
  },
  {
    name: "Olawale Ibitoye",
    position: "QA Engineer ",
    image: "",
  },
  {
    name: "Dorcas Obenewaa",
    position: "Content Designer ",
    image: "",
  },
  {
    name: "Fenohery Fanomezanirina",
    position: "UI Designer ",
    image: "",
  },
  {
    name: "Milcah Maina",
    position: "Data Scientist ",
    image: "",
  },
  {
    name: "Shakirah Abdulkareem",
    position: "UI/UX Designer ",
    image: "",
  },
  {
    name: "Atsu Adali-Mortty",
    position: " Account Executive",
    image: "",
  },
  {
    name: "Anne Afolabi",
    position: " Product Marketing Manager",
    image: "",
  },
]
function Talents({ translate }: Props): JSX.Element {
  const route = useRouter();

  // const { data } = useQuery(["candidatesList"], async () => {
  //   const response = await getTotalCandidates();
  //   return response.data;
  // });

  return (
    <section className="w-full ">
      <div className="py-12 lg:py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section>
          <div className="text-center  lg:space-y-5">
            <h3 className="capitalize text-2xl md:text-5xl font-semibold mb-4 md:mb-7">
              {translate("our top talents")}
            </h3>
            <div className="text-gray-700 text-base md:text-lg flex justify-center">
              <p className=" text-base lg:text-xl">
                {translate("Find highly-skilled talents from our community")}
              </p>
            </div>
          </div>
          <div className=" my-10 space-y-6">
            <div className="grid gap-6  s:grid-cols-1 lg:grid-cols-4">
              {datas && datas.length > 0 ? (
                datas &&
                datas.slice(0,11).map((candidate, index:number) => {
                  // const fullName = `${candidate.first_name} ${candidate.last_name}`;
                  return (
                    <React.Fragment key={index}>
                      <MentorCard
                        name={candidate?.name}
                        position={candidate?.position}
                        index={index + 1}
                        role={"Contract, Full-time, Remote only"}
                        flag={GhanaFlag}
                        src={"../../assets/candidate-pics.jpeg"}
                      />
                      {index == 2 && (
                        <div
                          className={`w-full rounded-xl p-4 bg-cover shadow-sm  bg-no-repeat space-y-10 mt-2 ${styles.createProfileCard}`}
                        >
                          <div className="flex justify-between items-start relative pt-5">
                            <Image
                              src={talentUser}
                              alt="stars"
                              width={60}
                              height={60}
                            />
                            <Image
                              className="absolute right-0"
                              src={talentStars}
                              alt="stars"
                              width={120}
                              height={120}
                            />
                          </div>
                          <div className="w-8/12 font-semibold leading-10 text-3xl">
                            <h2>{translate("Become a top talent too")}</h2>
                          </div>
                          <div className="pt-6">
                            <Button
                              onClick={() => route.push("/coming-soon")}
                              classes={`bg-primary_green text-white py-4 px-6 rounded-lg`}
                              text={translate("Create your profile")}
                            />
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <div
                  className={`w-full rounded-xl p-4 bg-cover shadow-sm  bg-no-repeat space-y-10 mt-2 ${styles.createProfileCard}`}
                >
                  <div className="flex justify-between items-start relative pt-5">
                    <Image
                      src={talentUser}
                      alt="stars"
                      width={60}
                      height={60}
                    />
                    <Image
                      className="absolute right-0"
                      src={talentStars}
                      alt="stars"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="w-8/12 font-semibold leading-10 text-3xl">
                    <h2>{translate("Become a top talent too")}</h2>
                  </div>
                  <div>
                    <Button
                      onClick={() => route.push("/auth/signup")}
                      classes={`bg-primary_green text-white py-4 px-6 rounded-lg mt-6`}
                      text={translate("Create your profile")}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-max mx-auto">
            <Link href="/candidates" className=" text-gray-400 leading-8 border-b-2">
              {translate("View more")}
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Talents;
