function getUsers() {
    return [
      {id:11, username: 'john', email: 'john@test.com' },
      {id:12, username: 'jane', email: 'jane@test.com' },
    ];
  }
  
/*   function findUser(username) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username);
    return user;
  } */

  function finduserbyId(id) {
    const users = getUsers();
    const user = users.find((user) => user.id === id);
    return user;
  }
  
  console.log(finduserbyId(11));