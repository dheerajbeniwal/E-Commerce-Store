"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { client } from "@/utils/helper";
import { toast } from "sonner";

export default function StatusButton({ status, api }) {
  const router = useRouter();

  console.log(api);

  function statusHandler() {
    client
      .patch(api)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          router.refresh();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  }

  return (
    <td className="px-6 py-4">
      <span
        onClick={statusHandler}
        className={`inline-flex cursor-pointer rounded-full px-3 py-1 text-xs font-medium ${
          status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {status ? "Active" : "Inactive"}
      </span>
    </td>
  );
}
