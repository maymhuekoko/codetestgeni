import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import axios from "axios"
import { useSelector } from 'react-redux';

const cardsData = [
    {
      id: 1,
      name: 'acne (ဝက်ခြံ)',
      gender: 'male',
      status: 'Approved',
    },
    {
        id: 2,
        name: 'Testing',
        gender: 'male',
        status: 'Approved',
      },
    // ... more cards
  ];

const Symptom = () => {

    const token =  useSelector(state=>state.user.user.token.accessToken);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(()=> {
        console.log(token)
        const getSynptoms = async () =>{
          try{
            const res = await axios.get('https://cms.ourcarediary.com/api/symptoms',config);
            console.log(res)
            
          }catch(err){}
        };
        getSynptoms();
      },[]);
    const variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1.2 },
    };
  return (

    <div className='lg:fixed pt-7 inset-0 dark:bg-primary bg-white -z-10 flex justify-center items-center'>
      <div className=' flex flex-col lg:flex-row space-y-12 lg:space-y-0 space-x-0 lg:space-x-20 dark:text-white text-primary max-w-screen-lg mx-auto items-center  shadow-lg '>
      {cardsData.map((card) => (
        <motion.div 
         className='dark:bg-secondary bg-gray-300 rounded p-6 space-y-6 w-60 md:w-80 flex flex-col hover:scale-105'
         variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
        >
          <h1 className=' dark:text-white text-primary font-bold text-center text-xl'>Name : {card.name}</h1>
          <h1 className=' dark:text-white text-primary font-bold text-center text-xl'>Gender : {card.gender}</h1>
          <h1 className=' dark:text-white text-primary font-bold text-center text-xl'>Status : {card.status}</h1>
        </motion.div>
        ))}
      </div>
   </div>
  )
}

export default Symptom