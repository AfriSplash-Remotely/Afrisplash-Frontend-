/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import { useRouter } from "next/router";
import GeneralLayout from 'layouts/generalLayout';
import Button from "components/atoms/Button/Button";
import DropDown from "components/atoms/DropDown/DropDown";
import Search from "components/atoms/Search/Search";
import { CompHiringCard, EmployerSideBar } from '../../components/Employer';
import { employerData } from "utils";
import employerImg from "assets/general/employer-team.svg"

const Employer: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/")
    },[]);
    
    return (
        <div>
            <Head>
                <title>Afrisplash | Employer</title>
                <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GeneralLayout>
                <div className="relative flex justify-center items-center w-full " >
                    <Image src={employerImg}
                        alt="img"
                        className="w-full h-full  mt-20 xl:mt-0 md:mt-0 "
                    />
                    <div className="absolute">
                        <div className=" flex gap-4">
                            <Search placeholder={"Search open roles"} />
                            <Button
                                type='filled'
                                color='white'
                                text='Find Employer'
                                classes="w-64 h-12  md:w-64 xl:w-64 rounded-md text-sm capitalize  text-white bg-primary_green hover:opacity-80"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12  mx-auto py-8">
                    <div className="grid  grid-cols-3 gap-6">
                        <div className="mt-4" >
                            <EmployerSideBar />
                        </div>
                        <div className="col-span-2  w-11/12">
                            <div className="flex items-center justify-between">
                                <div className="mt-2 font-medium">Discover companies hiring remotely </div>

                                <div className="flex justify-center  items-center gap-3">
                                    <h4 className="font-medium">Sort by: </h4>
                                    <DropDown />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-4">
                                {employerData.map(employer => {
                                    return (
                                        <CompHiringCard
                                            key={employer.id}
                                            title={employer.title}
                                            location={employer.location}
                                            desc={employer.desc}
                                            inst={employer.inst}
                                            people={employer.people} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralLayout>

        </div>
    )
}


export default Employer