import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Text widget',
        home: Scaffold(
          body: Center(
            child: Container(
              // child: new Text('hello learner', style: TextStyle(fontSize: 40)),
              // alignment: Alignment.center,
              // width: 500.0,
              // height: 400.0,
              // // color: Colors.lightBlue,
              // padding: const EdgeInsets.all(10.0),
              // margin: const EdgeInsets.all(10.0),
              // decoration: new BoxDecoration(
              //     gradient: const LinearGradient(colors: [
              //       Colors.lightBlue,
              //       Colors.greenAccent,
              //       Colors.purple
              //     ]),
              //     border: Border.all(width: 5.0, color: Colors.red)
              //     ),
              /* 04 image 图片组件的使用 */
              child: new Image.network(
                'http://pic.baike.soso.com/p/20130828/20130828161137-1346445960.jpg',
                // fit: BoxFit.contain,
                color: Colors.red,
                colorBlendMode: BlendMode.modulate,
              ),
              width: 300.0,
              height: 200.0,
              color: Colors.lightBlue,
            ),
          ),
        ));
  }
}
