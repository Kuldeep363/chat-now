"use client"
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const FormCard = (): React.ReactNode => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    message: "Hi!",
  });
  const handleSubmit = (e:any):void=>{
    e.preventDefault();
    if(!!formData.phoneNumber){
      window.open(`https://api.whatsapp.com/send?phone=${formData.phoneNumber}&text=${formData.message}`,'_blank')
    }else{
      toast.warn('Enter phone number', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  return (
    <div className="bg-white rounded-md w-full md:flex-1">
      <form>
        <div className="input-group">
          <input type="tel" value={formData.phoneNumber} onChange={(e)=>setFormData({...formData, phoneNumber:e.target.value})} placeholder="Enter phone number with country code" />
        </div>
        <div className="input-group mt-3">
          <textarea value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} placeholder="Enter message" />
        </div>
        <div className="input-group mt-3">
        <div onClick={handleSubmit} title="Start Chatting Now" className="bg-[#00a884] text-white text-center w-full p-2 rounded-full cursor-pointer">Start Chatting Now</div>
        </div>
        <div className="text-center text-xs mt-2 underline">
          <Link href={"/about"}>About</Link>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
