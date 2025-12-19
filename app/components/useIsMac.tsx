import { useState, useEffect } from "react";

// Custom hook to detect if the user is on macOS
const useIsMac = (): boolean => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Check if the user is on macOS
    const isMacOS = navigator.platform.toUpperCase().includes("MAC");
    setIsMac(isMacOS);
  }, []);

  return isMac;
};

export default useIsMac;
