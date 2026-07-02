async function greet() {
  return "Hello Ketan";
}

const p1 = greet();

p1.then((response) => {
  console.log(response);
});

/******************************* */

// async function person(){
//     return {name: "Ketan" , age: 25, city: "Panvel"};
// }

// const p2 = person();

// p2.then((response)=>{
//     console.log(response)
// })

/************************** */

async function github() {
  try {
    const response = await fetch(`https://api.github.com/users?per_page=20`);
    if(!response.ok){
        throw new Error("Unable to fetch the data");
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

github();
