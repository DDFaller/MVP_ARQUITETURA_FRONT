import { forwardRef } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const InputTooltip = ({id,showTooltip,children})=>{
  return (
    <div className="input-box-tooltip">
      <p id={id} className={showTooltip()}>
            {children}
      </p>
    </div>
  )
}