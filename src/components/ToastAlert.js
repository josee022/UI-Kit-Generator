"use client";

import { Toaster, toast } from "react-hot-toast";

export default function ToastAlert() {
  return <Toaster position="top-right" reverseOrder={false} />;
}

export function showToast(message, type = "success") {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast(message);
      break;
    default:
      toast(message);
  }
}
