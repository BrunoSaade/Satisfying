import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  column: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2B1D62',
    maxWidth: 180,
    borderRadius: 10,
    paddingVertical: 30
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 23
  },
});

export const svgModificar = `<svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9151 100C9.30709 100 6.25256 98.7292 3.75154 96.1875C1.25051 93.6458 0 90.5417 0 86.875V70H14.7601V0H88.5609V48.25C87.2489 48.25 85.9779 48.5 84.7478 49C83.5178 49.5 82.3288 50.2083 81.1808 51.125V7.5H22.1402V70H62.4846L55.1046 77.5H7.38007V86.875C7.38007 88.4583 7.91308 89.7917 8.97909 90.875C10.0451 91.9583 11.3161 92.5 12.7921 92.5H49.2005V100H12.9151ZM56.5806 100V86.625L78.2288 64.625L81.6728 68.125L61.5006 88.625V95H67.7737L87.9459 74.5L91.3899 78L69.7417 100H56.5806ZM91.3899 78L78.2288 64.625L85.7319 57C86.4699 56.25 87.3309 55.875 88.3149 55.875C89.2989 55.875 90.1599 56.25 90.8979 57L98.893 65.125C99.631 65.875 100 66.75 100 67.75C100 68.75 99.631 69.625 98.893 70.375L91.3899 78ZM29.5203 30V22.5H73.8007V30H29.5203ZM29.5203 45V37.5H73.8007V45H29.5203Z" fill="#F9F9F9"/></svg>`

export const svgColetarDados = `<svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.25 62.125L79.75 33.625L74.5 28.5L51.375 51.75L39.25 39.625L34 44.875L51.25 62.125ZM22.5 85C20.5 85 18.75 84.25 17.25 82.75C15.75 81.25 15 79.5 15 77.5V7.5C15 5.5 15.75 3.75 17.25 2.25C18.75 0.75 20.5 0 22.5 0H92.5C94.5 0 96.25 0.75 97.75 2.25C99.25 3.75 100 5.5 100 7.5V77.5C100 79.5 99.25 81.25 97.75 82.75C96.25 84.25 94.5 85 92.5 85H22.5ZM22.5 77.5H92.5V7.5H22.5V77.5ZM7.5 100C5.5 100 3.75 99.25 2.25 97.75C0.75 96.25 0 94.5 0 92.5V15H7.5V92.5H85V100H7.5Z" fill="white"/></svg>`

export const svgRelatio = `<svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.0833 91.3542C36.1111 90.5209 26.9271 86.1459 19.5312 78.2292C12.1354 70.3125 8.4375 60.9028 8.4375 50C8.4375 39.0278 12.1354 29.6007 19.5312 21.7188C26.9271 13.8368 36.1111 9.47919 47.0833 8.64585V19.2709C39.0972 20.0347 32.3958 23.3334 26.9792 29.1667C21.5625 35 18.8542 41.9445 18.8542 50C18.8542 58.0556 21.5625 65.0174 26.9792 70.8854C32.3958 76.7535 39.0972 80.0347 47.0833 80.7292V91.3542ZM53.3333 91.3542V80.7292C60.6944 80.1736 66.9618 77.2743 72.1354 72.0313C77.309 66.7882 80.3125 60.4861 81.1458 53.125H91.5625C90.7986 63.4722 86.8229 72.257 79.6354 79.4792C72.4479 86.7014 63.6806 90.6597 53.3333 91.3542ZM81.1458 46.875C80.3819 39.5139 77.3958 33.2118 72.1875 27.9688C66.9792 22.7257 60.6944 19.7917 53.3333 19.1667V8.54169C63.6111 9.30558 72.3611 13.2986 79.5833 20.5209C86.8056 27.7431 90.7986 36.5278 91.5625 46.875H81.1458Z" fill="white"/></svg>`
