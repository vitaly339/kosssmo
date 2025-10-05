import { useState, useEffect } from 'react';
import DataTable from './DataTable';

interface BankEntry {
  date: string;
  amount: string;
  description: string;
}

export default function Bank() {
  const [entries, setEntries] = useState<BankEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bankEntries');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bankEntries', JSON.stringify(entries));
  }, [entries]);

  const handleUpdate = (index: number, key: string, value: any) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [key]: value };
    setEntries(newEntries);
  };

  const handleDelete = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    const today = new Date().toISOString().split('T')[0];
    setEntries([...entries, {
      date: today,
      amount: '',
      description: '',
    }]);
  };

  const handleReset = () => {
    if (confirm('Вы уверены, что хотите сбросить все банковские записи?')) {
      setEntries([]);
      localStorage.removeItem('bankEntries');
    }
  };

  const columns = [
    { key: 'date', label: 'Дата', editable: true, type: 'date' as const },
    { key: 'amount', label: 'Сумма ₽', editable: true, type: 'number' as const },
    { key: 'description', label: 'Описание', editable: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Банк</h2>
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all font-medium neon-glow-cyan"
          data-testid="button-add-bank-entry"
        >
          + Добавить запись
        </button>
      </div>

      {entries.length > 0 ? (
        <DataTable
          columns={columns}
          data={entries}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ) : (
        <div className="text-center py-12 bg-card rounded-lg border border-border">
          <p className="text-muted-foreground">Нет записей. Нажмите "Добавить запись" для начала.</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors font-medium"
          data-testid="button-reset-bank"
        >
          Сбросить данные
        </button>
      </div>
    </div>
  );
}
