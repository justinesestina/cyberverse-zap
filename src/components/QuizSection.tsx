import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, quizResults } from "@/data/quizData";
import { RotateCcw } from "lucide-react";

const QuizSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const scores: Record<string, number> = {};
    answers.forEach((ansIdx, qIdx) => {
      const option = quizQuestions[qIdx]?.options[ansIdx];
      if (option) {
        Object.entries(option.scores).forEach(([career, score]) => {
          scores[career] = (scores[career] || 0) + score;
        });
      }
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, 2).map(([id]) => quizResults[id]).filter(Boolean);
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  const progress = showResult ? 100 : (answers.length / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-20 px-4 bg-gradient-cyber">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-cyber">Find Your Career Path</span>
          </h2>
          <p className="text-muted-foreground">Answer 5 questions to discover which cybersecurity role suits you best.</p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-muted rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="card-cyber"
            >
              <p className="text-xs text-primary font-mono mb-2">
                Question {currentQ + 1} of {quizQuestions.length}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {quizQuestions[currentQ].question}
              </h3>
              <div className="space-y-3">
                {quizQuestions[currentQ].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left p-4 rounded-lg border border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/60 transition-all text-sm text-foreground/80"
                  >
                    {opt.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-cyber text-center"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Your Results</h3>
              <div className="space-y-4 mb-8">
                {getResult().map((r) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-xl border border-primary/20 bg-primary/5"
                  >
                    <span className="text-3xl mb-2 block">{r.icon}</span>
                    <h4 className="text-lg font-bold text-primary mb-2">{r.title}</h4>
                    <p className="text-sm text-muted-foreground">{r.description}</p>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-muted/50 text-sm text-foreground hover:border-primary/50 transition-all"
              >
                <RotateCcw className="w-4 h-4" /> Retake Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;
