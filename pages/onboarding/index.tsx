import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CandidateOnboarding from "@/components/onboarding/candidate";
import RecruiterOnboarding from "@/components/onboarding/recruiter";

const Onboarding = (): JSX.Element => {
  const { data: session } = useSession()
  const router = useRouter();
  const [isReady, setIsReady] = React.useState<boolean>(false)

  React.useEffect(() => {

    const handleReadyState = async () => {
      if (session && session?.user?.accessToken && session?.user?.account_setup_completed) {
        setIsReady(true)
        router.push("/dashboard");
      } else {
        setIsReady(false)
      }
    }
    handleReadyState()
  }, [router, session])

  const onboarding = {
    candidate: <CandidateOnboarding />,
    recruiter: <RecruiterOnboarding />
  }

  
  return (
    <div>
      {isReady ? (
        <div className="h-screen flex justify-center items-center">
          <div className={`relative mx-auto w-36 h-12 sm:w-28 md:w-32 md:h-14 flex items-center cursor-pointer`} >
            <Image src="/admin_logo.svg" alt="logo" fill />
          </div>
      </div>) : (
        session && session.user && onboarding[session.user.userType] || <></>
      )}
    </div>
  )
};

export default Onboarding;
