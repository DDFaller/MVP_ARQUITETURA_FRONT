import React from "react";
import { useEffect,useState,useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import './PagesCSS/LoginForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import './PagesCSS/LoginForm.css'
import { InputField } from "../Components/InputField";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function SignUpForm(){
  
  const userRef = useRef();
  const errRef = useRef();


  const [user,setUser] = useState('');
  const[validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);
  
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);
  const [validMatchPwd, setValidMatchPwd] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() =>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result)
  },[user])

  useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(user);
    setValidPwd(result);
  },[pwd]);

  useEffect(()=>{
    const result = PWD_REGEX.test(matchPwd);
    console.log(result);
    console.log(user);
    setValidMatchPwd(result && (pwd === matchPwd));
  },[matchPwd]);

  useEffect(() => {
    setErrMsg('')
  },[user,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userV = USER_REGEX.test(user);
    const pwdV = PWD_REGEX.test(pwd);

    if (!userV || !pwdV){
      setErrMsg("Invalid Entry")
    }
    console.log(user,pwd)
    setSuccess(true);
  }
  

  
  
  return (
    <div className="wrapper">
    <form onSubmit= {handleSubmit}action ="">
      <h1> Welcome to,</h1>
      <h3> Please Login</h3>
      <InputField
              inputType = "text" 
              inputPlaceholder=" Username"
              onChange={(e) => setUser(e.target.value)}
              validatedAria={()=> { if (validName){return "false"}else{return "true"}}}
              describedAria="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              showTooltip = {() => {if (userFocus && !validName) {return "instructions"} else{return "offscreen"}}}
              icon = {<FaUserAlt className="icon" />}
      >
            Animate this in future
            <FontAwesomeIcon icon={faInfoCircle}/> Username tips:<br/>
            &bull; 4 to 24 characters.<br/>
            &bull; Must begin with a letter.<br/>
            &bull; Letters, numbers, underscores, hyphens allowed.<br/>
      </InputField>
      <InputField
              inputType = "password" 
              inputPlaceholder=" Password"
              onChange={(e) => setPwd(e.target.value)}
              validatedAria={()=> { if (validPwd){return "false"}else{return  "true"}}}
              describedAria="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              showTooltip = {() => {if (pwdFocus && !validPwd) {return "instructions"} else{return "offscreen"}}}
              icon = {<FaLock className="icon" />}
      >
         <FontAwesomeIcon icon={faInfoCircle}/>Password tips:<br/>
            &bull; 8 to 24 characters.<br/>
            &bull; Must include uppercase and lowercase letters, a number and a special character.<br />
            &bull; Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
      </InputField>

      <InputField
            inputType = "password" 
            inputPlaceholder=" Match Password"
            onChange={(e) => setMatchPwd(e.target.value)}
            validatedAria={()=> { if (validPwd){return "false"}else{return  "true"}}}
            describedAria="pwdnote"
            onFocus={() => setMatchPwdFocus(true)}
            onBlur={() => setMatchPwdFocus(false)}
            showTooltip = {() => {if (matchPwdFocus && !validMatchPwd) {return "instructions"} else{return "offscreen"}}}
            icon = {<FaLock className="icon" />}
      
      >
        <FontAwesomeIcon icon={faInfoCircle}/>Password tips:<br/>
            &bull; Match the password.<br/>
            &bull; 8 to 24 characters.<br/>
            &bull; Must include uppercase and lowercase letters, a number and a special character.<br />
            &bull; Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
      
      </InputField>
          
      <button type="submit" disabled = {!validName || !validMatchPwd ? true: false} className={!validName || !validMatchPwd ? "login-button-disabled": "login-button"}>SignUp</button>
    </form>
    </div>
  )
}