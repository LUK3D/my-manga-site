import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className='w-screen h-screen overflow-hidden flex flex-col justify-center items-center'>
        <h1 className="text-6xl">NOX</h1>
        <h1>{t("welcome")}</h1>
      </div>
    </>
  )
}

export default App
