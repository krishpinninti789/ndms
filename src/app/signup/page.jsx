"use client";
import React from "react";
import { login, signup } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SignupPage = () => {
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <Card className="w-[350px]">
    //     <CardHeader>
    //       <CardTitle className="text-2xl text-purple-600 font-bold text-center">
    //         Signup
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <form className="space-y-4">
    //         <div className="space-y-2">
    //           <div className="space-y-2">
    //             <label htmlFor="text" className="text-sm font-medium">
    //               Fullname
    //             </label>
    //             <Input
    //               id="fullname"
    //               type="text"
    //               name="fullname"
    //               placeholder="Enter your fullname"
    //               //   value={email}
    //               //   onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <div className="space-y-2">
    //               <label htmlFor="text" className="text-sm font-medium">
    //                 Role:
    //               </label>
    //               {/* <select name="role" id="role">
    //                 <option value="">select a role</option>
    //                 <option value="">student</option>
    //                 <option value="">admin</option>
    //                 <option value="">superadmin</option>
    //               </select> */}
    //               <Select name="role">
    //                 <SelectTrigger className="w-[180px]">
    //                   <SelectValue placeholder="Select a role" />
    //                 </SelectTrigger>
    //                 <SelectContent>
    //                   <SelectGroup>
    //                     <SelectItem value="admin">Admin</SelectItem>
    //                     <SelectItem value="superAdmin">SuperAdmin</SelectItem>
    //                     <SelectItem value="student">Student</SelectItem>
    //                   </SelectGroup>
    //                 </SelectContent>
    //               </Select>
    //             </div>
    //           </div>
    //           <label htmlFor="email" className="text-sm font-medium">
    //             Email
    //           </label>
    //           <Input
    //             id="email"
    //             type="email"
    //             name="email"
    //             placeholder="Enter your email"
    //             //   value={email}
    //             //   onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <label htmlFor="password" className="text-sm font-medium">
    //             Password
    //           </label>
    //           <Input
    //             id="password"
    //             name="password"
    //             type="password"
    //             placeholder="Enter your password"
    //             //   value={password}
    //             //   onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <div className="flex space-x-2">
    //           <Button className="flex-1 bg-purple-600" formAction={signup}>
    //             Signup
    //           </Button>
    //         </div>
    //       </form>
    //     </CardContent>
    //     <div className="text-center text-md space-x-2 gap-2 text-gray-600 mb-3">
    //       <h1>Already have an account?</h1>
    //       <span className="underline text-black">
    //         <Link href={"/login"}>login</Link>
    //       </span>
    //     </div>
    //   </Card>
    //   <div className="mt-8 text-center text-sm text-gray-400">© NDMS</div>
    // </div>
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        {/* <div className="absolute inset-0 translate-y-1/2 rounded-full bg-purple-600" /> */}
      </div>

      <div className="w-full max-w-[400px] mx-auto p-6 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Create an account
          </h1>
          <p className="text-gray-500">
            Please enter your details to get started.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              type="text"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select required name="role">
              <SelectTrigger id="role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="superAdmin">SuperAdmin</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              required
            />
          </div>

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            formAction={signup}
            // type="submit"
          >
            Sign up
          </Button>

          <Button variant="outline" className="w-full">
            <FcGoogle />
            Sign up with Google
          </Button>

          <div className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-600 hover:text-purple-700"
            >
              Sign in
            </Link>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">© NDMS</div>
      </div>
    </div>
  );
};

export default SignupPage;
