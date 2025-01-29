"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/app/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { data: user, error } = await supabase.auth.signInWithPassword(data);

  const userId = user?.user.id;
  // console.log(userId);

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId);
  // console.log(profileData[0].fullname);

  if (error) {
    redirect("/error");
  } else {
    if (profileData[0].role === "admin") {
      revalidatePath("/", "layout");
      redirect(`/admin/home`);
    } else if (profileData[0].role === "superAdmin") {
      revalidatePath("/", "layout");
      redirect(`/superadmin/home`);
    } else {
      revalidatePath("/", "layout");
      redirect(`/student/home`);
    }
  }
}

export async function signup(formData) {
  const supabase = await createClient();
  // console.log(supabase);
  console.log(formData);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    fullname: formData.get("fullname"),
    role: formData.get("role"),
  };

  console.log(data);

  const { data: signUpData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  console.log(signUpData);

  const userId = signUpData?.user?.id;
  console.log(userId);

  if (userId) {
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: userId,
          fullname: data.fullname,
          role: data.role,
          email: data.email,
        },
      ])
      .select();
    if (profileError) {
      console.error("Error inserting profile:", profileError.message);
    } else {
      console.log("Profile created successfully:", profileData);
    }
  }

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
