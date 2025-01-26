"use server";

import { createClient } from "@/app/utils/supabase/server";

export async function registerStudent(data) {
  try {
    const supabase = createClient();
    const { data: insertedData, error } = await supabase
      .from("students")
      .insert(data);

    if (error) throw error;

    return { success: true, data: insertedData[0] };
  } catch (error) {
    console.error("Error registering student:", error);
    return { success: false, error: "Failed to register student" };
  }
}
