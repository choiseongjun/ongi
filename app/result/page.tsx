import React from 'react'

const ResultPage = () => {
  return (
    <div>
        <div className='flex flex-col items-center px-[31px] w-full'>
            <div className='mt-[27px]  text-[18px] font-bold '>결과</div>
            <div className="mt-[30px]">당신의 유형은:</div>
              <div className="mt-[0px] text-[24px] font-bold">균형형 조화자</div>
              <div className='flex justify-center mt-[30px]'>
                <div className='mx-[59px]'>
                  <img src="/img/character.png" alt="캐릭터" className='w-full h-[214px] object-contain' />
                </div>
              </div>
              <div className='flex justify-center items-center mt-[23px] gap-[11px]'>
                <div className='px-[9px] py-[4px] bg-[#D9F7E8] text-[#28B16E] rounded-[8px] text-[16px]'>유연한 대처</div>
                <div className='px-[9px] py-[4px] bg-[#D9F7E8] text-[#28B16E] rounded-[8px] text-[16px]'>다양한 활동</div>
                <div className='px-[9px] py-[4px] bg-[#D9F7E8] text-[#28B16E] rounded-[8px] text-[16px]'>유연한 대처</div>
                <div className='px-[9px] py-[4px] bg-[#D9F7E8] text-[#28B16E] rounded-[8px] text-[16px]'>유연한 대처</div>
              </div>
              <div className='border-[#28B16E] border-[2px] rounded-[8px] w-full h-full mt-[20px] px-[20px] py-[23px]'>
                    <div className='flex items-center  '>
                        <div className='bg-[#28B16E]  px-[10px] py-[7px] text-[#fff] flex justify-center items-center rounded-[8px]'>1</div>
                        <div className='ml-[16px]'>당신은 상황에 따라 유연하게 대처하며,내향과 외향의 균형을 잘 맞춥니다.</div>
                    </div>
                    <div className='border-t border-gray-300 mx-[20px] mt-[16px]'></div>
                        <div className='flex items-center  pt-[23px]'>
                        <div className='bg-[#28B16E]  px-[10px] py-[7px] text-[#fff] flex justify-center items-center rounded-[8px]'>2</div>
                        <div className='ml-[16px]'>당신은 상황에 따라 유연하게 대처하며,내향과 외향의 균형을 잘 맞춥니다.</div>
                    </div>
                    <div className='border-t border-gray-300 mx-[20px] mt-[16px]'></div>
                              <div className='flex items-center  pt-[23px]'>
                        <div className='bg-[#28B16E]  px-[10px] py-[7px] text-[#fff] flex justify-center items-center rounded-[8px]'>3</div>
                        <div className='ml-[16px]'>당신은 상황에 따라 유연하게 대처하며,내향과 외향의 균형을 잘 맞춥니다.</div>
                    </div>
              </div>
              <div className='mt-[20px] w-full'>
                <div className='text-[16px] font-bold mb-[16px]'>결과 요약</div>

                {/* 사교성 그래프 */}
                <div className='mb-[20px]'>
                  <div className='flex justify-between items-center mb-[8px]'>
                    <span className='text-[14px]'>사교성</span>
                    <span className='text-[14px] font-semibold'>89%</span>
                  </div>
                  <div className='w-full h-[8px] bg-[#E2E2E3] rounded-full overflow-hidden'>
                    <div className='h-full bg-[#208E58] rounded-full' style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div className='mb-[20px]'>
                  <div className='flex justify-between items-center mb-[8px]'>
                    <span className='text-[14px]'>사교성</span>
                    <span className='text-[14px] font-semibold'>89%</span>
                  </div>
                  <div className='w-full h-[8px] bg-[#E2E2E3] rounded-full overflow-hidden'>
                    <div className='h-full bg-[#208E58] rounded-full' style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div className='mb-[20px]'>
                  <div className='flex justify-between items-center mb-[8px]'>
                    <span className='text-[14px]'>사교성</span>
                    <span className='text-[14px] font-semibold'>89%</span>
                  </div>
                  <div className='w-full h-[8px] bg-[#E2E2E3] rounded-full overflow-hidden'>
                    <div className='h-full bg-[#208E58] rounded-full' style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div className='mb-[20px]'>
                  <div className='flex justify-between items-center mb-[8px]'>
                    <span className='text-[14px]'>사교성</span>
                    <span className='text-[14px] font-semibold'>89%</span>
                  </div>
                  <div className='w-full h-[8px] bg-[#E2E2E3] rounded-full overflow-hidden'>
                    <div className='h-full bg-[#208E58] rounded-full' style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div className='text-[18px] font-bold mb-[16px]'>당신에게 추천하는 클럽 유형</div>

                {/* 4분면 그리드 */}
                <div className='grid grid-cols-2 rounded-[8px] overflow-hidden'>
                  {/* 1사분면 (좌상) */}
                  <div className='bg-white px-[16px] py-[16px] h-[120px] flex items-center justify-center rounded-[8px]' style={{ borderRight: '2px solid #D9D9D9', borderBottom: '2px solid #D9D9D9' }}>
                    <span className='text-[14px]'>1사분면</span>
                  </div>
                  {/* 2사분면 (우상) */}
                  <div className='bg-white px-[16px] py-[16px] h-[120px] flex items-center justify-center rounded-[8px]' style={{ borderRight: '2px solid #D9D9D9', borderBottom: '2px solid #D9D9D9' }}>
                    <span className='text-[14px]'>2사분면</span>
                  </div>
                  {/* 3사분면 (좌하) */}
                  <div className='bg-white px-[16px] py-[16px] h-[120px] flex items-center justify-center rounded-[8px]' style={{ borderRight: '2px solid #D9D9D9' }}>
                    <span className='text-[14px]'>3사분면</span>
                  </div>
                  {/* 4사분면 (우하) */}
                  <div className='bg-white px-[16px] py-[16px] h-[120px] flex items-center justify-center rounded-[8px]' style={{ borderRight: '2px solid #D9D9D9' }}>
                    <span className='text-[14px]'>4사분면</span>
                  </div>
                </div>
                <div className='mt-[18px] '>비슷한 사람들이 많은 클럽 TOP 3</div>
                <div>
                  <div className='w-full h-[85px] bg-white border-[2px] border-[#28B16E] mt-[12px] rounded-[8px] flex items-center px-[20px] gap-[16px]'>
                      <div className='flex-1'>
                      <div className='text-[16px] font-bold text-black'>주말 러닝 크루</div>
                      <div className='text-[12px] text-gray-600 mt-[4px]'>매주 토요일 오전 * 15명 활동중</div>
                    </div>
                    {/* 원형 그래프 */}
                    <div className='relative w-[60px] h-[60px]'>
                      <svg className='w-full h-full transform -rotate-60' viewBox='0 0 100 100'>
                        {/* 배경 원 (흰색) */}
                        <circle
                          cx='50'
                          cy='50'
                          r='40'
                          fill='none'
                          stroke='#fff'
                          strokeWidth='12'
                        />
                        {/* 진행 원 (초록색 92%) */}
                        <circle
                          cx='50'
                          cy='50'
                          r='40'
                          fill='none'
                          stroke='#28B16E'
                          strokeWidth='12'
                          strokeDasharray={`${2 * Math.PI * 40 * 0.92} ${2 * Math.PI * 40}`}
                          strokeLinecap='round'
                        />
                      </svg>
                      {/* 퍼센트 텍스트 */}
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-[14px] font-bold text-[#28B16E]'>92%</span>
                      </div>
                    </div>
                  
                  </div>


                    <div className='w-full h-[85px] bg-[#FFC2B2]  border-[2px]  border-[#fff] mt-[12px] rounded-[8px] flex items-center px-[20px] gap-[16px]'>
                      <div className='flex-1'>
                      <div className='text-[16px] font-bold text-black'>주말 러닝 크루</div>
                      <div className='text-[12px] text-gray-600 mt-[4px]'>매주 토요일 오전 * 15명 활동중</div>
                    </div>
                    {/* 원형 그래프 */}
                    <div className='relative w-[60px] h-[60px]'>
                      <svg className='w-full h-full transform -rotate-60' viewBox='0 0 100 100'>
                        {/* 배경 원 (흰색) */}
                        <circle
                          cx='50'
                          cy='50'
                          r='40'
                          fill='none'
                          stroke='#fff'
                          strokeWidth='12'
                        />
                        {/* 진행 원 (초록색 92%) */}
                        <circle
                          cx='50'
                          cy='50'
                          r='40'
                          fill='none'
                          stroke='#28B16E'
                          strokeWidth='12'
                          strokeDasharray={`${2 * Math.PI * 40 * 0.92} ${2 * Math.PI * 40}`}
                          strokeLinecap='round'
                        />
                      </svg>
                      {/* 퍼센트 텍스트 */}
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-[14px] font-bold text-[#28B16E]'>92%</span>
                      </div>
                    </div>
                  
                  </div>

                   <div className='w-full h-[85px] bg-[#FFC2B2]  border-[2px]  border-[#fff] mt-[12px] rounded-[8px] flex items-center px-[20px] gap-[16px]'>
                      <div className='flex-1'>
                      <div className='text-[16px] font-bold text-black'>주말 러닝 크루</div>
                      <div className='text-[12px] text-gray-600 mt-[4px]'>매주 토요일 오전 * 15명 활동중</div>
                    </div>
                    {/* 원형 그래프 */}
                    <div className='relative w-[60px] h-[60px]'>
                      <svg className='w-full h-full transform -rotate-60' viewBox='0 0 100 100'>
                        {/* 배경 원 (흰색) */}
                        <circle
                          cx='50'
                          cy='50'
                          r='40'
                          fill='none'
                          stroke='#fff'
                          strokeWidth='12'
                        />
                        {/* 진행 원 (초록색 92%) */}
                        <circle
                          cx='50'
                          cy='50'
                          r='40'
                          fill='none'
                          stroke='#28B16E'
                          strokeWidth='12'
                          strokeDasharray={`${2 * Math.PI * 40 * 0.92} ${2 * Math.PI * 40}`}
                          strokeLinecap='round'
                        />
                      </svg>
                      {/* 퍼센트 텍스트 */}
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-[14px] font-bold text-[#28B16E]'>92%</span>
                      </div>
                    </div>
                  
                  </div>
                </div>


               
                {/* 하단 버튼 */}
                <div className='mx-[38px] mb-[27px] mt-[40px]'>
                   <div className='flex justify-center mb-2'><div className='text-[18px] font-bold'>나랑 비슷한 유형의 사람들은 어디있을까?</div></div>
                  <button className='w-full h-[56px] bg-[#28B16E] text-white rounded-[8px] hover:bg-[#229959] transition-colors duration-300 flex flex-col items-center justify-center'>
                    <div className='font-semibold text-[17px]'>모임 찾아보기</div>
                    <div className='text-[12px] mt-[2px]'>최초 1회 무료</div>
                  </button>
                </div>
              </div>
        </div>

    </div>
  )
}

export default ResultPage