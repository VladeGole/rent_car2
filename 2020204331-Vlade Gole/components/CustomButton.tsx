"use client"
import { CustomButtonProps } from '@/type'
import React from 'react'

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyle}:CustomButtonProps) => {
  return (
    <button disabled={false}
     type={"button"|| btnType}
     className={`custom-btn ${containerStyles}`}
     onClick={handleClick}   
    >   
        <span className={`flex-1 ${textStyle}`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton