import * as bcrypt from 'bcrypt';

console.log(bcrypt);
export const generateHash = async (password: string): Promise<string> => {
  const saltRounds = 12;

  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

export const validateHash = async (
  incoming: string,
  hash: string,
): Promise<boolean> => {
  console.log(incoming, hash);
  return await bcrypt.compare(incoming, hash);
};
