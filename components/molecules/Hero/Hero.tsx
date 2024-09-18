import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { TFunction } from "i18next";
import Button from "../../atoms/Button/Button";
import card_1 from "assets/home-page/card_1.png";
import card_3 from "assets/home-page/ann.svg";
import card_2 from "assets/home-page/anno.svg";
import styles from "./Hero.module.scss";
import { useState } from "react";
import ContactModal from "../ContactModal/contactModal";
import Link from "next/link"; 
import logo from "assets/svg/new-logo-beta.svg"; 

interface Props {
  translate: TFunction<"home", undefined>;
}

const Hero = ({ translate }: Props): JSX.Element => {
  const route = useRouter();
  const { data: session, status } = useSession()
  const isUserSignedIn = session?.user?.accessToken && status === 'authenticated';
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${styles.wrapper} w-full`}
    >
      <div className="w-10/12 mx-auto flex justify-between">
        <section className="w-full md:w-6/12 mt-0 lg:mt-20">
          <motion.div className="space-y-4">
            <motion.h1
              initial={{ y: -100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="capitalize text-4xl lg:text-6xl font-bold text-dark_blue"
            >
              {translate("The")}{" "}
              <span className="text-primary_green">{translate("gateway")}</span>{" "}
              {translate("to africa")}&apos;{translate("s remote workforce")}
            </motion.h1>
            <motion.div
              className="space-y-12"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="w-10/12 leading-7">
                {translate("We put the")} <strong>{translate("A")}</strong>{" "}
                {translate("back in")} <strong>{translate("EMEA")}</strong>{" "}
                {translate(
                  "Find remote jobs at truly inclusive companies and work from anywhere in Africa"
                )}
              </p>
              <motion.div
                className="flex space-x-5"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button
                  type="filled"
                  // bgColor="dark_blue"
                  color="white"
                  text={translate("Contact Us")}
                  onClick={() => setOpen(true)}
                  classes="w-max px-5 h-12  md:px-3 xl:px-5 rounded-md text-sm  text-white bg-dark_blue hover:bg-primary_green"
                  // onClick={() => route.push("/auth/signup")}
                />
                {isUserSignedIn ? null : (
                  <Link href={"https://join.slack.com/t/afrisplash/shared_invite/zt-xifsxpw3-7f23alnl7mhtaw5vmjF6vw"} target="_blank"
                 
                  className="flex space-x-2 items-center font-normal text-dark_blue hover:text-primary_green"
                  >
                    <span>{translate("Join the community")}</span>
                  <span>
                    <ArrowRightIcon className="w-5 h-4 " />
                  </span>
                </Link>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section className="w-5/12 hidden md:block">
          <div>
            <div className={`${styles.imageWrapper} relative`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  y: [-100, 0],
                }}
                transition={{ duration: 0.8 }}
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_1}`}
              >
                <Image src={card_1} alt="card_1" className="absolute top-0 -right-20" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  x: [-100, 0],
                }}
                transition={{ duration: 0.5 }}
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_2}`}
              >
                <Image
                  className="absolute top-32 -left-12 w-[361px] h-auto object-cover"
                  src={card_2}
                  alt="card_2"
                  
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1],
                  y: [100, 0],
                }}
                transition={{ duration: 1 }}
                className={`${styles.imageWrapper_image} ${styles.imageWrapper_image_3}`}
              >
                <Image
                  className="absolute bottom-4 left-64 w-[361px] h-auto object-cover"
                  src={card_3}
                  alt="card_3"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <ContactModal isOpen={open} setIsOpen={setOpen} />
      </div>
    </motion.div>
  );
};

export default Hero;
