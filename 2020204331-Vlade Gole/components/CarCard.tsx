"use client";
import { CarProp } from '@/type'
import React, { useState } from 'react'
import Image from 'next/image';
import { CardDetails, CustomButton } from '.';
import { generateCarImageUrl } from '@/utils';



 interface CarCardProps{
    car:CarProp;
} 

const CarCard = ({car}:CarCardProps) => {

    const{city_mpg, drive ,make , model, transmission, year}=car;

    const[isOpen,setIsOpen]=useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {model} {make}
        </h2>
      </div>
      <p className=" flex font-bold text-[34px]">
        <span className="font-bold text-[14px]">
          $
        </span>
        54
        <span className=" self-end font-bold text-[14px]">
          /day
        </span>
      </p>

      <div className=" relative w-full h-40 my-3 object-contain">
        <Image src="/getImage.webp" alt="car-lego" fill className="object-contain" />
      </div>

      <div className="relative flex w-full">
       <div className="flex group-hover:invisible w-full justify-between text-gray">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="steering-wheel.svg" alt="manual" width={20} height={20}   />
        <p>{transmission==='a'?'Automatic':'Manual'}</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="tire.svg" alt="manual" width={20} height={20}   />
        <p>{drive.toUpperCase()}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="gas.svg" alt="manual" width={20} height={20}   />
        <p>{city_mpg}MPG</p>
      </div>

      </div> 

      <div className="car-card__btn-container">
        <CustomButton title="View More"
          containerStyles="w-full rounded-full bg-primary-blue py-[16px]"
          btnType={'button'}
          textStyle=" text-white font-bold"
          handleClick={()=>setIsOpen(true)}
          />
         
      </div>
     
      </div>

      <div>
        <CardDetails isOpen={isOpen} closeModal={closeModal} car={car}/>
      </div>

    </div>
  )
}

export default CarCard