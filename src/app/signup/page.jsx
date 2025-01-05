"use client";
import React from "react";
import { login, signup } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Signup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <div className="space-y-2">
                <label htmlFor="text" className="text-sm font-medium">
                  Fullname
                </label>
                <Input
                  id="fullname"
                  type="text"
                  name="fullname"
                  placeholder="Enter your fullname"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                />
                <div className="space-y-2">
                  <label htmlFor="text" className="text-sm font-medium">
                    Role:
                  </label>
                  {/* <select name="role" id="role">
                    <option value="">select a role</option>
                    <option value="">student</option>
                    <option value="">admin</option>
                    <option value="">superadmin</option>
                  </select> */}
                  <Select name="role">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a role" />
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
              </div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1" formAction={signup}>
                Signup
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="text-center text-md space-x-2 gap-2 text-gray-600 mb-3">
          <h1>Already have an account?</h1>
          <span className="underline text-black">
            <Link href={"/login"}>login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
