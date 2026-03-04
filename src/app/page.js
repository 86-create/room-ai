"use client";
import { useState } from "react";

export default function Home() {
  const questions = [
    { id: "age", question: "あなたの年齢は？", options: ["20代", "30代", "40代", "50代以上"] },
    { id: "gender", question: "性別は？", options: ["男性", "女性", "その他"] },
    { id: "income", question: "年収は？", options: ["〜300万", "300〜500万", "500〜800万", "800万以上"] },
    { id: "space", question: "部屋の広さは？", options: ["ワンルーム", "1LDK", "2LDK", "3LDK以上"] },
    { id: "ownership", question: "住居タイプは？", options: ["賃貸", "持ち家"] },
    { id: "style", question: "好きなインテリアは？", options: ["北欧", "モダン", "和風", "ホテルライク"] },
    { id: "color", question: "好きな色味は？", options: ["白系", "黒系", "木目", "カラフル"] },
    { id: "budget", question: "家具にかけられる予算は？", options: ["〜10万", "10〜30万", "30〜50万", "50万以上"] },
    { id: "priority", question: "部屋で一番重視することは？", options: ["デザイン", "快適さ", "収納", "機能性"] },
    { id: "pets", question: "ペットはいますか？", options: ["いない", "犬", "猫", "その他"] },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const currentQuestion = questions[step];
  const progress = ((step) / questions.length) * 100;

  const handleSelect = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    setError("");
  };

  const handleNext = () => {
    if (!answers[currentQuestion.id]) {
      setError("選択してください");
      return;
    }
    setError("");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setError("");
    setStep(step - 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Room AI 🏠</h1>

      {step < questions.length && (
        <>
          {/* 進捗バー */}
          <div className="w-full max-w-md mb-6">
            <div className="h-2 bg-gray-700 rounded">
              <div
                className="h-2 bg-white rounded transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-gray-400">
              {step + 1} / {questions.length}
            </p>
          </div>

          <h2 className="text-xl mb-6">{currentQuestion.question}</h2>

          <div className="flex flex-col gap-3 mb-6 w-full max-w-md">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-6 py-3 rounded border transition ${
                  answers[currentQuestion.id] === option
                    ? "bg-white text-black"
                    : "border-white hover:bg-gray-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex gap-4">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 border rounded hover:bg-gray-800"
              >
                戻る
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300"
            >
              {step === questions.length - 1 ? "診断する" : "次へ"}
            </button>
          </div>
        </>
      )}

      {step === questions.length && (
        <>
          <h2 className="text-2xl font-bold mb-6">診断結果 🎉</h2>
          <div className="text-left bg-white text-black p-6 rounded w-full max-w-md">
            {Object.entries(answers).map(([key, value]) => (
              <p key={key} className="mb-2">
                {key}：{value}
              </p>
            ))}
          </div>
        </>
      )}
    </main>
  );
}