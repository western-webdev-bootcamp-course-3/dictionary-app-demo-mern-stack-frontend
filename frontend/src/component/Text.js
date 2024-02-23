import styled from "styled-components";

const HeadingLarge = styled.div`
  font-size: 64px;
  line-height: 77px;
  display: inline;
  font-weight: bold;
`;

const HeadingMedium = styled.div`
  font-style: italic;
  font-size: 24px;
  line-height: 29px;
  display: inline;
`;

const HeadingSmall = styled.div`
  font-size: 20px;
  line-height: 24px;
`;

const BodyMedium = styled.div`
  font-size: 18px;
  line-height: 24px;
`;

const BodySmall = styled.div`
  font-size: 14px;
  line-height: 17px;
  border-bottom-width: 1px;
`;

export { HeadingLarge, HeadingMedium, HeadingSmall, BodyMedium, BodySmall };
