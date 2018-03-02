const regexRules = /^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/;
const blacklist = [
  '123456789',
  '219099999',
  '078051120',
  '987654320',
  '987654321',
  '987654322',
  '987654323',
  '987654324',
  '987654325',
  '987654326',
  '987654327',
  '987654328',
  '987654329',
  '111111111',
  '222222222',
  '333333333',
  '444444444',
  '555555555',
  '777777777',
  '888888888',
  '999999999',
  '012345678'
];

/**
 * Validates whether a provided ssn is valid according to checkr rules:
 * - Must be in xxx-xx-xxxx format
 * - Must not have any section be all zeros (example, 000-xx-xxxx or xxx-00-xxxx or xxx-xx-0000)
 * - Must not start with 666
 * - Must not start with 9
 * - Must not be one of the following blacklisted numbers:
 *   - 123-45-6789, 219-09-9999, 078-05-1120, 987-65-4320, 987-65-4321, 987-65-4322, 987-65-4323, 987-65-4324, 987-65-4325, 987-65-4326, 987-65-4327, 987-65-4328, 987-65-4329, 111-11-1111, 222-22-2222, 333-33-3333, 444-44-4444, 555-55-5555, 777-77-7777, 888-88-8888, 999-99-9999, 012-34-5678
 *
 * This logic is largely taken from https://github.com/uphold/ssn-validator but the blacklist is modified
 * to include additional known-invalid SSNs provided by Checkr.
 * @param {*} value The candidate ssn to test
 */
const isValid = value => {
  if (!regexRules.test(value)) {
    return false;
  }

  return blacklist.indexOf(value.replace(/\D/g, '')) === -1;
};

module.exports = {
  isValid
};
