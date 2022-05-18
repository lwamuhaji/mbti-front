import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export const getSurvey = (context: QueryFunctionContext) =>
  axios.get(`/api/surveys/${context.queryKey[1]}`, { withCredentials: true }).then((response) => response.data);
