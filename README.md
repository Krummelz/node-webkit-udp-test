node-webkit-udp-test
====================

A simple interface to test UDP communications

To test this out:

1. Run `npm install`
2. Specify the build you want in the `Grunfile.js`
2. Run '`grunt'
3. Find your build in the `build/` folder

Run two instances of the app, then just set the local and remote hosts and ports correctly.  
I've found (on Windows), it's best to stick to utf16le/ucs2 encoding.

If it stops working, close and restart.

Have fun :)