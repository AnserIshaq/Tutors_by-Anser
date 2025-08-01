const Reasons = ({ data, TitleClassName, descClassName }) => {
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className='content flex gap-[10px] pr-[10px] py-[10px]'>
          {item.icon && (
            <div className='icon p-[6px] xl:p-[12px] rounded-[5px] bg-white  h-[60px] w-[60px] flex justify-center items-center'>
              <img src={item.icon} alt='icons' className='h-[36px] w-[36px]' />
            </div>
          )}

          <div className='content-inner'>
            <div className={`title font-semibold text-[#181A20] ${TitleClassName}`}>
              {item.lang && <div className="py-[3px] px-[14px] bg-[#5183F4] rounded-[100px] h-[36px] w-[36px] text-xl font-semibold text-[#FFFFFF] flex justify-center items-center">{idx +1}</div>}
              {item.title}
            </div>
            <div className={`desc font-normal text-[#717171]  ${descClassName}`}>{item.desc}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Reasons
