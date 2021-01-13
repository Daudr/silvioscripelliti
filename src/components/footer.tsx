import React from "react";

import "./footer.scss";

interface FooterProps {
  copyright: string;
}

export const Footer = ({ copyright }: FooterProps) => (
  <footer>{copyright}</footer>
);
