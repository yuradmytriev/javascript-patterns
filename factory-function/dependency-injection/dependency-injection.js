import Greeter from './greeter';
import ConsoleOutputStream from './console-output-stream';
import consoleError from './console-error';

const consoleOutputStream = ConsoleOutputStream();
const consoleErrorStream = consoleError();
const greeter = Greeter(consoleErrorStream);

greeter.greet();  // prints Hello World!