import { IAnswers, IQuestion } from 'types/db';

export const convertToDateFormat = (date: Date) => {
  const leftPad = (n: number) => {
    if (n >= 10) return n;
    return `0${n}`;
  };
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());

  return [year, month, day].join('-');
};

export const surveyDefaultTemplate = () => {
  const statements = [
    '친한 사람들과의 약속보다는 혼자 노는 걸 좋아한다.',
    '창의적이기보다는 현실적이다.',
    '감정보다는 팩트를 중요시한다.',
    '계획이 틀어졌을 때, 새로 계획을 새우기 보다는 임기응변으로 대응한다.',
    '어디서든 말이 너무 많다.',
    '쓸데없는 상상을 자주 한다.',
    '고민에 대해 공감해주기 보다는 해결책을 제시한다.',
    '여행계획을 주도적으로 세울 것 같다.',
    '새로운 사람보다는 편하고 잘 아는 사람을 선호한다.',
    '아파트 값보다는 달의 땅 값에 더 관심이 있을 것 같다.',
    '울고있는 사람을 봤을 때, 달래주기보단 울게 된 원인을 찾으려한다.',
    '일을 한꺼번에 몰아서 하는 편이다.',
  ];
  const questions: IQuestion[] = statements.map((value, index) => ({ id: String(index + 1), statement: value }));
  return questions;
};

export const scoreSurvey = (answers: IAnswers) => {
  const scores = { E: 0, N: 0, F: 0, J: 0 };
  const table = { 1: 3, 2: 2, 3: 1, 4: -1, 5: -2, 6: -3 };

  scores['E'] = -table[answers['1']] + table[answers['5']] - table[answers['9']];
  scores['N'] = -table[answers['2']] + table[answers['6']] + table[answers['10']];
  scores['F'] = -table[answers['3']] - table[answers['7']] - table[answers['11']];
  scores['J'] = -table[answers['4']] + table[answers['8']] - table[answers['12']];

  return scores;
};
