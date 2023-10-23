import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface NotificationsProps {
  message: string;
  type: string;
}

export const notify = ({ message, type }: NotificationsProps) => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme:"colored",
  };

  switch (type) {
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
};