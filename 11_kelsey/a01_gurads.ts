type DeliminatedDocument = {
  text: string;
  seperator: "comma" | "tab";
};

type PlainTextDocument = {
  text: string;
};

const printDeliminated = (doc: DeliminatedDocument) => {
  console.log("printDeliminated:", doc);
};

const printPlainText = (doc: PlainTextDocument) => {
  console.log("printPlainText: ", doc);
};

const printDocument = (doc: DeliminatedDocument | PlainTextDocument) => {
  /**
   * Below statement would work fine
   * printPlainText(doc);
   *
   *
   * But an error occured for below statement
   * printDeliminated(doc);
   *
   * Argument of type 'DeliminatedDocument | PlainTextDocument' is not assignable
   * to parameter of type 'DeliminatedDocument'.
   * Property 'seperator' is missing in type 'PlainTextDocument'
   * but required in type 'DeliminatedDocument'
   *
   * solution to above case is below
   */

  if ("seperator" in doc) {
    printDeliminated(doc);
  } else {
    printPlainText(doc);
  }
};
