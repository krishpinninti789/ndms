"use client";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    // <form>
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />
    //   <button formAction={login}>Log in</button>
    //   <button formAction={signup}>Sign up</button>
    // </form>
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
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
              <Button className="flex-1" formAction={login}>
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="text-center text-sm mb-3">
          <h1 className="text-gray-500">Do not have an account?</h1>
          <span className="underline text-black">
            <Link href={"/signup"}>Signup</Link>
          </span>
        </div>
      </Card>
    </div>
  );
}
