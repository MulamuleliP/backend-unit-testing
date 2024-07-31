export default function regCheck(registrationNumber, regionCode) {
    return registrationNumber.endsWith(regionCode);
  }