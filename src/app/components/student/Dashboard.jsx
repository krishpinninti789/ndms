"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const StudentDashboardPage = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchStudentData = async () => {
      const user = supabase.auth.getUser();
      const { data: userInfo, error } = await user;
      console.log(userInfo);

      if (error) {
        console.error("User not found:", error.message);
        return;
      }

      const userId = userInfo?.user.id;

      // Fetch data based on user ID
      const { data: studentData, error: fetchError } = await supabase
        .from("profiles") // Replace with your table name
        .select("*")
        .eq("id", userId) // Assumes you store user IDs in the `students` table
        .single();
      console.log(studentData);

      if (fetchError) {
        console.error("Error fetching student data:", fetchError.message);
      } else {
        setStudentData(studentData);
      }
      setLoading(false);
    };

    fetchStudentData();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h1 className="text-2xl font-bold">
                Welcome, {studentData?.fullname}
              </h1>
              <p>
                You are role is the {studentData?.role} role. and mail id is
                {studentData?.email}
              </p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default StudentDashboardPage;
