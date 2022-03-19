export const createUser = async (username, email, pass, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: pass,
      }),
    });
    const data = await response.json();
    setter(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, pass, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: pass,
      }),
    });
    const data = await response.json();
    setter(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const tokenLogin = async (setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setter(data.user);
  } catch (error) {
    console.log(error);
  }
};

// logout
export const logout = async (setter) => {
  try {
    // const data = await response.json();
    // setter(data.user);
    setter("");
    localStorage.removeItem("myToken");
  } catch (error) {
    console.log(error);
  }
};


export const updatePass = async (pass) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PATCH",
      headers: JSON.stringify({ "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("myToken")}` }),
      body: JSON.stringify({
        password: pass,
      }),
    });
    // do we actually get a new token?
    // const data = await response.json();
    // localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};




// # // update password PATCH http://localhost:5000/user body.password, header bearer token, 
// curl -X PATCH -d '{"password": "test321"}'  -H 'Content-Type: application/json'  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyMjg3NGI4OTQzZDNjOTc5NTRmZTMiLCJpYXQiOjE2NDc0NTQzMjR9.alJsG5W6ZrEs82x0PN3dYvxNEHD2JAqa_WMr9R_lH50" http://localhost:5000/user

// # check it worked with full login
// curl -d '{"username": "pajojo", "password": "test321"}'  -H 'Content-Type: application/json' http://localhost:5000/login

// # delete user
// curl -X DELETE -H 'Content-Type: application/json'  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyNWE4NDYxOTBlZmIyM2NjMTVkY2UiLCJpYXQiOjE2NDc0NjcxNDB9.nNQAbB0wwIg2dCqKGg96IixVL1TmIFXiPUuq-Lbcwi4" http://localhost:5000/user













// DONE


// # create user POST http://localhost:5000/user body.username, body.email, body.password
// curl -d '{"username": "pajojo", "email": "pajojo@gmail.com", "password": "test123"}'  -H 'Content-Type: application/json' http://localhost:5000/user
//     # {"user":"pajojo","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyMjg3NGI4OTQzZDNjOTc5NTRmZTMiLCJpYXQiOjE2NDc0NTQzMjR9.alJsG5W6ZrEs82x0PN3dYvxNEHD2JAqa_WMr9R_lH50"}

// # // full login POST http://localhost:5000/login body.username and body.password
// curl -d '{"username": "pajojo", "password": "test123"}'  -H 'Content-Type: application/json' http://localhost:5000/login

// # // token login GET http://localhost:5000/user   header.Authorization: "Bearer TOKEN"
// curl -X GET -H 'Content-Type: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyMjg3NGI4OTQzZDNjOTc5NTRmZTMiLCJpYXQiOjE2NDc0NTQzMjR9.alJsG5W6ZrEs82x0PN3dYvxNEHD2JAqa_WMr9R_lH50" http://localhost:5000/user

