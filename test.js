import axios from 'axios'


async function test() {
   const data = await axios.post("https://todo-api-learning.herokuapp.com/v1/task/4", {
       test: 1,
       test1: 2
   })
   console.log(data)
}

test()