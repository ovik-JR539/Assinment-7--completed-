
import React from "react";
import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">

            <Spinner
                color="primary"
                size="lg"
            />

            <h2 className="text-3xl font-bold text-green-700 mt-6">
                বাজার দর
            </h2>

            <p className="text-blue-600 mt-3 text-lg">
                তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
            </p>

        </div>
    );
};

export default Loading;
