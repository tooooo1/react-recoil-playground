import { atom, selector, useRecoilValue } from 'recoil';

const devState = atom({
  key: 'devState',
  default: 'dev',
});

const helloDev = selector({
  key: 'courseState',
  get: ({ get }) => {
    const text = get(devState);

    return `Hello ${text}`;
  },
});

const App = () => {
  const dev = useRecoilValue(helloDev);

  return <>{dev}</>;
};

export default App;
