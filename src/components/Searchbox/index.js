import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { navigate } from "./../../lib/History";

const Container = styled.div``;

const Form = styled.form`
  background: #fff;
  border-radius: 9px;
  width: 100%;
  display: flex;
  position: relative;
`;

const Label = styled.label`
  height: 54px;
  padding-left: 40px;
  display: block;
  width: 100%;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 4px;
  border: 0;
  background: none;
  color: #333;
  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  background: none;
  align-items: center;
  border: 0;
  font-size: 20px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding-left: 10px;
  &:focus {
    outline: 0;
  }
`;

const SeachBox = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/photos/${value}`);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Label>
          <Input
            type="text"
            onChange={onChange}
            placeholder={"search..."}
            value={value}
          />
        </Label>
        <Button>
          <BiSearch />
        </Button>
      </Form>
    </Container>
  );
};

export default SeachBox;
