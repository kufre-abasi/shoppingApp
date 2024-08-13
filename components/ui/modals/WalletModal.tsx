'use client';
import React, { useState, useEffect, useRef } from 'react';
type WalletProps = {
  handleToggleWalletTopUp: () => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
import { useToast } from '~/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mainWalletTopUpSchema } from '~/lib/YupSchema';
import FillButton from '~/components/Button/Button';
import Loading from '~/components/ui/loading';

interface FormData {
  amount: string;
}

const Modal: React.FC<WalletProps> = ({
  handleToggleWalletTopUp,
  onClick
}) => {
  const [activeTab, setActiveTab] = useState('News');
  const modalRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues
  } = useForm<FormData>({
    resolver: yupResolver(mainWalletTopUpSchema),
    mode: 'all'
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleToggleWalletTopUp();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={modalRef}
      className="modal  z-[100] top-0 left-0 flex items-center w-full justify-center overflow-auto backdrop-blur bg-[#0000002f] dark:bg-[#ffffff2f] fixed animate__zoomIn animate__rubberBand animate__fadeOut min-h-screen h-full"
    >
      <div className=" feed_container overflow-auto w-full h-full flex justify-center items-center  m-0 lg:p-[50px_40px] p-4 ">
        <div className=' overflow-auto flex flex-col gap-3 w-full  border-[1px]  backdrop-blur dark:border-[rgba(255,255,255,0.13)] dark:shadow-lg border-[#0000001C]  top-24 md:max-w-[600px] rounded-[12px] dark:bg-[#000000] bg-white m-0 lg:p-[30px] p-4 md:max-w-2/12"'>
          <div className="flex justify-end items-end flex-row">
            <button
              className="bg-[#9FD70230] rounded-[14px] text-[14px] font-normal leading-[20.3px] p-[8px]"
              onClick={handleToggleWalletTopUp}
            >
              Close
            </button>
          </div>
          <div className="flex justify-between items-center flex-row">
            <h3 className="text-[#4C4C4C]  dark:text-white !font-semibold font-gooper text-[15.17px] lg:text-[24px] leading-[23.2px]">
              Top up{' '}
            </h3>
          </div>{' '}
          <form
            className="flex flex-col gap-4"
          >
            <div className="">
              <label htmlFor={'Amount'}>
                {'Amount'}
                <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <label
                  htmlFor={'Amount'}
                  className="absolute top-1 left-2 text-[30px] !font-semibold font-gooper"
                >
                  ₦
                </label>
                <input
                  id={'Amount'}
                  {...register('amount')}
                  type={'number'}
                  className="w-full rounded-lg border-gray-200 pl-10 bg-white text-[30px] !font-semibold font-gooper  dark:bg-[#000000] border border-[#D0D5DD75] outline-none px-4 placeholder:text-sm"
                  autoComplete="none"
                  placeholder={'Enter amount'}
                />
                {/* {errors.email && (
                  <p className="error text-red-600">{errors.email.message}</p>
                )} */}
              </div>
            </div>
            <FillButton
              // onClick={ !isValid ?undefined : Submit  }
              disabled={!isValid}
              style={`text-sm  w-full border-bg-[#000000] border border-[#D0D5DD75]  py-[16px] px-[27px] font-[450] rounded-[6px] ${
                !isValid
                  ? 'bg-[#DCDCDC] text-[#717171]'
                  : 'bg-black dark:bg-[#000000] text-[#71E214]'
              }`}
            >
              {loading ? <Loading /> : 'Top Up'}
            </FillButton>
          </form>
          <div>
            {/* <button className=" dark:bg-white bg-[rgba(41,45,50,1)] w-full text-[#9FD702]  dark:text-[rgba(102,113,133,1)] text-base font-medium font-general_Sans dark:text-white py-2 px-[9px] rounded-lg border border-[#0000001C]  dark:border-[rgba(255,255,255,0.13)] dark:shadow-lg  dark:bg-[rgba(41,45,50,1)] ">
              Top Up
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
