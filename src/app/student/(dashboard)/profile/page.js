"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import clsx from "clsx";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20192831-0OaiQrDCnXBvcnBpUUXgpe0mjElj0K.png"
  );
  const [loading, setLoading] = useState(false);

  return (
    <div
      className={clsx(
        "flex flex-1  flex-col gap-4 p-4 pt-0",
        loading ? "justify-center items-center h-screen" : ""
      )}
    >
      {loading ? (
        <p className="loader"></p>
      ) : (
        <div className="max-w-2xl mx-auto p-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-muted-foreground">
              Profile picture
            </h2>
            <div className="flex items-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profileImage} alt="Profile picture" />
                <AvatarFallback>KH</AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <Button
                  variant="default"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Change picture
                </Button>
                <Button
                  variant="outline"
                  className="text-red-500 hover:text-red-600"
                >
                  Delete picture
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profileName">Profile name</Label>
              <Input id="profileName" defaultValue="Kevin Heart" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground">
                  @
                </span>
                <Input
                  id="username"
                  defaultValue="kevinunhuy"
                  className="pl-7"
                />
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Available change in 25/04/2024
            </div>
          </div>

          <div className="space-y-2">
            <Label>Status recently</Label>
            <Input defaultValue="On duty" readOnly className="bg-muted" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">About me</Label>
            <Textarea
              id="about"
              defaultValue="Discuss only on work hour, unless you wanna discuss about music 👍"
              rows={4}
            />
          </div>

          <div className="flex justify-end">
            <Button className="bg-gray-200 hover:bg-gray-300 text-gray-900">
              Save changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
