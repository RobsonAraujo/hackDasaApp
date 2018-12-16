
/* 
The app show the follow warn  when i try make request for firebase

"Setting a timer for a long period of time, i.e. multiple minutes,
is a performance and correctness issue on Android as it keeps the
timer module awake, and timers can only be called when the app
is in the foreground. See (facebook/react-native#12981) for
more info. (Saw setTimeout with duration 111862ms)" 

Actualy does`t exists a release to resolve that issue,
so we are ignoring this specific warn for while

SEE THE ISSUE FOR MORE DETAILS:
https://github.com/facebook/react-native/issues/12981

*/
export const ignoredYellowBoxSettingAtTime = () => console.ignoredYellowBox = ['Setting a timer']