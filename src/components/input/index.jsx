import React from 'react'

const Input = ({value, onChange,extraClassName="",type="text",placeholder="Enter a string"}) => {
  return (
    <div>
           <input
              value={value}
              onChange={onChange}
              type={type}
              placeholder={placeholder}
              className={"font-medium text-white bg-[#1c1c1e] rounded-[0.4vw] border-none outline-none transition-shadow duration-400 p-[0.4vw] w-[500px] shadow-[0_0_0.4vw_rgba(0,0,0,0.5),_0_0_0_0.15vw_transparent] hover:shadow-[0_0_0_0.15vw_rgba(135,207,235,0.186)]  focus:shadow-[0_0_0_0.15vw_#1963fd] "+extraClassName}
            />
    </div>
  )
}

export default Input
