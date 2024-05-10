import dynamic from "next/dynamic";

const Width = dynamic(() => import("@/component/width"), { ssr: false });

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
    </main>
  );
}
