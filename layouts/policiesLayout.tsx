/* eslint-disable react/prop-types */
import { NextPage } from "next";
import { MDXProvider } from '@mdx-js/react';
import PropTypes, { InferProps } from "prop-types";
import Footer from "components/molecules/Footer/Footer";
import Navigation from "components/molecules/Navigation/Navigation";
import { useRouter } from "next/router";
import Link from "next/link";



const PoliciesLayoutProps = {
    children: PropTypes.node.isRequired,
}

const LinkParams = [
    { title:"Introduction"},
    { title: "Contact details" },
    { title: "Contact details" },
    { title: "What data do we collect and how we use it" },
    { title: "What lawful basis do we rely on for processing?" },
    { title: "Who may we share your data with?" },
    { title: "What data is collected on our website?" },
    { title: "How we work with group companies" },
    { title: "Link to other websites" },
    { title: "Storage and retention of data" },

]

const PoliciesLayout: NextPage<InferProps<typeof PoliciesLayoutProps>> = ({ children }) => {
    const router = useRouter()
    console.log(router.pathname);
    return (
        <MDXProvider>

            <div className="w-full">
                <Navigation />
                <main className="relative mx-auto mt-12 py-8 px-28">
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <div>
                                <h2 className="text-4xl font-medium">hello was dammi</h2>
                            </div>

                            <div className="mt-12">
                                <h4 className="text-primary_green font-semibold text-lg">CONTENTS</h4>
                                <div className="py-6">
                                <ul className="flex flex-wrap md:flex-col gap-4">
                                    {LinkParams.map((link) => {
                                        return(
                                            <Link href="#" key={link.title}> {link.title}</Link>

                                        )
                                    })}
                                </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-2 w-11/12 mt-2">
                            {children}
                        </div>
                    </div>
                </main>
                <Footer />

            </div>
        </MDXProvider>

    )
}






export default PoliciesLayout;