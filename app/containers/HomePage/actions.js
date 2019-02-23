import { CHANGE_NAME } from './constants';

export const handleChangeName = text => ({
  type: CHANGE_NAME,
  text,
});
