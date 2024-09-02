import NameBadge from './name-badge';
import ControlPanel from './controls';
import { useState } from 'react';

const Application = () => {
  const [name, setName] = useState<string>("");

  return (
    <main className="application">
      <NameBadge name={name} />
      <ControlPanel name={name} onChange={(e) => setName(e.target.value)} />
    </main>
  )
};

export default Application;
