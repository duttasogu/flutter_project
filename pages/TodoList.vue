<template>
    <div v-for="todo in todoList" :key="todo.id">
      <div class="ans">
        <span :class="{ completed: todo.completed }" class="ans1">{{ todo.item }}</span>
        <span @click.stop="toggleCompleted(todo.id)" style="cursor:pointer" class="ans2">&#10004;</span>
        <span @click="deleteTodo(todo.id)" class="x" style="cursor:pointer" >&#10060;</span>
      </div>
    </div>
  </template>
  
  <script>
  import { useTodoListStore } from "../stores/useTodoListStore";
  import { storeToRefs } from "pinia";
  export default {
    setup() {
      const store = useTodoListStore();
  
      const { todoList } = storeToRefs(store);
      const { toggleCompleted, deleteTodo } = store;
  
      return { todoList, toggleCompleted, deleteTodo };
    },
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    font-size: 30px;

  }
  .ans{
    font-size: 35px;
    border-style:none;
    padding: 5px 5px;
    background-color:rgba(194, 200, 195, 0.904);
    border-bottom:1px solid rgba(145, 137, 137, 0.2) ;
    margin-left: 25%;
    margin-right: 25%;
    
}
.ans:hover{
    opacity:.9 ;
}
.ans1{
    margin-right: 50px;
    margin-bottom: 20px;
    padding-left: 170px;
}
.ans2:hover{
    color: rgb(19, 0, 128);
}
.ans2{
   
    margin-right:50px ;
    margin-bottom: 20px;
    color:green;
    font-weight: bold;
}
  </style>
