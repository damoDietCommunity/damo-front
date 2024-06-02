// 상태를 로컬 스토리지에 저장하고 로드
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };

  export const saveState = (state) => {
    try {
      if (!state.auth.isAuthenticated) {
        // 사용자가 인증되지 않은 경우 로컬 스토리지에서 상태를 제거
        localStorage.removeItem('state');
      } else {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
      }
    } catch (error) {
      console.error(`saveState error: ${error}`);
    }
  };