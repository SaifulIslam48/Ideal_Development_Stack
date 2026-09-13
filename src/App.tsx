import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import type { Technology } from './types/technology';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (selectedStack.find((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveItem = (id: string) => {
    setSelectedStack(selectedStack.filter((t) => t.id !== id));
    toast.info('Item removed from stack.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <section id="technologies" className="max-w-7xl mx-auto px-4 py-12">
          {loading ? (
            <div className="text-center py-20 text-slate-500">Loading technologies...</div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Explore the <span className='text-[#ec4899] transition'>Technologies</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech) => (
                    <TechnologyCard
                      key={tech.id}
                      tech={tech}
                      isAdded={selectedStack.some((item) => item.id === tech.id)}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-80 shrink-0">
                <YourStack stack={selectedStack} onRemove={handleRemoveItem} onRemoveAll={() => setSelectedStack([])} />
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default App;