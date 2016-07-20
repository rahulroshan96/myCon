


downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto (error, photo) {
  if (error) console.error('Download error!', error)
  else console.log('Download finished', photo)
}

console.log('Download started')


/*
In this example three major things happen. First the handlePhoto function is declared, then the downloadPhoto function is invoked 
and passed the handlePhoto as its callback, and finally 'Download started' is printed out.

Note that the handlePhoto is not invoked yet, it is just created and passed as a callback into downloadPhoto. But it won't run 
until downloadPhoto finishes doing its task, which could take a long time depending on how fast the Internet connection is.



This example is meant to illustrate two important concepts:

The handlePhoto callback is just a way to store some things to do at a later time
The order in which things happen does not read top-to-bottom, it jumps around based on when things complete
*/