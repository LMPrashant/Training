
try {
    let result = add();
    console.log(result);
} catch (err) {
    console.log({name: err.name, message:err.message});
} 

/* try {
    let result = add(10, 20);
    console.log(result);
  } catch (e) {
    console.log({ name: e.name, message: e.message });
  }
  console.log('Bye'); */