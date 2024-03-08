export default function signUpUser(firstName, lastName) {
  const input = {
    firstName: `${firstName}`,
    lastName: `${lastName}`
  };

  const promise = new Promise((resolve) => {
    resolve(input);
  });

  return promise;
}
