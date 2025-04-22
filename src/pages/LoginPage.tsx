
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useQuiz();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  if (currentUser) {
    navigate('/create');
    return null;
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/create');
    }
  };
  
  return (
    <div className="container max-w-md">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login to QuizCraft</CardTitle>
          <CardDescription>
            Sign in to create and manage your quizzes
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@quizcraft.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-quiz-primary hover:bg-quiz-secondary">
              Sign In
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Demo credentials:</p>
            <p>Email: admin@quizcraft.com</p>
            <p>Password: password</p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
