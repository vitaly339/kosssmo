import { useState } from 'react';
import Dashboard from './components/Dashboard';
import DailyPayments from './components/DailyPayments';
import Bank from './components/Bank';
import Expenses from './components/Expenses';
import TabButton from './components/TabButton';

type Tab = 'dashboard' | 'payments' | 'bank' | 'expenses';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-center md:text-left">
            Бонус Батутный Парк
          </h1>
          <p className="text-lg text-muted-foreground text-center md:text-left">
            Управление финансами и операциями
          </p>
        </header>

        {/* Tabs Navigation */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center md:justify-start">
          <TabButton
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Дашборд
          </TabButton>
          <TabButton
            active={activeTab === 'payments'}
            onClick={() => setActiveTab('payments')}
          >
            💰 Ежедневные оплаты
          </TabButton>
          <TabButton
            active={activeTab === 'bank'}
            onClick={() => setActiveTab('bank')}
          >
            🏦 Банк
          </TabButton>
          <TabButton
            active={activeTab === 'expenses'}
            onClick={() => setActiveTab('expenses')}
          >
            📝 Расходы
          </TabButton>
        </div>

        {/* Tab Content */}
        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'payments' && <DailyPayments />}
          {activeTab === 'bank' && <Bank />}
          {activeTab === 'expenses' && <Expenses />}
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Все данные хранятся локально в вашем браузере</p>
        </footer>
      </div>
    </div>
  );
}
