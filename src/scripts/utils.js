const addLeadingZero = (number) =>
  number < 10 ? String(number).padStart(2, '0') : String(number);

export default addLeadingZero;
