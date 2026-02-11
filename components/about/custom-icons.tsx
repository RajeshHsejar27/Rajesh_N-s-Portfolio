// components/CustomIcons.tsx
import React from 'react';

type SvgIconProps = {
  size?: number;
  className?: string;
};


// ==========================================
//               CLOUD & DEVOPS
// ==========================================

export const MicrosoftAzureIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4 19.3L0 4.2h4.5l2.6 8.6h.1L12.5 4.2h4.4L5.4 19.3zm6.3-4.5h8L13.5 4.3 11.7 14.8z"/>
  </svg>
);

export const AzureDevOpsIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8.6 3.93 6v5.86L0 8.6Zm0 6.64 6.84 4.54V6.94L0 3.75v11.49Zm7.86-9.67 4.1-2.82-2.17 6.13-1.93-3.31Zm8.51 12.06L24 12l-7.29-6-2.58 6.4 2.24 5.23Zm-6.52.54 2.05-6.79 2.5 6.09-4.55.7z"/>
  </svg>
);

export const PowerShellIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9 16.1L16.2 19l-4-2.1v-4.4l4 2.2 2.5-1.2-8.5-4.4-8.4 4.4 2.4 1.3 6-3.1v4.4L4.3 19 2.1 17.8V7.9L10.2 3.7l8.1 4.2v8.2h3.6z"/>
  </svg>
);

// ==========================================
//        DATABASES & STORAGE (SQL/NoSQL)
// ==========================================

export const MongoDBIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.6c0-2.3 1.6-4.9 2-7.5.2-1.2.2-2.5-.1-3.7-.4-1.9-1.5-3.4-1.9-6.3-.5 2.9-1.6 4.4-1.9 6.3-.3 1.2-.3 2.5-.1 3.7.4 2.6 2 5.2 2 7.5zM12.1 0C16 7 21 10 21 16c0 4-2 6-6 7.5 0-1 0-2 .5-3-.5 0-1 0-1.5 0-.5 1-1 2-1 3-4-1.5-6-3.5-6-7.5 0-6 5-9 8.9-16z"/>
  </svg>
);

export const MySQLIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 13.9c-.3.2-.6.4-.9.6-3 1.7-6 1.7-8.1 1.7-.5-1.5-.7-3.1-.9-5.1-.3-2.6 1.2-4.5 3.3-4.5 1.5 0 2.4.9 2.4 2.3 0 2-1.8 3.5-4 3.5h-.3c-1.3 0-2.4-1.1-2.4-2.5 0-.6.2-1.2.6-1.6l-.3-.5c-1.7 1.2-2.3 3.5-1.5 5.5-1.5-.4-2.8-1-3.9-1.8L4.3 10c-3.1 3-2.8 5.7-.7 7.2.9.6 2 .9 3.2 1 1 .1 1.9-.1 2.8-.4.7-.2 1.4-.6 2.1-1 .7-.4 1.4-.9 2-1.4.3-.2.6-.5.9-.7.5-.4 1-.8 1.5-1.1.2-.2.5-.3.7-.5 1.1-.7 2.1-1.3 2.7.8z"/>
  </svg>
);

export const CockroachDBIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.23 0C8.4 0 5.48 1.43 4.26 3.85A11.02 11.02 0 0 0 1 10.74c-.06.66.42 1.22 1.07 1.28.67.05 1.25-.42 1.3-1.09.2-2.18.94-4.22 2.1-5.91C6.4 6.84 8.7 8.32 12 8.32c3.3 0 5.6-1.48 6.54-3.3A10.87 10.87 0 0 1 20.63 11c.06.66.65 1.13 1.3 1.08.66-.05 1.13-.64 1.08-1.3a10.96 10.96 0 0 0-3.32-6.93C18.47 1.43 15.55 0 11.73 0h.5zm0 9.87c-4.14 0-7.38 2.32-8.38 5.68-.18.63.19 1.29.83 1.47.63.18 1.29-.19 1.47-.83.69-2.27 2.87-3.83 5.63-3.83 2.76 0 4.94 1.56 5.63 3.83.18.64.84 1.01 1.47.83.64-.18 1.01-.84.83-1.47-1-3.36-4.24-5.68-8.38-5.68z"/>
  </svg>
);

export const AmazonAuroraIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3.56 18.25c.87 2.89 2.65 3.39 5.37 2.37l.46-.17c1.32-.5 3.19.16 3.56 1.63.1.38-.28.7-.61.82-1.92.72-4.1.8-5.98-.62-2.58-1.95-3.36-4.43-2.61-7.1l-1.03.39c-.37.14-.72-.22-.61-.59 2.22-7.39 8.02-9.56 13.91-7.35l.46.18c2.71 1.02 4.19 2.78 3.32 5.67-.87 2.89-2.65 3.39-5.36 2.37l-.46-.18c-2.72-1.02-4.19-2.78-3.32-5.67.19-.62-.51-1.1-.96-.94-1.31.5-3.19-.16-3.56-1.62-.1-.39.28-.7.61-.83 2.71-1.01 5.48-.51 7.43 1.94 1.41 1.77 1.72 3.88 1.15 6.09l1.03-.38c.37-.14.72.21.61.59-2.22 7.39-8.02 9.56-13.91 7.35l-.46-.17c-2.72-1.02-4.19-2.79-3.32-5.67.19-.62-.51-1.1-.96-.94z"/>
  </svg>
);

export const DynamoDBIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
     <path d="M4 17.5v-11c0-.55.45-1 1-1h1l3.5 6 3.5-6h1c.55 0 1 .45 1 1v11l-3-5v5h-1l-3.5-6-3.5 6h-1v-5l-3 5z"/> 
     <path d="M19.5 2C20.88 2 22 3.12 22 4.5v15c0 1.38-1.12 2.5-2.5 2.5H4.5C3.12 22 2 20.88 2 19.5V4.5C2 3.12 3.12 2 4.5 2h15zm-2 15h-11v2h11v-2zm0-4h-11v2h11v-2zm0-4h-11v2h11V9z"/>
  </svg>
);

export const FirestoreIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3.6 19.6h16.8l-8.4-15.2-8.4 15.2zm7.2-11.4 5 9H8.2l2.6-9z"/>
    <path d="M12.9 5.8 15.3 1.5l-4-2.3 2.3 4.2 1.7 2.4z"/>
    <path d="M2.5 22.3h19l-2.4-4.3H4.9l-2.4 4.3z"/>
  </svg>
);

export const CassandraIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 4.1 0 9.1c0 2.2 1.05 4.24 2.8 5.88-.08 1.13-.56 2.35-1.5 3.32 2.65.17 4.7-.63 6.03-1.87 1.45.47 3 .74 4.67.74 6.63 0 12-4.1 12-9.1S18.63 0 12 0zm5.1 7.2a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0zm-8.7 0a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0z"/>
  </svg>
);

export const Neo4jIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="18" r="3" />
    <circle cx="19" cy="18" r="3" />
    <circle cx="12" cy="12" r="2" />
    <path stroke="currentColor" strokeWidth="2" d="M12 8v2M7.5 16.5l2.5-2.5M16.5 16.5l-2.5-2.5" />
  </svg>
);

export const ElasticsearchIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

export const BigQueryIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9 2C6.4 2 2 6.4 2 11.9c0 5.5 4.4 9.9 9.9 9.9 2.2 0 4.3-.7 6-2l3.2 3.2 1.4-1.4-3.2-3.2c1.3-1.8 2-3.9 2-6 0-5.5-4.4-9.9-9.9-9.9zm0 17.8c-4.4 0-7.9-3.5-7.9-7.9 0-4.4 3.5-7.9 7.9-7.9 4.4 0 7.9 3.5 7.9 7.9 0 4.4-3.5 7.9-7.9 7.9z"/>
    <path d="M11.9 6.9v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"/>
  </svg>
);

export const ParquetIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

export const AzureBlobIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10h20v4H2v-4zm0 6h20v4H2v-4zM2 4h20v4H2V4z"/>
  </svg>
);

// ==========================================
//               SECURITY & IAM
// ==========================================

export const SailPointIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm12.5-4c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .36.06.7.18 1.02L6.5 11.2c-.31-.1-.65-.16-1-.16-1.66 0-3 1.34-3 3s1.34 3 3 3c1.66 0 3-1.34 3-3 0-.36-.06-.7-.18-1.02l2.18-2.18c.31.1.65.16 1 .16 1.66 0 3-1.34 3-3z"/>
  </svg>
);

export const CyberArkIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 8.15-7 9.42V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

// ==========================================
//            AI, ML & VECTOR DB
// ==========================================

export const ClaudeIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 2H4.5A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zm-8.8 14.5h-2v-4h2v4zm4 0h-2v-9h2v9z"/>
  </svg>
);

export const GeminiIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/>
  </svg>
);

export const FAISSIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9 16H7v-4h2v4zm4 0h-2v-4h2v4zm4 0h-2v-4h2v4z"/>
    <path d="M7 8h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
  </svg>
);

export const ChromaIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
  </svg>
);

export const OpenSearchIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-4v4h-2v-4H6v-2h4V7h2v4h4v2z"/>
  </svg>
);

export const LangChainIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 7h2v2h-2zM14.5 7h2v2h-2zM7.5 15h2v2h-2zM14.5 15h2v2h-2z"/>
    <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M9.5 9.5l5 5M9.5 14.5l5-5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const StreamlitIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.99 16.66 12 1.33 2.01 16.66h19.98zM12 5.8l6.53 10.02H5.47L12 5.8zM21.99 21.6H2.01v-1.92h19.98v1.92z"/>
  </svg>
);

export const ChainlitIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.47a3.004 3.004 0 0 0 0-4.24 3.004 3.004 0 0 0-4.24 0l-3.53 3.53a3.004 3.004 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a3.004 3.004 0 0 0 0 4.24 3.004 3.004 0 0 0 4.24 0l3.53-3.53a3.004 3.004 0 0 0 0-4.24.39.39 0 0 1 0-1.42z"/>
  </svg>
);

export const OllamaIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
  </svg>
);

export const GPT4AllIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5z"/>
  </svg>
);

// ==========================================
//               CREATIVE & BI
// ==========================================

export const PowerBIIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/>
  </svg>
);

export const DaVinciResolveIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fillOpacity="0.2"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5-4-2.5 4-2.5v5zm1-9 4 2.5-4 2.5v-5z"/>
  </svg>
);

export const FLStudioIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm3-13h2v10H7V9zm4-4h2v14h-2V5zm4 7h2v7h-2v-7z"/>
  </svg>
);

export const PrometheusIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.9 2h-1.8L9.2 6.5l3.2.9c1.9.5 3.3 2.1 3.5 4.1.2 2-.9 3.9-2.7 4.9L12 17l-.8-.6c-1.3-.9-2-2.4-2-4 0-.8.2-1.6.5-2.3L6 8.9C5.3 10.3 5 11.9 5.2 13.5c.5 3.5 3.3 6.3 6.8 6.5 3.9.2 7.1-2.9 7.1-6.8 0-3-1.9-5.6-4.7-6.5L12.9 2z"/>
  </svg>
);

// The Cursor AI logo (a futuristic pointer/cursor)
export const CursorIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.0002 18.5714L12.5898 12.6737L18.4288 15.2384L19.2859 13.2868L4.71436 6.88721L11.1139 21.4588L13.0655 20.6017L10.5186 14.8028L15.6521 17.0577L16.5093 15.1061L10.0002 18.5714Z" />
    <path d="M4.71436 6.88721L11.1139 21.4588L4.71436 6.88721ZM18.4288 15.2384L19.2859 13.2868L18.4288 15.2384Z" />
  </svg>
);

// GitHub Copilot (The "Ghost" / Pilot face)
export const CopilotIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24" // Adjusted standard viewbox
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.75 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      clipRule="evenodd"
    />
  </svg>
);

// OpenAI / ChatGPT (The "Swirl" flower)
export const ChatGPTIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0843 3.5366-1.9716a1 1 0 0 0 .496-1.1292L13.1313 13.5l4.0851 2.2778a4.4991 4.4991 0 0 1-3.9565 6.6514zm6.5029-4.7174a4.4913 4.4913 0 0 1-3.2351 2.3235l-.1419-.0828-3.5366-1.9732a1 1 0 0 0-1.1197.1326L8.989 17.6534l.0568 4.6766a4.5023 4.5023 0 0 1 10.739-7.7915zm1.1923-8.865a4.4842 4.4842 0 0 1-.5645 3.961l-.1419.0828-3.5366 1.9732a1 1 0 0 0-.374 1.3653l1.6143 4.3837-4.1435-2.174a4.5023 4.5023 0 0 1 7.1462-9.5921zM2.874 9.4795A4.4965 4.4965 0 0 1 6.1091 7.156l.1419.0828 3.5366 1.9732a1 1 0 0 0 1.1197-.1326l2.6122-2.4705-.0568-4.6766a4.5023 4.5023 0 0 1-10.5887 7.5472zm2.1499-5.7198a4.4842 4.4842 0 0 1 3.4409-1.2827l.1419.0843 3.5366 1.9716a1 1 0 0 0 1.1197-.1326l2.6122-2.4705-4.0851-2.2778a4.4991 4.4991 0 0 1-6.7662 4.1077zm11.2384 10.2982-1.6143-4.3837 4.1435 2.174a4.4991 4.4991 0 0 1-2.5292 6.9427v-.0016a4.4842 4.4842 0 0 1-2.9064-.9542l.1419-.0828 3.5366-1.9732a1 1 0 0 0 .374-1.3653l-1.1461-2.2215z" />
  </svg>
);

// n8n (The connected nodes logo)
export const N8nIcon: React.FC<SvgIconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.625 2.5a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25Zm0 2.25a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Zm4.375 2.25a1.125 1.125 0 0 1 1.125-1.125h2.25c1.243 0 2.25 1.007 2.25 2.25v.75a1.125 1.125 0 0 1-1.125 1.125h-2.25a2.25 2.25 0 0 0-2.25 2.25v6.125a1.125 1.125 0 0 1-1.125 1.125h-3.25a1.125 1.125 0 0 1-1.125-1.125v-3.25a1.125 1.125 0 0 1 1.125-1.125h.75a2.25 2.25 0 0 0 2.25-2.25v-2.25a1.125 1.125 0 0 1 1.125-1.125h.25Zm-3.25 9.875h1.75v1.75h-1.75v-1.75Zm11.625 4.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm0-2.25a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Z"
    />
  </svg>
);