// import styles from './Card.module.css';
import styled from 'styled-components';

const CardContainer = styled.div.attrs({
  className: 'card-container',
})`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${props =>
    props.$dark &&
    `
    background-color: black;
    color: white;
    border: none;
    `}
`;

function Card() {
  return (
    // <div className={styles['card-container']}>
    /* styles: 특수문자가 있으므로 대괄호로 접근 */
    <CardContainer $dark>
      <h2>Styled Component</h2>
      <p>이것은 styled-components로 만든 카드입니다.</p>
    </CardContainer>
  );
}

export default Card;
