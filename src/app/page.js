"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [screen, setScreen] = useState("intro"); 
  // intro → home → diagnosis

  // 3秒後にホームへ
  useEffect(() => {
    if (screen === "intro") {
      setTimeout(() => {
        setScreen("home");
      }, 3000);
    }
  }, [screen]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      {/* ================= INTRO ================= */}
      {screen === "intro" && (
        <motion.div
  initial={{ opacity: 1, scale: 1 }}
  animate={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
  transition={{ duration: 2 }}
  className="text-6xl font-bold"
>
  Room AI
</motion.div>
      )}

      {/* ================= HOME ================= */}
      {screen === "home" && (
        <div className="w-full max-w-4xl">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Room AI 🏠
          </h1>

          {/* 検索バー */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="家具を検索..."
              className="w-full p-3 rounded bg-white text-black"
            />
          </div>

          {/* 家具一覧 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {["ソファ", "テーブル", "ベッド", "チェア", "照明", "収納"].map((item) => (
              <div
                key={item}
                className="bg-white text-black p-6 rounded shadow"
              >
                <div className="h-24 bg-gray-200 mb-4 rounded"></div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>

          {/* 診断ボタン */}
          <div className="text-center">
            <button
              onClick={() => setScreen("diagnosis")}
              className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-300 transition"
            >
              AIインテリア診断をする
            </button>
          </div>
        </div>
      )}

      {/* ================= DIAGNOSIS ================= */}
      {screen === "diagnosis" && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            診断画面（ここに前の診断ロジックを入れます）
          </h2>
          <button
            onClick={() => setScreen("home")}
            className="border px-6 py-2 rounded"
          >
            トップへ戻る
          </button>
        </div>
      )}

      {/* アニメーションCSS */}
      <style jsx>{`
        .animate-fadeOut {
          animation: fadeOut 3s ease forwards;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
          }
          70% {
            opacity: 1;
            filter: blur(4px);
            transform: scale(1.05);
          }
          100% {
            opacity: 0;
            filter: blur(20px);
            transform: scale(1.2);
          }
        }
      `}</style>
    </main>
  );
}