process.stdout.write(`Hello! I am Chatbot. How can I help you?\n
I can respond to the following commands:
1. "Hello" or "Hi"
2. "How are you?"
3. "What is your name?"
4. "Bye" or "Goodbye" or "Exit" or "Quit"
`);
process.stdin.on("data", (data) => {
  const inputData = data.toString().trim().toLowerCase();
  if (
    inputData.toLowerCase().includes("hello") ||
    inputData.toLowerCase().includes("hi")
  ) {
    console.log("Hello there!");
  } else if (inputData.toLowerCase().includes("how are you")) {
    console.log("I am fine, thank you!");
  } else if (inputData.toLowerCase().includes("what is your name")) {
    console.log("My name is Chatbot!");
  } else if (
    inputData.toLowerCase().includes("bye") ||
    inputData.toLowerCase().includes("goodbye") ||
    inputData.toLowerCase().includes("exit") ||
    inputData.toLowerCase().includes("quit")
  ) {
    console.log("Bye!");
    process.exit();
  }
});
