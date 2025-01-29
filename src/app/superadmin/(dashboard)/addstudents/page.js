import { Button } from "@/components/ui/button";
import React from "react";
import { GrCloudUpload } from "react-icons/gr";

const AddStudentPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-3">
        <div className="rounded-lg border-dashed flex justify-center items-center border-gray-400 ">
          <GrCloudUpload />
          <h1>
            Drag & Drop <span className="text-violet-600">Excel</span>
            <br></br>
            <span className="text-voilert-600"> browse files</span> on your
            computer{" "}
          </h1>
        </div>
      </div>
      <Button>Upload</Button>
    </div>
  );
};

export default AddStudentPage;
