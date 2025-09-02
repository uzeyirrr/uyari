import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4 border-2 border-red-200">
        <div className="text-6xl mb-6">🚨</div>
        <h1 className="text-2xl font-bold text-red-700 mb-4">
          ⚠️ UYARI ⚠️
        </h1>
        <p className="text-red-800 text-lg leading-relaxed">
          Bu uygulamayı kullanmak için lütfen{" "}
          <span className="font-bold text-red-600 bg-red-100 px-2 py-1 rounded">0533 284 90 76</span>{" "}
          nolu telefon ile WhatsApp üzerinden iletişime geçiniz.
        </p>
      </div>
    </div>
  );
}
