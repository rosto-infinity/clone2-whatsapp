import pkg from 'bcryptjs';
const { hash, compare } = pkg;

export async function hashPassword(password) {
  const passwordHash = await hash(password, 12);
  return passwordHash;
}
//compare le hasPassword
export async function verifyPssword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}
