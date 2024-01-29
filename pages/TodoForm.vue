<template>
   <marquee style="font-size:50px">Todo List    </marquee>
      <form @submit.prevent="addItemAndClear(todo)">
        <div  class="form">
        <input v-model="todo" type="text" placeholder="Input...." />
        <button style="cursor:pointer">Add</button>
      </div>
      </form>
    </template>
    
    <script >
    import { ref } from "vue";
    import { useTodoListStore } from "../stores/useTodoListStore";
    export default {
      setup() {
        const todo = ref("");
        const store = useTodoListStore();
    
        function addItemAndClear(item) {
          if (item.length === 0) {
            return alert('Empty Input');
          }
          store.addTodo(item);
          todo.value = "";
        }
    
        return { todo, addItemAndClear };
      },
    };
    function fun(){
      return alert("Your are a authorize user");
    };
    </script>
    
    <style >
      marquee{
        color:blue;
        margin-left: 25%;
        margin-right: 25%;
        background-color: black;
      
      }
    .form{
    border-style: ridge ;
    border-color: rgb(11, 11, 11);
    padding-left: 170px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 1px;
    background-color:red;
    margin-left: 25%;
    margin-right: 25%;
    font-size:20px;
}
    </style>
  