import 'package:flutter/material.dart';
import 'package:otp_verification/phone.dart';
import 'package:otp_verification/verify.dart';

void main() {

  runApp(MaterialApp(
    initialRoute: 'phone',
    routes: {
      'phone': (context) => MyPhone(),
      'verify': (context) => MyVerify()
    },
  ));
}

class Firebase {
  static initializeApp() {}
}


