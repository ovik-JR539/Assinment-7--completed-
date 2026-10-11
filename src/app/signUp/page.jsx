"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button, Description,  FieldError, Form, Input, Label, TextField,
} from "@heroui/react";
import { authClient, signUp, signIn } from "@/lib/auth-client";
import Link from "next/link";

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resdata, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        if (resdata) {
            toast.success("Sign Up successful!");

            setTimeout(() => {
                window.location.href = "/";
            }, );
        }
    };

    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    const handleGitHubSignUp = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    };

   
return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F5EF] px-4 py-10">
        <Toaster />

        <div className="w-full max-w-md  ">

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
                অ্যাকাউন্ট তৈরি করুন
            </h2>

            <p className="text-sm text-center text-gray-500 mb-5">
                বিনা ঝামেলায় সাইন আপ করে সব বিস্তারিত তথ্য পেয়ে যান।
            </p>

            <Form
                className="flex w-full flex-col gap-4 bg-white/70 p-6 sm:p-7 rounded-xl border border-[#E0E9DF] shadow-sm"
                onSubmit={onSubmit}
            >

                <TextField isRequired name="name">
                    <Label className="text-sm font-medium text-gray-800">
                        নাম
                    </Label>

                    <Input
                        placeholder="যেমন: রহিম উদ্দিন"
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg bg-transparent"
                    />

                    <FieldError />
                </TextField>

                <TextField isRequired name="email" type="email">
                    <Label className="text-sm font-medium text-gray-800">
                        ইমেইল
                    </Label>

                    <Input
                        placeholder="you@example.com"
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg bg-transparent"
                    />

                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="password"
                    type="password"
                    minLength={8}
                >
                    <Label className="text-sm font-medium text-gray-800">
                        পাসওয়ার্ড
                    </Label>

                    <Input
                        placeholder="কমপক্ষে ৮ অক্ষর"
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg bg-transparent"
                    />

                    <Description className="text-xs text-gray-500">
                        কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা।
                    </Description>

                    <FieldError />
                </TextField>

                <Button
                    type="submit"
                    className="w-full h-11 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800"
                >
                    অ্যাকাউন্ট তৈরি করুন
                </Button>

                <div className="flex items-center gap-3 w-full">
                    <div className="h-px flex-1 bg-gray-200" />
                    <p className="text-xs text-gray-500">অথবা</p>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-2 w-full">

                    <button
                        type="button"
                        onClick={handleGoogleSignUp}
                        className="flex items-center justify-center gap-1 border border-gray-200 rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-50"
                    >
                        
                        Google দিয়ে চালিয়ে যান
                    </button>

                    <button
                        type="button"
                        onClick={handleGitHubSignUp}
                        className="flex items-center justify-center gap-1 border border-gray-200 rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-50"
                    >
                        
                        GitHub দিয়ে চালিয়ে যান
                    </button>

                </div>

                <p className="text-sm text-center text-gray-600 w-full">
                    অ্যাকাউন্ট আছে?{" "}
                    <Link
                        href="/signin"
                        className="text-green-700 font-medium hover:underline"
                    >
                        সাইন ইন করুন
                    </Link>
                </p>

            </Form>

            <Link
                href="/"
                className="block text-center text-sm text-gray-500 mt-5 hover:text-green-700"
            >
                ← হোম পেজে ফিরে যান
            </Link>

        </div>
    </div>
);


   
};

export default SignUpPage;