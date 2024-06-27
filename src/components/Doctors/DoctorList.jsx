import React from 'react'
import {doctors} from './../../assets/data/doctors'
import DoctorCard from './DoctorCard'
import UseFetchData from '../../hooks/UseFetchData'
import { BASE_URL } from '../../config'
import Loading from '../loadernerror/Loading'
import Error from '../loadernerror/Error'

const DoctorList = () => {

  const {data:doctors,loading,error} = UseFetchData(`${BASE_URL}/doctors`)
  return (
    <>
    {loading && <Loading/>}
    {error && <Error/>}

    {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map(doctor => (
           <DoctorCard key={doctor._id} doctor={doctor}/>
           ))}
    </div>}
    </>
  )
}

export default DoctorList
