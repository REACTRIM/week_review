import dayjs from "dayjs";
import styled from "styled-components";

export default function DateBox() {
  const now = new Date();
  return (
    <Wrapper>
      <h3>오늘은 📆</h3>
      <DateTime>{dayjs(now.getTime()).format("ddd MMM DD YYYY")}</DateTime>
    </Wrapper>
  );
}

const DateTime = styled.div`
  color: #2593ff;
  font-weight: 800;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;
