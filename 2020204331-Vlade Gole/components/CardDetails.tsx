import { CarProp } from '@/type'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import  { Fragment } from 'react'
import Image from 'next/image';

interface CarDetailsProp{
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProp;
}

const CardDetails = ({isOpen,closeModal,car}:CarDetailsProp) => {

    

  return (
    <div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10"
                onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>

                </TransitionChild>
                <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center ">
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <DialogPanel className="relative bg-white h-30 w-full rounded-2xl max-w-lg 
                    flex flex-col">
                        <button type="button"  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full' onClick={closeModal}>
                        <Image src="/close.svg" width={20} height={20} alt="close" className="object-contain"/>
                        </button>
                        <div className="flex flex-col">
                          <div className="relative w-full h-40 bg-pattern bg-cover
                           bg-center
                           rounded-lg">
                            <Image src="/getImage.webp" fill alt="getImage.webp" className="object-contain"></Image>
                          </div>
                          <div className="relative flex w-full  h-30 pl-4">
                            <h2 className="font-bold capitalize">{car.make} {car.model}</h2>
                          </div>
                          <div className="relative flex flex-col  w-full">
                                {Object.entries(car).map(([key,value])=>(
                                    <div className="flex  justify-between items-center px-2" key={key}>
                                        <h2 className="flex capitalize">{key}</h2>
                                        <p className="">{value}</p>
                                    </div>
                                ))}
                          </div>
                        </div>
                    </DialogPanel>

                </TransitionChild>
                </div>
                </div>
            </Dialog>
        </Transition>
    </div>
  )
}

export default CardDetails