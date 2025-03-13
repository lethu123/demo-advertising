"use client";

import Calandar from "@/components/products/Calandar";
import NoteBook from "@/components/products/NoteBook";
import Standee from "@/components/products/Standee";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

import "@/../i18n";
const Service = () => {
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    if (!params?.slug) {
      return;
    } else {
      const sectionToScrollTo = document.getElementById(params?.slug);
      if (sectionToScrollTo) {
        sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params?.slug]);

  const renderPage = () => {
    switch (params?.slug) {
      case "so-tay":
      case "name-card":
        return <NoteBook />;
      case "lich":
      case "sticker":
        return <Calandar />;
      default:
        return <Standee />;
    }
  };

  return <>{renderPage()}</>;
};

export default Service;
