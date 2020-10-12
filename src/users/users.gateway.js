  const baseUrl = "https://api.github.com/users";


  export const fetchUserInfo = (userName) => {
      fetch(`${baseUrl}/${userName}`).then((response) => {
          if (response.ok) return response.json();
          throw new Error("Failed to download user info");
      });
  }

  export const fetchUserList = () =>
      fetch(baseUrl).then((response) => {
          if (response.ok) return response.json();
          throw new Error("Failed to download users");
      });