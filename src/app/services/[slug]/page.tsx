"use client";

import CommercialPrintPublishing from "@/components/services/CommercialPrintPublishing";
import ProductDisplayDesign from "@/components/services/ProductDisplayDesign";
import ProductionDesign from "@/components/services/ProductionDesign";
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
      case "thiet-ke-trung-bay-quang-cao":
        return <ProductDisplayDesign />;
      case "thiet-ke-san-xuat-bao-bi-giay":
        return <ProductionDesign />;
      default:
        return <CommercialPrintPublishing />;
    }
  };

  return <>{renderPage()}</>;
};

export default Service;
