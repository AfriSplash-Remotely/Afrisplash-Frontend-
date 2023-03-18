import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from 'next/router';
import { useLoginMutation } from "store/services/auth";
import type { LoginRequest } from "store/services/auth";
import styles from "styles/Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthLayout from "@/layouts/Auth.layout";
import google from "assets/svg/google.svg";
import Image from "next/image";

const Login: NextPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      await login(data).unwrap();
      toast.success("Login successful");
      router.push("/dashboard")
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return <AuthLayout>
    <Head>
      <title>Afrisplash | Login</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={`mt-10 ${styles.span}`}>
      <h2 className={styles.h2}>Welcome Back</h2>
      <p className="mb-20">Log in to see what&apos;s new</p>

      <button
        className={`flex justify-center items-center ${styles.button}`}
      >
        <span className="mr-2">
          <Image src={google} alt="google icon" />
        </span>
        Log in with Google
      </button>

      <div className="flex flex-row items-center my-6 mx-auto">
        <hr className="w-[100px] mr-5 h-[5px] text-[#D9DEDC]" />
        or with email
        <hr className="ml-5 w-[100px] h-[5px] text-[#97a39e]" />
      </div>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full ">
          <input
            className={styles.input}
            type="email"
            placeholder="email@gmail.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p role="alert" className="error_message pl-2 py-2">
              {(errors.email as any).message}
            </p>
          )}
        </div>
        <div>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p role="alert" className="error_message pl-2 py-2">
              {(errors.password as any).message}
            </p>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex">
            <input type="checkbox" />
            <p className="ml-2">Keep me logged in</p>
          </div>
          <Link href={"/reset-pasword"} legacyBehavior>
            <p>Forgot Password?</p>
          </Link>
        </div>
        <input
          value="Log in"
          type="submit"
          className={`bg-dark_blue hover:bg-primary_green cursor-pointer text-white ${styles.button}`}
        />
      </form>
      <p className="text-center mt-4">
        Don&apos;t have an account?
        <span className="text-[#0D5520] underline font-[700]">
          <Link href={"/auth/signup"}>Join now</Link>
        </span>
      </p>
    </div>

  </AuthLayout>
}

export default Login