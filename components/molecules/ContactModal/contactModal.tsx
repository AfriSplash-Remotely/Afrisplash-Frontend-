/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction, FC } from "react";
import Button from "@/components/atoms/Button/Button";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./contactModel.module.scss";
import ChipperLogo from "@/assets/icons/chipper.svg";
import NexfordLogo from "@/assets/icons/nextford.svg";
import PantherLogo from "@/assets/icons/panther.svg";
import PropelLogo from "@/assets/icons/Propel.svg";
import Rootlo from "@/assets/icons/rootlo.svg";
import SafetyWingLogo from "@/assets/icons/safetyWing.svg";
import Modal from "@/components/atoms/Modal/Modal";
import { contactForm } from "@/api-endpoints/blog/blog.api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface ContactModalProps {
  isOpen: boolean;
  className?: string | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, setIsOpen }) => {
  const globalCompanies = [
    ChipperLogo,
    PantherLogo,
    NexfordLogo,
    SafetyWingLogo,
    Rootlo,
    PropelLogo,
  ];

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [others, setOthers] = useState<string>("");
  const { mutate: contactMutation, isLoading: contactLoading } = useMutation({
    mutationFn: (body: any) => contactForm({ payload: body }),
    onSuccess: () => {
      toast.success("You have updated successfully ");
      setFirstName("");
      setLastName("");
      setEmail("");
      setOthers("");
      setMessage("");
      setIsOpen(false);
    },
    onError: (error: AxiosError<{ error: any }>) => {
      toast.error(error?.response?.data?.error);
    }
  })

  const handleContact = () => {
    if (firstName && lastName && email && message) {

      const body = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "message": message,
        "additional_details": others?.length > 0 ? others : "Thank you"
      };
      contactMutation(body);
    }
    else {
      toast.error("All fields are required ")
    }
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        className=" flex justify-end cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <div className=" w-6">
          <XCircleIcon color="#63685E" />
        </div>
      </div>
      <div className="md:flex lg:px-12 py-16 items-center gap-6 lg:gap-10">
        <div
          className={`bg-white rounded-3xl p-6 lg:p-11 w-full md:w-2/4 ${styles.contactShadow}`}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="">
              <label className="mb-3 uppercase text-dark_500 font-semibold text-xs md:text-sm lg:text-base">
                First Name *
              </label>
              <input
                className="placeholder:text-sm text-sm border-grey border w-full h-14 rounded-lg px-4 pr-16 focus:outline-gray-600"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className=" ">
              <label className="mb-3 uppercase text-dark_500 font-semibold text-xs md:text-sm lg:text-base">
                Last Name *
              </label>
              <input
                className="placeholder:text-sm text-sm border-grey border w-full h-14 rounded-lg px-4 pr-16 focus:outline-gray-600"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className=" mt-8">
            <label className="mb-3 uppercase text-dark_500 font-semibold text-xs md:text-sm lg:text-base">
              Email *
            </label>
            <input
              className="placeholder:text-sm text-sm border-grey border w-full h-14 rounded-lg px-4 pr-16 focus:outline-gray-600"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" mt-8">
            <label className="mb-3 uppercase text-dark_500 font-semibold text-xs md:text-sm lg:text-base">
              Message *
            </label>
            <input
              className="placeholder:text-sm text-sm border-grey border w-full h-14 rounded-lg px-4 pr-16 focus:outline-gray-600"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className=" mt-8">
            <label className="mb-3 uppercase text-dark_500 font-semibold text-xs md:text-sm lg:text-base">
              Additional Details *
            </label>
            <textarea className="placeholder:text-sm text-sm border-grey border w-full h-[102px] rounded-lg px-4 pt-3 pr-16 focus:outline-gray-600" value={others}
              onChange={(e) => setOthers(e.target.value)} />
          </div>

          <div className=" mt-9 pb-7 flex flex-col lg:flex-row gap-6 border-b border-grey">
            <Button
              type="bordered"
              color="dark_blue"
              text={"Cancel"}
              onClick={() => setIsOpen(false)}
              // borderColor="dark_blue"
              classes="w-full rounded-2xl capitalize h-14 text-sm text-dark_blue border border-grey"
            />
            <Button
              type="filled"
              onClick={handleContact}
              
              color="white"
              text={contactLoading ? "Loading..." : "Send Message"}
              classes="w-full h-14 rounded-2xl text-sm capitalize text-gray-400 bg-dark_blue"
            />
          </div>

          <div>
            <h1 className=" text-black font-semibold text-base lg:text-xl py-7 ">
              Contact Information
            </h1>

            <div className=" flex flex-col gap-5">
              <div className=" flex gap-4 items-center">
                <div>
                  <MapPinIcon color="#292D32" className=" w-5" />
                </div>
                <p className=" font-semibold text-[#63685E] text-xs md:text-sm ">
                  71-75, Shelton Street, London, Greater London.
                </p>
              </div>
              <div className=" flex gap-4 items-center ">
                <div>
                  <PhoneIcon color="#292D32" className=" w-5" />
                </div>

                <p className=" font-semibold text-[#63685E] text-xs md:text-sm">
                  +(44) 204 549 9317
                </p>
              </div>
              <div className=" flex gap-4 items-center  ">
                <div>
                  <EnvelopeIcon color="#292D32" className=" w-5" />
                </div>

                <p className=" font-semibold text-[#63685E] text-xs md:text-sm">
                  hello@afrisplash.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/4 ">
          <div className=" pr-5 lg:pr-10">
            <h1 className=" text-black font-semibold text-[28px] pt-10 lg:pt-0 pb-6 pl-2">
              How Can We Help?
            </h1>
            <p className=" text-[#30342D] pl-2 text-sm md:text-base">
              Please select a topic below related to your inquiry. If you don’t
              find what you need, fill out our contact form.
            </p>
          </div>

          <div className=" pt-8 pr-5 lg:pr-10">
            <div className=" border-b border-grey">
              <h5 className=" font-semibold py-4 pl-2">
                Find & Hire Vetted talents
              </h5>
              <p className=" text-sm py-3 pl-2 text-[#63685E]">
                Request a demo from one our conversation specialists.
              </p>
            </div>
            <div className=" border-b border-grey">
              <h5 className=" font-semibold py-3 pl-2">
                Work with us as your dedicated HR Business Partner.
              </h5>
              <p className=" text-sm py-3 pl-2 text-[#63685E]">
                Discover the many ways in which our customers use Afrisplash.
              </p>
            </div>
            <div className=" border-b border-grey">
              <h5 className=" font-semibold py-3 pl-2">
                Join forces with us as a General Partner
              </h5>
              <p className=" text-sm pt-4 pb-3 pl-2 text-[#63685E]">
                Join our partner program and earn 25% recurring commissions.
              </p>
            </div>
          </div>

          <div className=" pt-[75px]">
            <h3 className=" pb-8 uppercase text-sm text-primary_green">
              Trusted By
            </h3>
            <div className=" flex flex-wrap gap-5">
              {globalCompanies.map((item: any, id: number) => (
                <div key={id} className=" w-[100px] md:w-[120px] lg:w-[140px]">
                  <Image src={item} alt="companies" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
