'use client';

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [supabaseUrl, setSupabaseUrl] = useState<string>('');
  const [hasKey, setHasKey] = useState<boolean>(false);

  useEffect(() => {
    // Get the environment variables
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Set the states
    setSupabaseUrl(url || 'Not found');
    setHasKey(!!key);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Test</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">Supabase URL:</h2>
          <p className="font-mono">{supabaseUrl}</p>
        </div>
        <div>
          <h2 className="font-semibold">Supabase Key Present:</h2>
          <p className="font-mono">{hasKey ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}