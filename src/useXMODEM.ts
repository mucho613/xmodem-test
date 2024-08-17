import { useEffect, useState } from "react";

type ReturnType = {
  handleConnect: () => void;
}

export default function useXMODEM(): ReturnType {
  const [port, setPort] = useState<SerialPort | null>(null);

  const handleConnect = async () => {
    navigator.serial.requestPort().then((selectedPort) => {
      setPort(selectedPort);
    }).catch((error) => {
      console.error(error);
    });
  }

  return {
    handleConnect
  }
};
