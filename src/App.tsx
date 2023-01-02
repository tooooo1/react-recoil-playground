import React from 'react';
import { atom, useRecoilState } from 'recoil';

const devState = atom({
  key: 'devState',
  default: '',
});

const App = () => {
  const [dev, setDev] = useRecoilState(devState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDev(event.target.value);
  };

  return (
    <>
      <input type="text" value={dev} onChange={onChange} />
      <br /> {dev}
    </>
  );
};

export default App;
