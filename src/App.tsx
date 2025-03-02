import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  XCircle,
  Share2,
  Fish,
} from 'lucide-react';
import { questions } from './data/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState<typeof questions>([]);
  const [shareText, setShareText] = useState('');

  // Sélectionner 5 questions aléatoires au démarrage
  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 5));
  }, []);

  const handleAnswer = (isPhishing: boolean) => {
    const isCorrect =
      selectedQuestions[currentQuestion].isPhishing === isPhishing;
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = isCorrect;
    setAnswers(newAnswers);

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      // Préparer le texte de partage
      const displayName = username || 'Anonyme';
      setShareText(
        `${displayName} a obtenu le score de ${
          score + (isCorrect ? 1 : 0)
        }/5 au test DetectFishing. Sauras-tu faire mieux ?`
      );
    }
  };

  const resetGame = () => {
    // Sélectionner 5 nouvelles questions aléatoires
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 5));

    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const startGame = () => {
    if (!username.trim()) {
      setUsername('Anonyme');
    }
    setGameStarted(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Mon score au test DetectFishing',
          text: shareText,
          url: window.location.href,
        })
        .catch((error) => console.log('Erreur de partage:', error));
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard
        .writeText(shareText + ' ' + window.location.href)
        .then(() => alert('Texte copié dans le presse-papier !'))
        .catch((err) => console.error('Erreur lors de la copie:', err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Fish className="mr-2" />
            DetectFishing
          </h1>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-4 flex flex-col items-center justify-center">
        {!gameStarted ? (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full inline-flex items-center justify-center">
                <Fish size={64} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Bienvenue sur DetectFishing
            </h2>
            <p className="mb-6">
              Testez vos compétences en détection de tentatives de phishing.
              Vous allez être confronté à 5 situations différentes. Pour chaque
              situation, vous devrez déterminer s'il s'agit d'une tentative de
              phishing ou d'une communication légitime.
            </p>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Entrez votre pseudo
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Votre pseudo"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={startGame}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Commencer le test
            </button>
          </div>
        ) : showResult ? (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Résultats</h2>
            <p className="text-xl text-center mb-6">
              {username || 'Anonyme'}, votre score:{' '}
              <span className="font-bold">
                {score} / {selectedQuestions.length}
              </span>
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <p className="text-center font-medium text-blue-800">
                {shareText}
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleShare}
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  <Share2 size={18} className="mr-2" />
                  Partager mon score
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {selectedQuestions.map((question, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">Question {index + 1}:</span>
                    {answers[index] ? (
                      <CheckCircle className="text-green-500" />
                    ) : (
                      <XCircle className="text-red-500" />
                    )}
                  </div>
                  <p className="text-sm">{question.context}</p>
                  <p className="text-sm font-semibold mt-2">
                    {question.isPhishing
                      ? "C'était du phishing"
                      : "C'était légitime"}
                  </p>
                  <p className="text-sm mt-1">{question.explanation}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={resetGame}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Recommencer
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
            <div className="mb-4 text-center">
              <span className="text-sm font-medium text-gray-500">
                Question {currentQuestion + 1} / {selectedQuestions.length}
              </span>
            </div>

            <div className="mb-6">
              <img
                src={selectedQuestions[currentQuestion].imageUrl}
                alt="Situation à analyser"
                className="w-full h-auto rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Contexte</h3>
              <p className="min-h-[100px]">
                {selectedQuestions[currentQuestion].context}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                Est-ce une tentative de phishing ?
              </h3>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleAnswer(true)}
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Oui, c'est du phishing
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Non, c'est légitime
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 DetectFishing - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;