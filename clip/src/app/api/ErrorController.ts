const ErrorController = (status: number) => {
  if (status === 401) {
    alert('토큰 에러');
  } else if (status === 400) {
    alert('요청 에러');
  }

  return;
};

export default ErrorController;
