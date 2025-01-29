import { createClient } from "@/app/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createClient();
    // console.log(supabase);

    const user = supabase.auth.getUser();
    console.log(user);

    const { data: userInfo, error } = await user;
    console.log(userInfo);
    const userId = userInfo?.user.id;

    const data = await supabase
      .from(dues)
      .select("*")
      .eq("id", userId)
      .single();
    // console.log(data);

    // console.log(extractAllBlogs);
    if (data) {
      return NextResponse.json({
        success: true,
        message: "Successfully get all dues",
        data: data,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "There is an error in obtaining data",
      });
    }
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "There is an error in getting data",
    });
  }
}
