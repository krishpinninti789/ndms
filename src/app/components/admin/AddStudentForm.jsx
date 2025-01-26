"use client";
import React from "react";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { registerStudent } from "@/app/api/addstudent/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
// import { toast } from "@/components/ui/use-toast";
import { DuesManager } from "./DuesManager";

const AddStudentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const result = await registerStudent(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Success",
        description: "Student registered successfully",
      });
      reset();
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Student Registration</CardTitle>
        <CardDescription>
          Enter student details for college registration
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              {...register("course", { required: "Course is required" })}
            />
            {errors.course && (
              <p className="text-red-500 text-sm">{errors.course.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="batch">Batch</Label>
            <Input
              id="batch"
              {...register("batch", { required: "Batch is required" })}
            />
            {errors.batch && (
              <p className="text-red-500 text-sm">{errors.batch.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Dues</Label>
            <Controller
              name="dues"
              control={control}
              defaultValue={[]}
              rules={{
                validate: (dues) =>
                  dues.length > 0 || "At least one fee is required",
              }}
              render={({ field }) => (
                <DuesManager dues={field.value} onChange={field.onChange} />
              )}
            />
            {errors.dues && (
              <p className="text-red-500 text-sm">{errors.dues.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register Student"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddStudentForm;
