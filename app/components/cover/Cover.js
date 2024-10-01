"use client";

import Navbar from "../../navbar/Navbar";
import Link from "next/link";
import "../../globals.css";
import "./cover.css";
import { Sevillana } from "next/font/google";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const sevi = Sevillana({ weight: "400", subsets: ["latin"] });
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
          ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export const Cover = () => {
  return (
    <div className="hero0">
      <Navbar />

      <div className="cover-image">
        <p className="descriere-site">
          Poetul John Keats spunea :Un lucru frumos este o bucurie vesnica. Sunt
          Rica si-mi place sa daruiesc bucurie prin buchete unice. Le creez cu
          drag si cu convingerea ca vor fi un motiv de incantare. Am propria
          plantatie de trandafiri, din care aleg cu grija si atentie la detalii
          fiecare floare pentru buchetul dorit. Va astept cu portile deschise in
          boutique-ul din Batos sau pe site unde puteti gasi modele din
          creatiile mele personale. Pe curand!
        </p>
        <Link href={"#hei"} className="arrow">
          <Image
            className="arrow.png"
            src="/arrow.png"
            alt="food"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div id="hei">
        <div className={`produse ${sevi.className}`}>Despre noi </div>
        <div className="productss">
          <RevealOnScroll>
            <div className="prezentare_site">
              <p className="bine_ati_venit">Bine ati venit!</p>
              <p className="sale_speech">
                Vreti sa luminati ziua cuiva? Ofera-i un buchet frumos! La
                Ffloraria Dandelion, avem o selectie mare de flori si
                aranjamente realizate cu pasiune si mult suflet, pentru fiecare
                ocazie. Florile noastre provin atat din productia proprie cat si
                direct din Olanda si ne permit sa oferim zilnic selectii
                proaspete si superbe. Vizitati site-ul nostru si vedeti ce avem
                de oferit!{" "}
              </p>
            </div>
          </RevealOnScroll>
          <div className="aranjamente_and_evenimente">
            <RevealOnScroll>
              <a href="/aranjamente">
                <div className="aranjamente">
                  <h2> ARANJAMENTE</h2>
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll>
              <a href="/evenimente">
                <div className="evenimente">
                  <h2>EVENIMENTE</h2>
                </div>
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
