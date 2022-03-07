import * as Styled from './styles';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
