import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  background-color: var(--color-brand-500);
  color: white;
  cursor: pointer;
  margin: 30px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check in</Button>
        <Input type="text" placeholder="Enter your name" />
      </div>
    </>
  );
}

export default App;
