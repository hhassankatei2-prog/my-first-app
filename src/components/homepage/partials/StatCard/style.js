import styled from "styled-components";

export const DivStyle = styled.div`
  .stat-card {
    border-radius: 14px;
    ///////////////////////
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    /* مشان تغبيش الغلفية من دون المحتوى */
    backdrop-filter: blur(8px);
    /* مشان المتصفحات القديمة  لان ما بيشتغل لكود لاول علين  */
    -webkit-backdrop-filter: blur(8px);
    padding: 24px;
    text-align: center;
    h3 {
      font-size: 2rem;
      font-weight: 800;
      color: #49d950;
      margin: 0;
    }
    p {
      margin: 0;
      color: oklch(87.2% 0.01 258.338);
    }
  }
`;
