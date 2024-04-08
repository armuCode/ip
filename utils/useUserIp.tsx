// hooks/useIP.js
import { useState, useEffect } from "react";

const useUserIP = () => {
  const [ip, setIP] = useState("");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("/api/hello"); // Ruta a tu endpoint de API
        const data = await response.json();
        setIP(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
        setIP("Unknown");
      }
    };

    fetchIP();
  }, []);

  return ip;
};

export default useUserIP;
