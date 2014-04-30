AndroLuaTemplate
================

AndroLuaTemplate is a starting for creating [lua](http://www.lua.org/) based applications on Android.

It is based on [AndroLua](https://github.com/mkottman/AndroLua) which includes [LuaJava](http://www.keplerproject.org/luajava/), so you can access (almost) everything the [Android API](http://developer.android.com/reference/classes.html) provides

Requirements
------------

* [Android SDK](http://developer.android.com/sdk/index.html)
* [Android NDK](http://developer.android.com/sdk/ndk/index.html)
* (optionally) Eclipse with the [ADT](http://developer.android.com/sdk/eclipse-adt.html) plugin

Lua and LuaJava sources are included.

Building
--------

Assuming that `$SDK` points to your SDK and `$NDK` points to your NDK installation, run the following:

    git clone git://github.com/mkottman/AndroLua.git
    cd AndroLua
    $NDK/ndk-build 

This will build the native library, consisting of Lua and LuaJava. Then import the project into Eclipse, or run the following

    $SDK/tools/android update project -p .
    ant debug
    ant install

Usage
-----

The default application shows a web page with the only content "Sample html content". It will also bring up a notification "hello sample app".

To create your own applications just add required lua modules to the `/assets` directory and modify the `assets/mainscript.lua` file to your needs. Accordingly modify `assets/web/main.html` and add or modify related web files to change the appearance of the application.

