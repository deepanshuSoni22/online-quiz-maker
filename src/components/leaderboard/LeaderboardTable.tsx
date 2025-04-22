
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuizAttempt } from "@/contexts/QuizContext";

interface LeaderboardTableProps {
  attempts: QuizAttempt[];
}

const LeaderboardTable = ({ attempts }: LeaderboardTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Rank</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Quiz</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Percentage</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attempts.map((attempt, index) => {
            const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
            let badgeColor = '';
            
            if (index === 0) badgeColor = 'bg-yellow-500';
            else if (index === 1) badgeColor = 'bg-gray-400';
            else if (index === 2) badgeColor = 'bg-amber-700';
            
            return (
              <TableRow key={attempt.id}>
                <TableCell>
                  <div className="flex items-center justify-center">
                    {index < 3 ? (
                      <span className={`w-6 h-6 rounded-full ${badgeColor} text-white flex items-center justify-center text-xs font-bold`}>
                        {index + 1}
                      </span>
                    ) : (
                      index + 1
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-medium">User {attempt.userId.slice(-1)}</TableCell>
                <TableCell>Quiz {attempt.quizId}</TableCell>
                <TableCell className="text-right">{attempt.score}/{attempt.totalQuestions}</TableCell>
                <TableCell className="text-right font-semibold">{percentage}%</TableCell>
                <TableCell className="text-right">
                  {new Date(attempt.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
