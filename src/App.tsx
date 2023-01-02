import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

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

  set: ({ set }, newDev) => {
    set(devState, newDev);
  },
});

const App = () => {
  const dev = useRecoilValue(helloDev);
  const setNewDev = useSetRecoilState(helloDev);

  return (
    <>
      {dev}
      <button onClick={() => setNewDev('newDev')}>selector set</button>
    </>
  );
};

export default App;
