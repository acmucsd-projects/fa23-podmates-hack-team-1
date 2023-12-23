"use client"

import OnCampusForm from "@/app/components/OnCampusForm";
import OffCmpusForm from "@/app/components/OffCampusForm";
import "./test.css"
import Link from "next/link";

export default function Test() {
    return (
        <div className="sign-in-container">
            <div className="left-container">
                <></>
            </div>
            <div className="right-container">
                <h1>On-Campus Housing</h1>
                {/* <h1>Off-Campus Housing</h1> */}
                <OnCampusForm />
                {/* <OffCmpusForm /> */}
            </div>
        </div>
    );
}