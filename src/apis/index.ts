import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IAnswers } from 'types/db';

export const getSurvey = (context: QueryFunctionContext) =>
  axios.get(`api/surveys/${context.queryKey[1]}`, { withCredentials: true }).then((response) => response.data);

export const postAnswer = (surveyId: string, data: IAnswers) =>
  axios.post(`http://127.0.0.1:8000/surveys/${surveyId}/answersheet/`, data, { withCredentials: true });
