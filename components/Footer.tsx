"use client";

import { useEffect, useRef, useState } from "react";
import {
  InlineWidget,
  PopupButton,
  PopupModal,
  PopupWidget,
} from "react-calendly";
import CalendlyButton from "./ui/calendly-button";

export default function Footer() {
  return (
    <section className="w-full flex flex-col gap-5 justify-center items-center">
      <CalendlyButton url="https://calendly.com/jens-nettlio" />
    </section>
  );
}
