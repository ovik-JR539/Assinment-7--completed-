
"use client";

import { authClient } from "@/lib/auth-client";
import {Avatar, Button, Form, Input, Label, TextField,} from "@heroui/react";

const UserName = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUserData = Object.fromEntries(formData.entries());

        const { error } = await authClient.updateUser({
            name: newUserData.name,
        });

        if (error) {
            console.log(error);
            return;
        }

        console.log("Name updated successfully");
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f0f5ef]">
                <p className="text-gray-600">
                    Please sign in first or wait for your session to load.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f0f5ef] px-4 py-10">

            <div className="max-w-4xl mx-auto">

                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        আমার প্রোফাইল
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        আপনার প্রোফাইলের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Information Card */}
                <div className="bg-white/70 border border-gray-200 rounded-xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                        <Avatar className="w-16 h-16 rounded-xl">
                            <Avatar.Fallback className="text-lg font-semibold">
                                {user.name?.charAt(0).toUpperCase()}
                            </Avatar.Fallback>
                        </Avatar>

                        <div>
                            <h2 className="text-base font-semibold text-gray-900">
                                {user.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>

                    </div>

                    <Button
                        type="button"
                        variant="bordered"
                        className="border border-red-300 text-red-600 rounded-lg px-4"
                        onPress={() => authClient.signOut()}
                    >
                        <span>↪ সাইন আউট</span>
                    </Button>

                </div>

                {/* Update Name Card */}
                <div className="bg-white/80 border border-gray-200 rounded-xl p-6">

                    <h2 className="text-lg font-semibold text-gray-900 mb-5">
                        তথ্য
                    </h2>

                    <Form
                        onSubmit={handleUpdateProfile}
                        className="flex flex-col gap-5"
                    >

                        <TextField className="w-full flex flex-col gap-2">
                            <Label className="text-sm font-medium text-gray-700">
                                নাম
                            </Label>

                            <Input
                                name="name"
                                placeholder="আপনার নতুন নাম লিখুন"
                                
                                required
                                className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-green-600"
                            />
                        </TextField>

                        <Button
                            type="submit"
                            className="w-full h-11 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg"
                        >
                            আপডেট
                        </Button>

                    </Form>

                </div>

            </div>

        </div>
    );
};

export default UserName;
