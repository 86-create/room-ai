"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("");

  const handleNext = () => {
    if (!age) return alert("年齢を選択してください");
    setStep(2);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6 text-center">
      
      {/* Step 0：トップ画面 */}
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

      {/* Step 1：年齢質問 */}
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            あなたの年齢を教えてください
          </h2>

          <select
  className="bg-white text-black p-2 rounded mb-6"
  value={age}
  onChange={(e) => setAge(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="20s">20代</option>
            <option value="30s">30代</option>
            <option value="40s">40代</option>
            <option value="50s+">50代以上</option>
          </select>

          <button
            onClick={handleNext}
            className="bg-white text-black px-6 py-2 rounded font-semibold"
          >
            次へ
          </button>
        </>
      )}

      {/* Step 2：確認画面 */}
      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            診断中...
          </h2>
          <p>あなたは {age} のユーザーですね。</p>
        </>
      )}
    </main>
  );
}