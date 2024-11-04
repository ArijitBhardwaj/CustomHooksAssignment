import { useEffect } from "react";

function useLogger(methodType, message) {
  useEffect(() => {
    // Only log if message is not empty to prevent logging on every render
    if (message) {
      switch (methodType) {
        case "log":
          console.log(message);
          break;
        case "warn":
          console.warn(message);
          break;
        case "error":
          console.error(message);
          break;
        case "debug":
          console.debug(message);
          break;
        default:
          console.log("Invalid methodType");
      }
    }
  }, [methodType, message]);
}

export default useLogger;
