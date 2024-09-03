interface faqBodyI {
  title: string;
  body: string;
}
interface faqI {
  Talent: faqBodyI[];
  Employers: faqBodyI[];
}
const faq: faqI = {
  Talent: [
    {
      title: "What is Afrisplash Remotely about?",
      body: ` AfriSplash Remotely is the gateway to Africa's remote workforce. It connects skilled African professionals with remote job opportunities from around the world, helping them showcase their talents and grow their careers..`,
    },
    {
      title: "How can I get a remote job on AfriSplash Remotely?",
      body: ` To increase your chances of landing a remote job on AfriSplash Remotely, start by creating a comprehensive profile. Make sure to showcase your skills, experience, and accomplishments. Additionally, engage with the community by publishing posts and connecting with others. Networking within the platform can open up more opportunities for you, so don't hesitate to interact and share valuable content.`,
    },
    {
      title: "How do I get started?",
      body: ` Getting started is simple. Sign up on AfriSplash Remotely, complete the onboarding process, or use the Quick Apply option to start applying for jobs immediately. Make sure your profile is detailed to improve your chances of being noticed by employers.`,
    },
    {
      title: " Do I have to pay anything?",
      body: ` No, you don’t have to pay anything to access jobs on AfriSplash Remotely. Our platform is free for talents to use, allowing you to connect with employers and apply for jobs without any charges.`,
    },
    {
      title: "What if I have a non-tech skill? ",
      body: ` AfriSplash Remotely caters to a wide range of skilled professionals. Whether you’re in tech or another field, if your work can be done remotely, you’re welcome here. We have opportunities across various industries beyond just tech roles.`,
    },
  ],
  Employers: [
    {
      title: "How do I handle compliance issues with hiring African talents?",
      body: ` We partner with cost-effective professional employer organizations (PEOs) to help you compliantly hire and onboard African talents. These PEOs manage the legal, payroll, and tax requirements, so you can focus on growing your team without worrying about compliance issues.`,
    },
    {
      title: "Why should I hire African talents?",
      body: `  African talents represent the talent pool of the future. They bring vast skills, a strong understanding of the global market, and are remote-ready. Additionally, hiring African talents is cost-effective, allowing you to tap into a highly skilled workforce at a competitive rate.`,
    },
    {
      title: " How do I promote a job?",
      body: ` To promote a job, sign up on AfriSplash Remotely, complete the onboarding process, and then create a job post using our job creation steps. Your job post will then be visible to a vast network of African talents ready to work remotely.`,
    },
    {
      title: "What is the Code of conduct ?",
      body: ` Our code of conduct emphasizes inclusive hiring practices. We expect all job postings to be genuine and for employers to have clear intentions to tap into Africa’s tech talent pool. We encourage transparency and fairness in all hiring processes to create a positive experience for both employers and talents.`,
    },
    {
      title: "What makes AfriSplash Remotely different from its competitors?",
      body: ` AfriSplash Remotely stands out due to its deep focus on African talents and its commitment to inclusivity. Unlike other job boards, we specifically cater to the African remote workforce, ensuring that skilled professionals from the continent are connected with global opportunities. Our community-driven approach also fosters a supportive environment where talents can grow and thrive.`,
    },
  
  ],
};

export type { faqI, faqBodyI };
export default faq;
