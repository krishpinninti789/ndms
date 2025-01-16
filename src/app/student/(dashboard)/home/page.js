"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";
import React from "react";

const HomePage = () => {
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
  );
};

export default HomePage;
