import Swal from "sweetalert2";
import { AppSwal } from "../AppSwal";

export const AppToast = () =>
  AppSwal().mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    customClass: {
      container: "sweet-alert-toast-height",
    },
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
