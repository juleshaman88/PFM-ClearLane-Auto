import React, { useState } from 'react';

export default function DebugPanel({
  trackingParams,
  events,
  forceError,
  onToggleForceError,
  onClearEvents,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full px-4 sm:px-0">
      <div className="bg-slate-900 text-slate-100 rounded-xl shadow-2xl border border-slate-700 overflow-hidden text-xs">
        <div className="px-4 py-2.5 bg-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>QA / Event Log ({events.length})</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-slate-300 hover:text-white font-semibold"
          >
            {isOpen ? 'Minimize' : 'Expand'}
          </button>
        </div>

        {isOpen && (
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Error Simulation Toggle */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <div>
                <div className="font-semibold text-slate-200">Simulate API Error</div>
                <div className="text-[11px] text-slate-400">
                  Or submit ZIP <code className="text-amber-300">00000</code>
                </div>
              </div>
              <input
                type="checkbox"
                checked={forceError}
                onChange={(e) => onToggleForceError(e.target.checked)}
                className="w-4 h-4 accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Preserved URL Params */}
            <div>
              <div className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                Captured URL Params
              </div>
              <pre className="bg-slate-950 p-2 rounded text-[11px] text-emerald-300 overflow-x-auto">
                {JSON.stringify(trackingParams, null, 2)}
              </pre>
            </div>

            {/* Event Stream */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                  Analytics Events
                </span>
                {events.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearEvents}
                    className="text-[11px] text-slate-400 hover:text-white underline"
                  >
                    Clear
                  </button>
                )}
              </div>

              {events.length === 0 ? (
                <p className="text-slate-500 italic">
                  No events logged yet. Select an age to start.
                </p>
              ) : (
                <div className="space-y-2">
                  {events.map((ev, i) => (
                    <div
                      key={`${ev.name}-${i}`}
                      className="bg-slate-950 p-2 rounded border border-slate-800"
                    >
                      <div className="flex justify-between font-mono text-emerald-400 font-bold mb-1">
                        <span>{ev.name}</span>
                        <span className="text-slate-500">{ev.time}</span>
                      </div>
                      <pre className="text-[11px] text-slate-300 overflow-x-auto">
                        {JSON.stringify(ev.payload, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}