"use client";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    // <form>
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />
    //   <button formAction={login}>Log in</button>
    //   <button formAction={signup}>Sign up</button>
    // </form>
    // <div className="flex justify-center items-center h-screen">
    //   <Card className="w-[350px]">
    //     <CardHeader>
    //       <CardTitle className="text-2xl text-purple-600 font-bold text-center">
    //         Login
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <form className="space-y-4">
    //         <div className="space-y-2">
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
    //           <Button className="flex-1 bg-purple-600" formAction={login}>
    //             Login
    //           </Button>
    //         </div>
    //       </form>
    //     </CardContent>
    //     <div className="text-center text-sm mb-3">
    //       <h1 className="text-gray-500">Do not have an account?</h1>
    //       <span className="underline text-black">
    //         <Link href={"/signup"}>Signup</Link>
    //       </span>
    //     </div>
    //   </Card>
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
            Welcome back
          </h1>
          <p className="text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm text-gray-500 cursor-pointer"
              >
                Remember for 30 days
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-purple-600 hover:text-purple-700"
            >
              Forgot password
            </Link>
          </div>

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            formAction={login}
          >
            Sign in
          </Button>

          <Button variant="outline" className="w-full">
            <FcGoogle />
            Sign in with Google
          </Button>

          <div className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-purple-600 hover:text-purple-700"
            >
              Sign up
            </Link>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">© NDMS</div>
      </div>
    </div>
  );
}
