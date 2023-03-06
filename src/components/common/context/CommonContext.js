import { createContext, useState } from 'react';

/**
 * @description : 컴포넌트 전역에서 쓰이는 전역값 관리하는 context
 */
const CommonContext = createContext({
  state: { isPopupShown: false, isPreparing: false },
  actions: {
    setIsPopupShown: () => {},
    setIsPreparing: () => {},
  },
});

const CommonProvider = ({ children }) => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);

  const value = {
    state: { isPopupShown, isPreparing },
    actions: { setIsPopupShown, setIsPreparing },
  };

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
};
// const CommonConsumer = CommonContext.Consumer 와 같은 의미임.
const { Consumer: CommonConsumer } = CommonContext;

export { CommonProvider, CommonConsumer };

export default CommonContext;
