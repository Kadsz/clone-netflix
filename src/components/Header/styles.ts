import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/images/home/banner.jpg");
  background-size: cover;
  background-position: center top 60%;
  background-repeat: no-repeat;
  height: 80vh;
  border-bottom: 8px solid #222;
`;

export const Navbar = styled.div`
  height: 4rem;

  padding-top: 20px;

  margin: 0 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    width: 9.375rem;
    height: 3.25rem;

    fill: #e50914;
    line-height: normal;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  button {
    background-color: #e50914;
    border-radius: 3px;

    color: #fff;
    line-height: normal;

    padding: 7px 17px;

    font-weight: 400;
    font-size: 1rem;
  }
`;

export const SelectContainer = styled.div`
  position: relative;

  margin-right: 2rem;

  select {
    padding: 0.5rem 0.9rem 0.5rem 1.375rem;

    line-height: 1.3em;
    white-space: nowrap;

    background-color: transparent;
    border: 1px solid #aaa;

    color: #fff;

    font-size: 0.875rem;

    outline: none;

    option {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  &::before {
    content: "🌐";
    position: absolute;
    pointer-events: none;

    font-size: 0.75rem;

    transform: translateY(-50%);

    top: 50%;
    left: 0.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 130px auto;
  text-align: center;
  color: #fff;

  h1 {
    max-width: 640px;
    margin: 0 auto;

    font-size: 60px;
  }

  h2 {
    font-weight: 400;
    font-size: 1.625rem;
    margin: 1rem auto;
  }

  p {
    margin-top: 2rem;
    padding-bottom: 20px;
    font-size: 1.2rem;
  }

  span {
    max-width: 710px;
    margin: 10px auto;
    text-align: left;
    display: block;
    color: #e79608;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;

  input {
    width: 550px;
    height: 70px;

    padding: 0 10px;
    font-size: 16px;

    outline: none;
  }

  button {
    background-color: #e50914;
    border-radius: 3px;

    color: #fff;

    padding: 7px 26px;

    font-size: 1.625rem;

    filter: brightness(0.9);

    :hover {
      filter: brightness(1);
    }
  }
`;
