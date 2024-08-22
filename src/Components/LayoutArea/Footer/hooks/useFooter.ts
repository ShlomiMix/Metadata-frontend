export const useFooter = () => {
  const getCurrentYear = (): number => {
    const date = new Date();
    return date.getFullYear();
  };

  return {
    getCurrentYear,
  };
};
