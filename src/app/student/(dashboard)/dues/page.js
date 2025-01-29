"use client";
import React from "react";
import { createClient } from "@/app/utils/supabase/client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";

const Duespage = () => {
  const [studentDues, setStudentDues] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  useEffect(() => {
    const fetchStudentDues = async () => {
      const user = supabase.auth.getUser();
      const { data: userInfo, error } = await user;
      console.log(userInfo);

      if (error) {
        console.error("User not found:", error.message);
        return;
      }

      const userId = userInfo?.user.id;

      // Fetch data based on user ID
      const { data: studentDues, error: fetchError } = await supabase
        .from("dues") // Replace with your table name
        .select("*")
        .eq("sid", userId);
      // Assumes you store user IDs in the `students` table

      console.log(studentDues);

      if (fetchError) {
        console.error("Error fetching student data:", fetchError.message);
      } else {
        setStudentDues(studentDues);
      }
      setLoading(false);
    };

    fetchStudentDues();
  }, [supabase]);

  //   const invoices = [
  //     {
  //       invoice: "INV001",
  //       paymentStatus: "Paid",
  //       totalAmount: "$250.00",
  //       paymentMethod: "Credit Card",
  //     },
  //     {
  //       invoice: "INV002",
  //       paymentStatus: "Pending",
  //       totalAmount: "$150.00",
  //       paymentMethod: "PayPal",
  //     },
  //     {
  //       invoice: "INV003",
  //       paymentStatus: "Unpaid",
  //       totalAmount: "$350.00",
  //       paymentMethod: "Bank Transfer",
  //     },
  //     {
  //       invoice: "INV004",
  //       paymentStatus: "Paid",
  //       totalAmount: "$450.00",
  //       paymentMethod: "Credit Card",
  //     },
  //     {
  //       invoice: "INV005",
  //       paymentStatus: "Paid",
  //       totalAmount: "$550.00",
  //       paymentMethod: "PayPal",
  //     },
  //     {
  //       invoice: "INV006",
  //       paymentStatus: "Pending",
  //       totalAmount: "$200.00",
  //       paymentMethod: "Bank Transfer",
  //     },
  //     {
  //       invoice: "INV007",
  //       paymentStatus: "Unpaid",
  //       totalAmount: "$300.00",
  //       paymentMethod: "Credit Card",
  //     },
  //   ];

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
        <div>
          <h1 className="text-2xl font-bold">Dues</h1>
          <Table>
            {/* <TableCaption>A list of your dues.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Amount Paid</TableHead>
                <TableHead className="text-right">Amount Pending</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentDues.map((dues) => (
                <TableRow key={dues.FeeType}>
                  <TableCell className="font-medium">{dues.FeeType}</TableCell>
                  <TableCell>{dues.status}</TableCell>
                  <TableCell>{dues.amount}</TableCell>
                  <TableCell className="text-right">
                    {dues.amount_paid}
                  </TableCell>
                  <TableCell className="text-right">
                    {dues.amount_pending}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
      )}
    </div>
  );
};

export default Duespage;
