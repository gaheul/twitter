import Swal from "sweetalert2";

export const sweetAlert = () => (title, text, icon) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};
