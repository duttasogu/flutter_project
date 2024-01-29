<template>
<h1>Login Page</h1>
<form action="" class="form2">
     User id:<input type="text" required placeholder="your Id"><br>
     Password: <input type="password " required placeholder="password">
     <br>
     <button type="submit">submit</button>
    </form>
    
</template>
<style>

h1{
text-align: center;
}
.form2{
    border-style: ridge ;
    border-color: rgb(11, 11, 11);
    padding: 25px 25px;
    margin-bottom: 1px;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    background-color: antiquewhite;
}
button{
    color: rgb(83, 37, 209);
    font-size: 20px;
    margin-bottom: 20px;
    
}
button:hover{
    color: green;
    text-decoration: solid;
}
input{
   padding: 7px ; 
margin-right: 20px;
font-size: 18px;
margin-bottom: 20px;
}
</style>
