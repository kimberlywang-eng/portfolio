import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#05070d',
          borderRadius: 7,
          fontFamily: 'monospace',
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: '#5eead4', letterSpacing: -1 }}>
          KW
        </span>
      </div>
    ),
    { ...size }
  );
}
