import {
  atom,
  selector,
  selectorFamily,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

const devState = atom({
  key: 'devState',
  default: 'dev',
  dangerouslyAllowMutability: true,
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

const helloDevFamily = selectorFamily({
  key: 'courseFamilyState',
  get:
    (str: string) =>
    ({ get }) => {
      const text = get(devState);

      return `Hello ${text} ${str}`;
    },

  set:
    (str: string) =>
    ({ set }, newDev) => {
      set(devState, `${newDev} ${str}`);
    },
});

const App = () => {
  const dev = useRecoilValue(helloDev);
  const setNewDev = useSetRecoilState(helloDev);
  const NewDevFamily = useRecoilValue(helloDevFamily('tooo1'));

  return (
    <>
      {dev}
      <br />
      {NewDevFamily}
      <br />
      <button onClick={() => setNewDev('newDev')}>selector set</button>
    </>
  );
};

export default App;
