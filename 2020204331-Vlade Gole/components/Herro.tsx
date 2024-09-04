"use client";
import React from 'react'
import {CustomButton} from './'
import Image from 'next/image';

const Herro = () => {

    const handler = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Rent a car
            </h1>
            <p>
                Ovaj sajt sluzi za iznajmljivanje kola.
                Za ovaj deo iznajmljivanja potrebni su licni podaci.
                U Nastavku procitajte nas licni katalog
            </p>
            <CustomButton 
             title="Explore cars"
             containerStyles="bg-primary-blue
             text-white rounded-full mt-10"
             handleClick={handler}
             btnType="button"

            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
            <Image src="/auto.jpeg" alt="hero"
            fill className="object-contain" />
            </div>
        </div>
    </div>
    
  )
}

export default Herro