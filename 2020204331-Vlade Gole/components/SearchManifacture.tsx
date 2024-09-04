"use client";
import { SearchBarProps } from '@/type'
import { Combobox,ComboboxButton,ComboboxInput,ComboboxOption,ComboboxOptions,Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import  {manufacturers}  from '@/constants';
import { CheckIcon } from '@heroicons/react/20/solid';

const SearchManifacture = ({manufacturer,setManifacture}:SearchBarProps) => {
    
    const[query,setQuery]=useState('');

    const filterCar=query===''?manufacturers:manufacturers.filter((item)=>(
        item.toLowerCase().replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    ))

    return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManifacture}>
        <div className="relative w-full left-9">
            <div className="relative">
            <ComboboxButton className="absolute inset-y-0 left-0 flex items-center ">
                <Image src="/car-logo.svg"  width={20} height={20} className="ml-5" alt="Car"/>
            </ComboboxButton>

            <ComboboxInput  className="search-manufacturer__input" placeholder="Volkswagen"
                displayValue={(manufacturer:string)=>manufacturer}
                onChange={(e)=>setQuery(e.target.value)}

            />
            </div>
            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
        

        <ComboboxOptions>
            {filterCar.map((item)=>
            <ComboboxOption key={item}
                className={({active})=>`
                relative search-manufacturer__option
                ${active ? 'bg-primary-blue text-white':'text-gray-900'
                }
                `}
                value={item}
            >
                  {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
            </ComboboxOption>
            )}
        </ComboboxOptions>
        </Transition>
       </div>         
    </Combobox>
    </div>
  )
}

export default SearchManifacture