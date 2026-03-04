"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!age) {
      setError("年齢を選択してください");
      return;
    }
    setError("");
    setStep(2);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6 text-center">
      
      {/* Step 0 */}
      {step === 0 && (
        <>
          <h1 className="text-4xl font-bold mb-6">
            Room AI 🏠
          </h1>
          <p className="mb-8 text-gray-300">
            あなたの部屋をAIで診断します
          </p>
          <button
            onClick={() => setStep(1)}
            className="bg-white text-black px-6 py-3 rounded font-semibold"
          >
            診断スタート
          </button>
        </>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            あなたの年齢を教えてください
          </h2>

          <select
            className="bg-white text-black p-2 rounded mb-4"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setError("");
            }}
          >
            <option value="">選択してください</option>
            <option value="20代">20代</option>
            <option value="30代">30代</option>
            <option value="40代">40代</option>
            <option value="50代以上">50代以上</option>
          </select>

          {/* エラーメッセージ */}
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}

          <button
            onClick={handleNext}
            disabled={!age}
            className={`px-6 py-2 rounded font-semibold transition ${
              age
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            次へ
          </button>
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            診断結果
          </h2>
          <p className="text-lg">
            あなたは <span className="font-bold">{age}</span> のユーザーですね。
          </p>
        </>
      )}
    </main>
  );
}