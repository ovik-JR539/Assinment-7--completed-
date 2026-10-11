"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient, signIn } from "@/lib/auth-client";
import Link from "next/link";

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resdata, error } = await signIn.email({
            email: data.email,
            password: data.password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        if (resdata) {
            toast.success("Sign In successful!");

            // 2 seconds later: go to home and fully reload
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    const handleGitHubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    };

    
return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F5EF] px-4 py-10">
        <Toaster />

        <div className="w-full min-h-[600px] max-w-lg">

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
                সাইন ইন
            </h2>

            <p className="text-sm text-center text-gray-500 mb-5">
                বিস্তারিত দাম, বাজার তুলনা ও ক্যাটাগরি দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>

            <Form
                className="flex w-full flex-col gap-4 bg-white/70 p-6 sm:p-7 rounded-xl border border-[#E0E9DF] shadow-sm"
                onSubmit={onSubmit}
            >

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

                <TextField isRequired name="password" type="password">
                    <Label className="text-sm font-medium text-gray-800">
                        পাসওয়ার্ড
                    </Label>

                    <Input
                        placeholder="কমপক্ষে ৮ অক্ষর"
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg bg-transparent"
                    />

                    <FieldError />
                </TextField>

                <Button
                    type="submit"
                    className="w-full h-11 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800"
                >
                    সাইন ইন
                </Button>

                <div className="flex items-center gap-3 w-full">
                    <div className="h-px flex-1 bg-gray-200" />
                    <p className="text-xs text-gray-500">অথবা</p>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-2 w-full">

                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center gap-1 border border-gray-200 rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-50"
                    >
                      
                        Google দিয়ে চালিয়ে যান
                    </button>

                    <button
                        type="button"
                        onClick={handleGitHubSignIn}
                        className="flex items-center justify-center gap-1 border border-gray-200 rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-50"
                    >
                        
                        GitHub দিয়ে চালিয়ে যান
                    </button>

                </div>

                <p className="text-sm text-center text-gray-600 w-full">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/signup"
                        className="text-green-700 font-medium hover:underline"
                    >
                        সাইন আপ করুন
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

export default SignInPage;