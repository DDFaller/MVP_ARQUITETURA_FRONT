import React, { forwardRef } from "react";
import { useEffect,useState,useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { InputTooltip } from "./InputTooltip.js";
import './ComponentsCSS/inputField.css'

export const InputField = forwardRef(({inputType,inputPlaceholder,onChange,validatedAria,describedAria,onFocus,onBlur,icon,showTooltip,children},ref) =>{
  return (
    <div className="input-field">
    <div className="input-box">
      <input 
        type = {inputType} 
        placeholder= {inputPlaceholder}
        onChange={onChange}
        required
        aria-invalid={validatedAria}
        aria-describedby={describedAria}
        onFocus={onFocus}
        onBlur={onBlur}
        ></input>
      {icon}
    </div>
    { showTooltip ? <InputTooltip id= {describedAria} showTooltip={() => {return showTooltip()}}>{children}</InputTooltip> : <></> }
    </div>
  );
});