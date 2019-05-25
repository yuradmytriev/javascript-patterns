export default (outputStream) => {
  return {
    greet() {
      outputStream.send('Hello World!');
    }
  };
 }