import { useEffect } from "react";
import { CheckCircle, X, XCircle } from "lucide-react";
import { NotificationType } from "@/utils/enums.utils";
import { NotificationProps } from "@/utils/types.utils";

export const Notification = ({ type, message, isVisible, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md w-full transform transition-all duration-500 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`p-4 rounded-xl border shadow-lg backdrop-blur-sm ${
        type === NotificationType.SUCCESS
          ? 'bg-green-50/90 border-green-200 text-green-800'
          : 'bg-red-50/90 border-red-200 text-red-800'
      }`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {type === NotificationType.SUCCESS ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">
              {type === NotificationType.SUCCESS ? 'Success!' : 'Error!'}
            </p>
            <p className="text-sm mt-1">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={onClose}
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
                type === NotificationType.SUCCESS
                  ? 'text-green-500 hover:bg-green-100 focus:ring-green-600'
                  : 'text-red-500 hover:bg-red-100 focus:ring-red-600'
              }`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
