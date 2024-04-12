const phoneNumberFormatter = (value: string) => {
  const inputPhoneNumber = value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
  let formattedPhoneNumber = '';

  if (inputPhoneNumber.length < 4) {
    formattedPhoneNumber = inputPhoneNumber;
  } else if (inputPhoneNumber.length < 7) {
    formattedPhoneNumber = `${inputPhoneNumber.slice(
      0,
      3
    )}-${inputPhoneNumber.slice(3)}`;
  } else if (inputPhoneNumber.length < 11) {
    formattedPhoneNumber = `${inputPhoneNumber.slice(
      0,
      3
    )}-${inputPhoneNumber.slice(3, 6)}-${inputPhoneNumber.slice(6)}`;
  } else {
    formattedPhoneNumber = `${inputPhoneNumber.slice(
      0,
      3
    )}-${inputPhoneNumber.slice(3, 7)}-${inputPhoneNumber.slice(7, 11)}`;
  }
  return formattedPhoneNumber;
};

export default phoneNumberFormatter;
