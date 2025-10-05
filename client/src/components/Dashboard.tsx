import { useState, useEffect } from 'react';
import StatCard from './StatCard';

interface DashboardData {
  terminal: number;
  cashCollected: number;
  bankIncoming: number;
  jumps: number;
  rentExpense: number;
  utilitiesExpense: number;
  otherExpense: number;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    terminal: 0,
    cashCollected: 0,
    bankIncoming: 0,
    jumps: 0,
    rentExpense: 50000,
    utilitiesExpense: 20000,
    otherExpense: 0,
  });

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dashboardData');
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('dashboardData', JSON.stringify(data));
  }, [data]);

  const updateField = (field: keyof DashboardData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setData(prev => ({ ...prev, [field]: numValue }));
  };

  // Calculations
  const revenue = data.terminal + data.cashCollected + data.bankIncoming;
  const totalExpenses = data.rentExpense + data.utilitiesExpense + data.otherExpense;
  const profit = revenue - totalExpenses;
  const share = profit / 4;

  const handleReset = () => {
    if (confirm('Вы уверены, что хотите сбросить все данные дашборда?')) {
      const initialData = {
        terminal: 0,
        cashCollected: 0,
        bankIncoming: 0,
        jumps: 0,
        rentExpense: 50000,
        utilitiesExpense: 20000,
        otherExpense: 0,
      };
      setData(initialData);
      localStorage.setItem('dashboardData', JSON.stringify(initialData));
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground mb-6">Главная панель</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Терминал"
          value={data.terminal}
          editable
          onChange={(v) => updateField('terminal', v)}
          data-testid="stat-terminal"
        />
        <StatCard
          label="Забрал (нал)"
          value={data.cashCollected}
          editable
          onChange={(v) => updateField('cashCollected', v)}
        />
        <StatCard
          label="Банковские входящие"
          value={data.bankIncoming}
          editable
          onChange={(v) => updateField('bankIncoming', v)}
        />
        <StatCard
          label="Прыжки"
          value={data.jumps}
          editable
          onChange={(v) => updateField('jumps', v)}
          suffix="шт"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          label="Аренда"
          value={data.rentExpense}
          editable
          onChange={(v) => updateField('rentExpense', v)}
          variant="default"
        />
        <StatCard
          label="Коммунальные"
          value={data.utilitiesExpense}
          editable
          onChange={(v) => updateField('utilitiesExpense', v)}
        />
        <StatCard
          label="Прочие расходы"
          value={data.otherExpense}
          editable
          onChange={(v) => updateField('otherExpense', v)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          label="Оборот"
          value={revenue}
          suffix="₽"
        />
        <StatCard
          label="Прибыль"
          value={profit}
          variant={profit >= 0 ? 'success' : 'error'}
          suffix="₽"
        />
        <StatCard
          label="Доля (÷4)"
          value={share.toFixed(2)}
          variant={share >= 0 ? 'success' : 'error'}
          suffix="₽"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors font-medium"
          data-testid="button-reset-dashboard"
        >
          Сбросить данные
        </button>
      </div>
    </div>
  );
}
