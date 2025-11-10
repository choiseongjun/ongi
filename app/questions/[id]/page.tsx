'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Question {
  id: number;
  title: string;
  question: string;
  options: {
    id: string;
    label: string;
    description: string;
  }[];
}

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();
  const currentId = parseInt(params.id as string);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // API에서 질문 리스트 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // TODO: 실제 API 엔드포인트로 교체
        // const response = await fetch('/api/questions');
        // const data = await response.json();

        // 임시 더미 데이터
        const dummyQuestions: Question[] = [
          {
            id: 1,
            title: 'Q1. 활동 패턴',
            question: '평소 당신의 활동 스타일은 어떤가요?',
            options: [
              {
                id: 'active',
                label: '활동적인 스타일',
                description: '야외 활동이나 운동을 즐겨요',
              },
              {
                id: 'calm',
                label: '차분한 스타일',
                description: '실내에서 편안하게 쉬는 걸 좋아해요',
              },
            ],
          },
          {
            id: 2,
            title: 'Q2. 소통 방식',
            question: '대화할 때 어떤 스타일인가요?',
            options: [
              {
                id: 'talkative',
                label: '말이 많은 편',
                description: '이야기하는 걸 좋아하고 분위기를 주도해요',
              },
              {
                id: 'listener',
                label: '경청하는 편',
                description: '상대방 이야기를 들어주는 걸 좋아해요',
              },
            ],
          },
          {
            id: 3,
            title: 'Q3. 계획성',
            question: '약속을 잡을 때 당신은?',
            options: [
              {
                id: 'planner',
                label: '계획적',
                description: '미리미리 계획을 세우는 편이에요',
              },
              {
                id: 'spontaneous',
                label: '즉흥적',
                description: '그때그때 상황에 맞춰 행동해요',
              },
            ],
          },
        ];

        setQuestions(dummyQuestions);
        const current = dummyQuestions.find((q) => q.id === currentId);
        setCurrentQuestion(current || null);
        setLoading(false);
      } catch (error) {
        console.error('질문을 불러오는데 실패했습니다:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [currentId]);

  // 이전 답변 복원
  useEffect(() => {
    if (answers[currentId]) {
      setSelectedOption(answers[currentId]);
    } else {
      setSelectedOption(null);
    }
  }, [currentId, answers]);

  const handleNext = () => {
    if (selectedOption && currentQuestion) {
      // 답변 저장
      setAnswers((prev) => ({
        ...prev,
        [currentId]: selectedOption,
      }));

      // 다음 질문으로 이동
      if (currentId < questions.length) {
        router.push(`/questions/${currentId + 1}`);
      } else {
        // 마지막 질문이면 결과 페이지로
        console.log('모든 답변:', { ...answers, [currentId]: selectedOption });
        router.push('/result');
      }
    }
  };

  const handleBack = () => {
    if (currentId > 1) {
      router.push(`/questions/${currentId - 1}`);
    } else {
      router.push('/');
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-gray-600">로딩 중...</div>
      </main>
    );
  }

  if (!currentQuestion) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-gray-600">질문을 찾을 수 없습니다.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Progress Header */}
      <div className="flex justify-end pt-[22px] pr-[50px]">
        <span className="text-gray-500 font-medium">
          {currentId}/{questions.length}
        </span>
      </div>

      {/* Question Content */}
      <div className="mt-[84px] ml-[41px]">
        <div className=''>
          <div className="flex items-center">
            <div className='text-[42px] font-semibold text-[#000]'>Q1.</div>
            <div className='ml-[9px] px-[9px] py-[5px] bg-[#D9F7E8] rounded-[16px] text-[15px] text-[#28B16E] whitespace-nowrap'>활동 패턴</div>
          </div>
        </div>
        <div className='mt-[13px] text-[20px] font-medium whitespace-pre-line'>{'금요일 저녁,\n친구가 갑자기 밖으로 불러낸다!\n이때 당신의 반응은?'}</div>
      </div>

      <div
        onClick={() => setSelectedOption('option1')}
        className={`mt-[70px] mx-[32px] h-[63px] border-[#28B16E] border-[2px] rounded-[8px] cursor-pointer transition-all duration-300 ${
          selectedOption === 'option1'
            ? 'bg-[#208E58] border-[#208E58]'
            : 'bg-white'
        }`}
      >
        <div className={`flex justify-center items-center h-full text-[17px] font-bold ${
          selectedOption === 'option1' ? 'text-white' : 'text-black'
        }`}>
          귀찮은데... 가지 않는다
        </div>
      </div>

      <div
        onClick={() => setSelectedOption('option2')}
        className={`mt-[15px] mx-[32px] h-[63px] border-[#28B16E] border-[2px] rounded-[8px] cursor-pointer transition-all duration-300 ${
          selectedOption === 'option2'
            ? 'bg-[#208E58] border-[#208E58]'
            : 'bg-white'
        }`}
      >
        <div className={`flex justify-center items-center h-full text-[17px] font-bold ${
          selectedOption === 'option2' ? 'text-white' : 'text-black'
        }`}>
          내가 빠질 수 없지,당연히 나간다!
        </div>
      </div>
      {/* Navigation Buttons - Fixed at bottom */}
      <div className="absolute bottom-[27px] left-[32px] right-[32px]">
        {currentId > 1 ? (
          // 이전/다음 버튼 (2번 문항 이상)
          <div className="flex gap-[9px]">
            <button
              onClick={handleBack}
              className="w-[68px] h-[56px] rounded-[8px] font-semibold text-[17px] bg-white border-[2px] border-[#28B16E] text-[#28B16E] hover:bg-gray-50 transition-all duration-300"
            >
              이전
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`
                flex-1 h-[56px] rounded-[8px] font-semibold text-[17px]
                transition-all duration-300 transform
                ${
                  selectedOption
                    ? 'bg-[#28B16E] text-white hover:bg-[#229959] active:scale-[0.98] shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              {currentId === questions.length ? '결과보기' : '다음'}
            </button>
          </div>
        ) : (
          // 다음 버튼만 (1번 문항)
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`
              w-full h-[56px] rounded-[8px] font-semibold text-[17px]
              transition-all duration-300 transform
              ${
                selectedOption
                  ? 'bg-[#28B16E] text-white hover:bg-[#229959] active:scale-[0.98] shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {currentId === questions.length ? '결과보기' : '다음'}
          </button>
        )}
      </div>
    </main>
  );
}
