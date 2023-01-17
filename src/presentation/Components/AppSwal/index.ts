import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const AppSwal = () =>
  withReactContent(
    Swal.mixin({
      confirmButtonColor: "#65af9d",
      width: "400px",
      background: "fff",
      //   background: "rgba(0,0,0,0.1)",

      color: "#000",
    })
  );
