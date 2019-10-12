import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonsRequest } from '../store/actions';

export default function Index() {
  let dispatch = useDispatch();
  const persons = useSelector(state => state.PersonReducer.persons);
  useEffect(() => {
    dispatch(fetchPersonsRequest());
  }, [dispatch]);

  return (
    <MainStyle>
      <div>
        <p>hello Guys</p>
        {persons.map(item => (
          <p key={Math.random()}>{item.name}</p>
        ))}
      </div>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  display: flex;
  flex: 1 1;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
