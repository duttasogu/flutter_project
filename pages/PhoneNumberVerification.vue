<template>
  <form action="" class=".form">
  <div class="container">
    <div class="ph">
    <label for="phoneNumber">Phone Number:</label>
    <input type="text" v-model="phoneNumber" id="phoneNumber" required />

    <button @click="sendVerificationCode">Send Verification Code</button> 
  </div>
<div class="veri">
    <label for="verificationCode">Verification Code:</label>
    <input type="text" v-model="verificationCode" id="verificationCode" required />

    <button @click="verifyPhoneNumber">Verify Phone Number</button>
  </div>
  </div>
</form>
</template>

<script>
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';

export default {
  data() {
    return {
      phoneNumber: '',
      verificationCode: '',
    };
  },
  methods: {
    async sendVerificationCode() {
      const auth = getAuth();
      const phoneNumber = `+${this.phoneNumber}`; // Assuming you want to use international format

      try {
        // Send verification code to the provided phone number
        await signInWithPhoneNumber(auth, phoneNumber);
        console.log('Verification code sent successfully');
      } catch (error) {
        console.error('Error sending verification code:', error.message);
      }
    },

    async verifyPhoneNumber() {
      const auth = getAuth();
      const phoneNumber = `+${this.phoneNumber}`;
      const verificationCode = this.verificationCode;

      try {
        // Confirm verification code
        const credential = await signInWithPhoneNumber(auth, phoneNumber, verificationCode);
        // You can now use the credential to sign in the user or link accounts
        console.log('Phone number verified successfully:', credential);
      } catch (error) {
        console.error('Error verifying phone number:', error.message);
      }
    },
  },
};
</script>

<style>
.container{
  
    width:302px;
    height:175px;
    position:absolute;
    left:0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
}

.ph{
  border: solid 2px black;
  padding-left: 10px;
  padding-top: 5px;
  background-color: antiquewhite;
}
.veri{
  border: solid 2px black;
  padding-left: 10px;
  padding-top: 5px;
  background-color: beige;
}
</style>
