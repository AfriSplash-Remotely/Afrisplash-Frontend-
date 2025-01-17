/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{SetStateAction, useEffect, useState} from 'react'
import Modal from '@/components/modal/Modal'
import { CancelIcon } from '@/assets';
import { DateInput, Input } from '@/components/Input';
import { fieldsOfStudy } from '@/utils';
import { Button, OutlineBtn } from '@/components/button';
import PrimarySelect from './primary-selects';

interface modalcompProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onClick:  () => void;
    loading: boolean;
    setData: React.Dispatch<SetStateAction<object[]>>;
}

const AddEducationModal: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading }) => {
    const [name, setName] = useState<string>("");
    const [degreeType, setDegreeType] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [field, setField] = useState<any>({});
    const fieldsOfStudyList = fieldsOfStudy.map(field => ({
        name: field.toLowerCase().replace(/\s+/g, "_"),
        label: field,
    }));

    useEffect(() => {
        const bodyData = [
            {
                "institution_name": name,
                "degree": degreeType,
                "field_of_study": field?.name,
                "date_start": startDate,
                "date_end": endDate,
                "description": desc
            }
        ];

        setData(bodyData);

    }, [name, degreeType, startDate, endDate, desc, field, setData])
    
  return (
    <div className='relative'>
          <Modal open={open} setOpen={setOpen} >
              <div className="w-full flex flex-col ">
                  <div className="flex justify-end">
                      <span onClick={() => setOpen(false)}>
                          <CancelIcon />
                      </span>
                  </div>
                  <div className="lg:w-10/12 w-full mx-auto mt-4 flex flex-col">
                      <h1 className='text-black text-2xl lg:text-4xl font-bold'>
                          Add Educational Qualification
                      </h1>

                      <div className="w-full mt-8 ">
                          <Input label={'Institution name'} value={name} setValue={setName}  />
                      </div>
                      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 mt-4">
                          <div>
                              
                          <Input label={'Degree type'} value={degreeType} setValue={setDegreeType} />
                          </div>
                          <div className='w-full flex flex-col'>
                              <label className="text-sm  lg:text-base text-grey_3 font-semibold  mb-2">
                                  Field of Study 
                              </label>
                           <PrimarySelect data={fieldsOfStudyList} selected={field} setSelected={setField} label={''} />
                          </div>
                          <div className='flex flex-col'>
                              <label className="text-sm  lg:text-base text-grey_3 font-semibold  mb-2">
                                  Start Date
                              </label>
                              <DateInput date={startDate} setDate={setStartDate}  />
                          </div>
                          <div className='flex flex-col'>
                              <label className="text-sm  lg:text-base text-grey_3 font-semibold  mb-2">
                                  End Date
                              </label>
                              <DateInput date={endDate} setDate={setEndDate}  />
                          </div>
                      </div>
                      <div className="w-full mt-4 flex flex-col">
                          <label className="text-sm  lg:text-base text-grey_3 font-semibold  mb-2">
                              Description
                          </label>
                          <textarea className='h-[120px] p-4 border border-grey rounded-[10px]  ' onChange={(e) => setDesc(e.target.value) } value={desc}  /> 

                      </div>

                      <div className="w-full flex flex-col md:justify-center gap-4 items-center lg:items-center md:flex-row mt-12">
                          <span>
                              <OutlineBtn name='Cancel' onClick={() => setOpen(false)} />
                          </span>
                          <Button name={'Update'} loading={loading} onClick={onClick} disabled={loading} />
                      </div>
                      
                  </div>

              </div>
      </Modal>
    </div>
  )
}

export default AddEducationModal
