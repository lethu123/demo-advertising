"use client";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
}

const Translations = ({ text }: Props) => {
  const { t } = useTranslation();

  return <>{`${t(text)}`}</>;
};

export default Translations;
