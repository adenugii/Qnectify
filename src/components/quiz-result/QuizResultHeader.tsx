import QuizHeader from "@/components/quiz/QuizHeader";

interface QuizResultHeaderProps {
  title: string;
  subtitle: string;
  time: string;
}

export default function QuizResultHeader(props: QuizResultHeaderProps) {
  return (
    <QuizHeader {...props} />
  );
}