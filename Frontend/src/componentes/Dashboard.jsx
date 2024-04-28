import Section from "./Section";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Multilenguaje/i18n";

//prueba con repo de github 2

const Dashboard = () => {
  const { t } = useTranslation("dashboard");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25] md:-mt-0 bg-slate-100"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="dashboard"
    >
      <div className="container relative w-full">
        <h1 className="h1 mb-6 mt-6 text-white relative z-10 inline-block">
          {t('dashboard')}
        </h1>
        <button
          onClick={togglePopup}
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg mb-4"
        >
          {t('submit')}
        </button>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">{t('submit2')}</h2>
              <label htmlFor="fileInput" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mr-4">{t('file')}</label>
              <input type="file" id="fileInput" className="mb-4"  style={{ visibility: 'hidden' }}/>
              <button
                onClick={togglePopup}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mr-4"
              >
                {t('submit3')}
              </button>
              <button
                onClick={togglePopup}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                {t('close')}
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Dashboard;