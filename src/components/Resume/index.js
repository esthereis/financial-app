import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa';

const Resume = ({ income, expense, total }) => {
  return (
    <C.container>
      <ResumeItem
        title='Entradas'
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title='Saídas'
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title='Total' Icon={FaDollarSign} value={total} />
    </C.container>
  );
};

export default Resume;
