const updateQuestionRules = {
  _id: ["required", "regex:/^[0-9a-fA-F]{24}$/i"],
  difficulty: "string",
  topic: "string",
  question: "string",
  hint: "string",
  solution: "string",
};

export default updateQuestionRules;