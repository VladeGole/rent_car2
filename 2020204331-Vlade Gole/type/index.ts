import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType:"button"|"submit";
    textStyle?:string;
}

export interface HomeProps {
    searchParams: FilterProps;
  }

export interface SearchBarProps{
    manufacturer:string;
    setManifacture:(manifacture:string)=>void;

}

export interface FilterProps {
    manufacturer?: string;
    model?: string;
  }

export interface CarProp{
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}