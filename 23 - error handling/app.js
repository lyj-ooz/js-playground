try {
  // examplefunc();

  throw new SyntaxError("there is no ....");
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error instanceof TypeError);
  console.log(error instanceof ReferenceError);
} finally {
  console.log("finall는 무조건 실행");
}

console.log("script is still running");
