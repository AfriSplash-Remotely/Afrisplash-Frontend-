import React, { useState } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { faq, faqBodyI } from "@/utils";
import { TFunction } from "i18next";
import ContactModal from "@/components/molecules/ContactModal/contactModal";
import Button from "../atoms/Button/Button";

interface Props {
  translate: TFunction<"home", undefined>;
}

function Faq({ translate }: Props): JSX.Element {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the isOpen state
  };

  return (
    <section className={`w-full bg-white py-12 lg:py-28`}>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-11/12 xl:w-10/12 mx-auto flex justify-center items-center">
        <div className="w-full pt-14">
          <h3 className="mx-auto text-center text-black-300 text-2xl lg:text-[42px] font-semibold mb-12">
            FAQs
          </h3>
          <Tab.Group>
            <Tab.List className="flex space-x-1 px-1 border-b-2 border-gray-100">
              {Object.keys(faq).map((_faq) => {
                return (
                  <Tab
                    key={_faq}
                    className={({ selected }) =>
                      classNames(
                        "w-full md:w-[20%] py-2.5 text-md font-medium leading-5 text-gray-800",
                        "focus:outline-none",
                        selected
                          ? "bg-white border-b-4 border-primary_green text-primary_green"
                          : "text-blue-800 hover:bg-primary_green/[0.1] hover:text-primary_green"
                      )
                    }
                  >
                    {_faq}
                  </Tab>
                );
              })}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.entries(faq).map(([key, questions]) => {
                return (
                  <Tab.Panel key={key}>
                    <div className="rounded-2xl bg-white py-14 align-content-left">
                      {questions.map((question: faqBodyI) => {
                        return (
                          <Disclosure
                            key={question.title}
                            as="div"
                            className="mt-3"
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-base lg:text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <span>{question.title}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-info-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                                  {question.body}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        );
                      })}
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>

          <p className="mx-auto text-center text-black-300 text-base lg:text-lg flex justify-center align-content-center mb-3">
            {translate(
              "If you still can’t find the answers you’re looking for"
            )}
          </p>
         
          <div className="w-fit mx-auto">

          <Button
           
           // bgColor="dark_blue"
           color="white"
           text={translate("Contact Us")}
           onClick={handleClick}
           classes="w-max px-5 h-12  md:px-3 xl:px-5 rounded-md text-sm mx-auto  text-white bg-dark_blue hover:bg-primary_green"
           // onClick={() => route.push("/auth/signup")}
           />
           </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
