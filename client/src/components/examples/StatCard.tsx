import { useState } from 'react';
import StatCard from '../StatCard';

export default function StatCardExample() {
  const [value, setValue] = useState('150000');

  return (
    <div className="p-8 space-y-4">
      <StatCard 
        label="Терминал" 
        value={value}
        editable
        onChange={setValue}
      />
      <StatCard 
        label="Прибыль" 
        value={85000}
        variant="success"
      />
      <StatCard 
        label="Убыток" 
        value={-25000}
        variant="error"
      />
    </div>
  );
}
