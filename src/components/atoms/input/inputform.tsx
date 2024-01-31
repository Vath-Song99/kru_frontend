import React from "react";

interface inputType {
  className?: string
  width:  "sm" | "md"  | "lg" | "xl";
  height:  "sm" | "md"  | "lg" | "xl";
  placholder?: string;
  schemesColor?:string;
  labelFor?:string
  childrenLabel?:React.ReactNode
}

const InputForm:React.FC <inputType> = (
  {className,
    width,
    height,
    placholder,
    schemesColor,
    labelFor,
    childrenLabel
  }) => {
  const checkoutWidth = (widthParam:string) =>{
    let getWidth = ""
    switch (widthParam) {
      case "sm": {
        getWidth = "332px"
        break
      }
      case "md": {
        getWidth = "360px"
        break
      }
      case "lg": {
        getWidth = "420px"
        break
      }
      case "xl":{
        getWidth = "564px"
        break
      }
  }
  return getWidth
}
  const checkoutHeigth = (heightParam:string) =>{
    let getHeight = ""
    switch (heightParam) {
      case "sm": {
        getHeight = "40px"
        break
      }
      case "md": {
        getHeight = "44px"
        break
      }
      case "lg": {
        getHeight = "50px"
        break
      }
      case "xl":{
        getHeight = "60px"
        break
      }
  }
  return getHeight
}

  return (
     <input type="text"  placeholder={`${placholder}`} className={`  w-[${checkoutWidth(width)}] h-[${checkoutHeigth(height)}] ${className}`} />
  )
}

export  {InputForm}