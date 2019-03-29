<template> 
    <div id="auth">

        <div class="container">
            <br><br>
            <div class="section">
                <div class="row center">
                <button class="btn-large waves-effect waves-light indigo" @click="openTab('sign_up')">Sign up</button>
                <button class="btn-large waves-effect waves-light indigo" @click="openTab('sign_in')">Sign in</button>
            </div>

                <div class="row">
                <form  class="col s12" id="sign_up">
                    <div class="container">
                              <h3 class="center">Create a new account</h3>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" required>
                        <label>E-mail</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" required>
                        <label>Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="password"  required>
                        <label>Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="password"  required>
                        <label>Confirm Password</label>
                    </div>
                </div>
                  <div class="row">
                    <div class="center">
                         <button  type="submit " class="btn indigo">Create</button>
                    </div>
                </div>

                    </div>
               
                </form>

             <form  class="col s12" id="sign_in" style="display:none">
                   <div class="container">
                        <h3 class="center">Sign in to your account</h3>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" required>
                        <label>Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="password"  required>
                        <label>Password</label>
                    </div>
                </div>
                  <div class="row">
                    <div class="center">
                         <button  type="submit" class="btn indigo">Sign in</button>
                    </div>
                </div>

                   </div>
               
                </form>
            </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name : 'auth',
    methods:{
         openTab(tab) {
                  
                    var i;
                    var x = document.getElementsByTagName("form");
                    var btns = document.getElementsByTagName("button");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none"; 
                        btns[i].style.background="#e5e5e5";
                    }
                   
                    document.getElementById(tab).style.display = "block"; 
            }
    }
}
</script>

<style scoped>

.btn-large {
   width: 35%;
   margin: 5px;
  
}

 button:hover {
  background: #e5e5e5!important;
}
</style>
