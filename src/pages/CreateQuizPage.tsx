
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import QuestionForm from "@/components/quiz/QuestionForm";
import { QuizQuestion } from "@/contexts/QuizContext";
import { X } from "lucide-react";

const CreateQuizPage = () => {
  const navigate = useNavigate();
  const { currentUser, addQuiz } = useQuiz();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Omit<QuizQuestion, "id">[]>([]);
  
  if (!currentUser) {
    return (
      <div className="container text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Authentication Required</h1>
        <p className="mb-6">You need to be logged in to create a quiz.</p>
        <Button onClick={() => navigate('/login')}>Log In</Button>
      </div>
    );
  }
  
  const handleAddQuestion = (question: Omit<QuizQuestion, "id">) => {
    setQuestions([...questions, question]);
  };
  
  const handleRemoveQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };
  
  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Please enter a quiz title");
      return;
    }
    
    if (!description.trim()) {
      alert("Please enter a quiz description");
      return;
    }
    
    if (questions.length === 0) {
      alert("Please add at least one question");
      return;
    }
    
    const questionsWithIds = questions.map((q, index) => ({
      ...q,
      id: `${Date.now()}-${index}`,
    }));
    
    addQuiz({
      title,
      description,
      createdBy: currentUser.id,
      questions: questionsWithIds,
    });
    
    navigate("/quizzes");
  };
  
  return (
    <div className="container max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Create a New Quiz</h1>
      <p className="text-muted-foreground mb-8">
        Fill out the form below to create your custom quiz.
      </p>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Quiz Title</Label>
              <Input
                id="title"
                placeholder="Enter a title for your quiz"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter a description for your quiz"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-bold mb-4">Quiz Questions</h2>
      
      <QuestionForm onAddQuestion={handleAddQuestion} />
      
      {questions.length > 0 && (
        <div className="space-y-4 mb-8">
          <h3 className="font-medium">Added Questions ({questions.length})</h3>
          {questions.map((question, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{question.text}</h4>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveQuestion(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X size={16} />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                {question.options.length} options, correct: #{question.correctAnswer + 1}
              </div>
            </Card>
          ))}
        </div>
      )}
      
      <div className="flex justify-end space-x-4 mb-12">
        <Button variant="outline" onClick={() => navigate("/quizzes")}>
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={!title || !description || questions.length === 0}
          className="bg-quiz-primary hover:bg-quiz-secondary"
        >
          Create Quiz
        </Button>
      </div>
    </div>
  );
};

export default CreateQuizPage;
