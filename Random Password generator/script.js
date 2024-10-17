const inputField = document.querySelector("#pwd");

const randomPwd = () => {
  const randomString = (length, chars) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password = password + chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  };

  const password = randomString(
    8,
    "!@#$%^&*0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  inputField.value = password;
};