import { useState } from 'react';
import TabButton from '../TabButton';

export default function TabButtonExample() {
  const [active, setActive] = useState(0);

  return (
    <div className="p-8 flex gap-4">
      <TabButton active={active === 0} onClick={() => setActive(0)}>
        Дашборд
      </TabButton>
      <TabButton active={active === 1} onClick={() => setActive(1)}>
        Оплаты
      </TabButton>
      <TabButton active={active === 2} onClick={() => setActive(2)}>
        Банк
      </TabButton>
    </div>
  );
}
