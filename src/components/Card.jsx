import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Cards = () => {
  const [cal, setCal] = useState('');
  const [cal1, setCal1] = useState('');
  const [opera, setOpera] = useState('');
  const oper = ["+", "-", "*", "/",];
  const [ans,setAns] = useState('')

  const handleOpera = () => {
    switch (opera) {
      case "+":
       setAns(Number(cal)+Number(cal1));
        break; 
        case "-":
          setAns(Number(cal)-Number(cal1));     
        break; 
        case "/":
          setAns(Number(cal)/Number(cal1)); 
        break; 
        case "*":
          setAns(Number(cal)*Number(cal1));
        break; 
    
      default:
        setAns(Number(cal)+Number(cal1));
        break;
    }
  }

  return (
    <> 
    <div>
      <h1 className='p-10 bg-[#f0f0f0f0] text-center text-3xl text-black'>Calculator</h1>
    <div className='container mx-auto'>
    <Card className="mt-10 w-96 mx-auto">
    <CardHeader color="blue-gray" className="relative h-24 flex items-center justify-center">
     <div>
      {cal} {opera} {cal1} {
        ans && <>= {ans}</>
      }
     </div>
    </CardHeader>
    <CardBody>
     <div className='space-x-2 space-y-2'>
      <div></div>
     {Array(10).fill(1).map((item,index) => (
      <React.Fragment key={index}>
      <Button onClick={() => {
        if(opera) return setCal1(cal1.concat(String(index)));
       setCal(cal.concat(String(index)))}}>{index}</Button>
      </React.Fragment>
     ))}
     </div>
    </CardBody>
    <CardFooter className="pt-0">
    <div className='space-x-2 space-y-2'>
      <div></div>
     {oper.map((item,index) => (
      <React.Fragment key={index}>
      <Button onClick={() => setOpera(item)}>{item}</Button>
      </React.Fragment>
     ))}
     </div>
      <Button className='mt-10' onClick={()=>handleOpera()}>Calculate</Button>
    </CardFooter>
  </Card>
    </div>
    </div>
  </>
  )
}

export default Cards