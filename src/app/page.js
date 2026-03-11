"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [screen, setScreen] = useState("intro");
  const [search, setSearch] = useState("");

  const furniture = [
    { name: "ソファ", img: "/sofa.jpg" },
    { name: "テーブル", img: "/table.jpg" },
    { name: "ベッド", img: "/bed.jpg" },
    { name: "チェア", img: "/chair.jpg" },
    { name: "照明", img: "/light.jpg" },
    { name: "収納", img: "/syuunou.jpg" }
  ];

  const searchAmazon = () => {
  if (!search) return;

  const keyword = encodeURIComponent(search + " 家具");
  const url = `https://www.amazon.co.jp/s?k=${keyword}`;

  window.open(url, "_blank");
};

  useEffect(() => {
    if (screen === "intro") {
      setTimeout(() => {
        setScreen("home");
      }, 4000);
    }
  }, [screen]);

  return (
    <main className="relative min-h-screen text-white flex items-center justify-center p-6">

      {/* 背景3分割 */}
      <div className="absolute inset-0 grid grid-cols-3">

        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/livi_1.jpg')" }}
        />

        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/livi_2.jpg')" }}
        />

        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/livi_3.jpg')" }}
        />

      </div>

      {/* 暗いレイヤー */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* コンテンツ */}
      <div className="relative z-10 w-full flex items-center justify-center">

        {/* ================= INTRO ================= */}
        {screen === "intro" && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
            transition={{ delay: 1, duration: 2 }}
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
            <div className="flex gap-2 mb-8">

  <input
    type="text"
    placeholder="家具を検索..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        searchAmazon();
      }
    }}
    className="flex-1 p-3 rounded bg-white text-black"
  />

  <button
    onClick={searchAmazon}
    className="bg-white text-black px-4 rounded font-semibold hover:bg-gray-300"
  >
    検索
  </button>

</div>

            {/* 家具一覧 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">

              {furniture.map((item) => (
                <div
                  key={item.name}
                  className="bg-white text-black rounded shadow overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
                >

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                  />

                  <div className="p-4 text-center">
                    <p className="font-semibold">{item.name}</p>
                  </div>

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

      </div>

    </main>
  );
}