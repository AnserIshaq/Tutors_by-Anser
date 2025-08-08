import React from 'react'

const InfoRow = ({ data, labelsClass }) => {
  return (
    <div className="flex flex-col gap-6">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-start sm:gap-x-4"
        >
          <p className={`text-[#181A20] text-lg xl:text-[22px] font-medium ${labelsClass}`}>
            {item.label}
          </p>
          <p className="text-[#B1B1B1] text-lg xl:text-[22px] font-normal lg:whitespace-nowrap">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default InfoRow
