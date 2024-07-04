import React, { useState } from "react";
import {
  EnvelopeIcon,
  EyeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import AuthLayout from "@/layouts/Auth.layout";
import Head from "next/head";
import { RegisterRequest } from "store/services/auth";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { signUp } from "@/api-endpoints/auth/auth.api";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../../styles/Signup.module.scss";
import google from "../../assets/svg/google.svg";

const Signup: NextPage = () => {
  const router = useRouter();

  const lang = ["signUp"];
  const { t: translate, i18n } = useTranslation("signUp", {
    bindI18n: "languageChanged loaded",
  });

  React.useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, lang);
  },[]);

  const talentOptions = [
    { value: 'recruiter', label: `${translate('Recruiter')}` },
    { value: 'candidate', label: `${translate('Candidate')}` }
  ]

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Others' }
  ];

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>();

  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    try {
      await signUp({ ...data, user_type: data.user_type?.value || "", gender: data?.gender?.value });
      toast.success("Signup successful");
      router.push("/auth/login")
    } catch (err: any) {
      // toast.error(err.data.message);
    }
  };

  const [passwordFieldType, setPasswordFieldType] = useState(false);

  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const togglePasswordVisibility = () => {
    setPasswordFieldType(!passwordFieldType);
  };


  const validatePassword = (password: string) => {

    if (passwordValidation.test(password)) {
      return undefined;
    }

    return "Password must be at least 6 characters with 1 lowercase, 1 uppercase, 1 digit, and 1 special character (!@#$%^&*).";

  }

  return (
    <AuthLayout>
      <Head>
        <title>Afrisplash | Signup</title>
        <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`mt-4 mx-auto`}>
        <h2
          className={`font-semibold text-[1.5rem] lg:text-[2rem] leading-9 mb-4`}
        >
          {translate("Join The Community")}
        </h2>
        <p className={` text-base mb-14`}>
          {translate("Find your dream remote job")}. {translate("Get skilled mentors")}. {translate("Connect with other professionals")}
        </p>
      </div>
      <button
        className={`flex items-center w-full mb-6 gap-2 ${styles.googleContainer}`}
      >
        <Image src={google} alt="google" />
        <p className={`font-[500] text-[0.875rem]`}>{translate("Sign up with Google")}</p>
      </button>

      <h2 className={` ${styles.divider}`}>
        <span
          className={`text-primary_grey bg-white  font-normal  text-[0.875rem] ${styles.emailSpan}`}
        >
          {translate("or with email")}
        </span>
      </h2>
      <form className={`mt-9 w-full`} onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className={`${styles.nameContainer} w-full space-x-2`}>
            {/**First Name */}
            <div>
              <div className={`${styles.inputContainer} `}>
                <span className={`${styles.userIcon}`}>
                  <UserIcon className="w-4 h-4 " />
                </span>
                <input
                  type="text"
                  placeholder={translate("First Name")}
                  className={`${styles.inputField}`}
                  {...register("first_name", { required: true })}
                  aria-invalid={errors.first_name ? "true" : "false"}
                />
              </div>
              {errors.first_name?.type === "required" && (
                <p role="alert" className="error_message pl-2 py-2">
                  {translate("First name is required")}
                </p>
              )}
            </div>

            {/**Surname */}
            <div>
              <div className={`${styles.inputContainer}`}>
                <span className={`${styles.userIcon}`}>
                  <UserIcon className="w-4 h-4 " />
                </span>
                <input
                  type="text"
                  placeholder={translate("Surname")}
                  className={`${styles.inputField}`}
                  {...register("last_name", { required: true })}
                  aria-invalid={errors.last_name ? "true" : "false"}
                />
              </div>
              {errors.last_name?.type === "required" && (
                <p role="alert" className="error_message pl-2 py-2">
                  {translate("Surname is required")}
                </p>
              )}
            </div>

          </div>

          {/**Email */}
          <div>
            <div className={`w-full ${styles.inputContainer}`}>
              <span className={`${styles.userIcon}`}>
                <EnvelopeIcon className="w-4 h-4 " />
              </span>
              <input
                type="email"
                placeholder={translate("Email")}
                className={`${styles.inputField}`}
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            {errors.email?.type === "required" && (
              <p role="alert" className="error_message pl-2 py-2">
                {translate("Email is required")}
              </p>
            )}
          </div>

          {/**Password */}
          <div>
            <div className={`w-full ${styles.inputContainer}`}>
              <span className={`${styles.userIcon}`}>
                <LockClosedIcon className="w-4 h-4 " />
              </span>
              <input
                type={passwordFieldType ? "text" : "password"}
                placeholder={translate("Password")}
                className={`${styles.inputField}`}
                {...register("password", {
                  required: `${translate("Password is required")}`,
                  validate: (value) => validatePassword(value),
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <span
                className={`ml-auto ${styles.userIcon}`}
                onClick={togglePasswordVisibility}
              >
                <EyeIcon className="w-4 h-4 cursor-pointer" />
              </span>
            </div>
            {errors.password && (
              <p role="alert" className="error_message w-8/12  pl-2 py-2">
                {(errors.password).message}
              </p>
            )}
          </div>
          <div className={` w-full`}>

            <Controller
              control={control}
              {...register("gender", {
                required: `${translate("Gender is required")}`,
              })}

              render={({ field }) => <Select
                placeholder={translate("Gender")}
                {...field}
                options={genderOptions}
                value={genderOptions.find(option => option.value === field?.value?.value)}
                onChange={(value) => field.onChange(value)}
              />}
            />
            {errors.gender && (
              <p role="alert" className="error_message w-8/12  pl-2 py-2">
                {(errors.gender).message}
              </p>
            )}
          </div>

          {/**Talent account */}
          <div className={` w-full`}>

            <Controller
              control={control}
              {...register("user_type", {
                required: `${translate("Account Type is required")}`,
              })}

              render={({ field }) => <Select
                placeholder={translate("Talent account")}
                {...field}
                options={talentOptions}
                value={talentOptions.find(option => option.value === field?.value?.value)}
                onChange={(value) => field.onChange(value)}
              />}
            />
            {errors.user_type && (
              <p role="alert" className="error_message w-8/12  pl-2 py-2">
                {(errors.user_type).message}
              </p>
            )}
          </div>
        </div>

        {/**Join now */}
        <input
          type="submit"
          value={translate("Join Now")}
          className={`mt-12 w-full bg-dark_blue py-4 text-white rounded-xl ${styles.joinNowBtn}`}
        />
      </form>
      <div
        className={`flex justify-center mt-6 text-base`}
      >
        <p className={``}>{translate("Already have an account?")}</p>
        <Link
          href="/auth/login"
          className={`text-sunglow text-base ml-3 font-semibold`}
        >
          {translate("Log in")}
        </Link>
      </div>
    </AuthLayout>
  );
};

type Props = {
  _nextI18Next?: {
    initialI18nStore: any;
    initialLocale: string;
    ns: string[];
    userConfig: any;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["signUp"],
        null,
        ["en", "no"]
      )),
    },
  };
};

export default Signup;
