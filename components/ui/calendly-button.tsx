import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function CalendlyButton({ url }: { url: string }) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("root"));
    }
  }, []);
  return (
    <>
      {rootElement && (
        <PopupButton
          url={url}
          text="Book a Call"
          rootElement={rootElement}
          className="btn btn-primary w-max"
        />
      )}
    </>
  );
}
