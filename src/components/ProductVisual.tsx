import React from 'react';
import { Product } from '../types';

interface ProductVisualProps {
  product: Product;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  className = '',
  size = 'md'
}) => {
  const isLarge = size === 'lg';
  const iconSizeClass = isLarge ? 'w-32 h-32' : size === 'sm' ? 'w-16 h-16' : 'w-24 h-24';

  const renderGraphic = () => {
    switch (product.imageType) {
      case 'shirt':
        return (
          <div className="relative flex items-center justify-center">
            {/* T-Shirt SVG illustration */}
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shirt body */}
              <path
                d="M32 18 C38 25, 62 25, 68 18 L86 28 L78 44 L68 39 L68 84 L32 84 L32 39 L22 44 L14 28 Z"
                fill="#F1F3F4"
                stroke="#BDC1C6"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Collar curve */}
              <path
                d="M36 19 C44 26, 56 26, 64 19"
                stroke="#9AA0A6"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Google 4-color chest logo dot/stripe */}
              <g transform="translate(42, 38)">
                <circle cx="2" cy="0" r="2.5" fill="#4285F4" />
                <circle cx="8" cy="0" r="2.5" fill="#EA4335" />
                <circle cx="14" cy="0" r="2.5" fill="#FBBC04" />
                <circle cx="20" cy="0" r="2.5" fill="#34A853" />
              </g>
              {/* Subtle bottom hem line */}
              <line x1="33" y1="80" x2="67" y2="80" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 2" />
            </svg>
          </div>
        );

      case 'bottle':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Water bottle cap & loop */}
              <rect x="42" y="10" width="16" height="8" rx="2" fill="#202124" />
              <path d="M46 10 C46 6, 54 6, 54 10" stroke="#5F6368" strokeWidth="3" fill="none" />
              {/* Neck */}
              <rect x="44" y="18" width="12" height="7" fill="#80868B" />
              {/* Bottle body */}
              <path
                d="M38 25 C38 25, 40 25, 44 25 L56 25 C60 25, 62 25, 62 25 C65 27, 65 30, 65 34 L65 82 C65 86, 62 88, 58 88 L42 88 C38 88, 35 86, 35 82 L35 34 C35 30, 35 27, 38 25 Z"
                fill="#2D3748"
                stroke="#1A202C"
                strokeWidth="2"
              />
              {/* Specular highlight */}
              <path d="M40 32 L40 80" stroke="#4A5568" strokeWidth="2.5" strokeLinecap="round" />
              {/* YouTube Play Icon emblem */}
              <rect x="42" y="46" width="16" height="11" rx="3" fill="#EA4335" />
              <polygon points="48,49 53,51.5 48,54" fill="#FFFFFF" />
            </svg>
          </div>
        );

      case 'robot':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Android Antennas */}
              <line x1="38" y1="20" x2="33" y2="12" stroke="#34A853" strokeWidth="3" strokeLinecap="round" />
              <line x1="62" y1="20" x2="67" y2="12" stroke="#34A853" strokeWidth="3" strokeLinecap="round" />
              {/* Head semi-circle */}
              <path d="M30 32 C30 20, 70 20, 70 32 Z" fill="#3DDC84" />
              {/* Eyes */}
              <circle cx="41" cy="24" r="2.5" fill="#FFFFFF" />
              <circle cx="59" cy="24" r="2.5" fill="#FFFFFF" />
              {/* Body */}
              <rect x="30" y="36" width="40" height="34" rx="4" fill="#3DDC84" />
              {/* Left Arm */}
              <rect x="19" y="38" width="7" height="24" rx="3.5" fill="#3DDC84" />
              {/* Right Arm */}
              <rect x="74" y="38" width="7" height="24" rx="3.5" fill="#3DDC84" />
              {/* Legs */}
              <rect x="38" y="72" width="7" height="14" rx="3.5" fill="#3DDC84" />
              <rect x="55" y="72" width="7" height="14" rx="3.5" fill="#3DDC84" />
            </svg>
          </div>
        );

      case 'backpack':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top handle */}
              <path d="M42 20 C42 14, 58 14, 58 20" stroke="#374151" strokeWidth="3" fill="none" />
              {/* Main backpack shape */}
              <path
                d="M28 36 C28 22, 72 22, 72 36 L74 78 C74 83, 70 86, 65 86 L35 86 C30 86, 26 83, 26 78 Z"
                fill="#4B5563"
                stroke="#1F2937"
                strokeWidth="2.5"
              />
              {/* Front pocket */}
              <rect x="33" y="52" width="34" height="28" rx="4" fill="#374151" stroke="#1F2937" strokeWidth="2" />
              {/* Zipper accents */}
              <line x1="33" y1="46" x2="67" y2="46" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="37" y1="56" x2="63" y2="56" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Subtle Google G logo tag */}
              <circle cx="50" cy="68" r="4.5" fill="#1A73E8" />
              <path d="M50 66 L52 66 L52 69 L50 69 Z" fill="#FFFFFF" />
            </svg>
          </div>
        );

      case 'hoodie':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hoodie Body */}
              <path
                d="M30 20 C36 28, 64 28, 70 20 L88 32 L78 50 L68 44 L68 84 L32 84 L32 44 L22 50 L12 32 Z"
                fill="#1E293B"
                stroke="#0F172A"
                strokeWidth="2"
              />
              {/* Hood interior */}
              <path d="M36 21 C42 12, 58 12, 64 21 C58 28, 42 28, 36 21 Z" fill="#334155" />
              {/* Kangaroo Pocket */}
              <path d="M37 60 L63 60 L61 78 L39 78 Z" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              {/* Drawstrings */}
              <line x1="46" y1="26" x2="46" y2="42" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              <line x1="54" y1="26" x2="54" y2="39" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              {/* Cloud symbol */}
              <circle cx="50" cy="46" r="3" fill="#4285F4" />
            </svg>
          </div>
        );

      case 'crewneck':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 18 C38 23, 62 23, 68 18 L86 28 L78 46 L68 40 L68 84 L32 84 L32 40 L22 46 L14 28 Z"
                fill="#E2E8F0"
                stroke="#94A3B8"
                strokeWidth="2"
              />
              <path d="M38 19 C44 24, 56 24, 62 19" stroke="#EA4335" strokeWidth="2" fill="none" />
              <rect x="44" y="38" width="12" height="8" rx="2" fill="#EA4335" />
              <polygon points="49,40 53,42 49,44" fill="#FFFFFF" />
            </svg>
          </div>
        );

      case 'lamp':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glowing Aura */}
              <circle cx="50" cy="38" r="28" fill="#FEF3C7" opacity="0.6" />
              {/* Dino Silhouette in Pixel Style */}
              <path
                d="M44 24 H56 V30 H60 V34 H54 V36 H58 V40 H52 V44 H48 V42 H46 V50 H52 V54 H42 V46 H40 V42 H38 V36 H40 V30 H44 Z"
                fill="#4B5563"
              />
              <rect x="52" y="26" width="2" height="2" fill="#FFFFFF" />
              {/* Lamp Stem & Base */}
              <rect x="48" y="56" width="4" height="22" rx="1" fill="#9CA3AF" />
              <ellipse cx="50" cy="80" rx="18" ry="4" fill="#4B5563" />
              <circle cx="50" cy="80" r="2" fill="#FBBC04" />
            </svg>
          </div>
        );

      case 'notebook':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Book shadow & back */}
              <rect x="24" y="16" width="50" height="68" rx="4" fill="#D97706" opacity="0.3" />
              {/* Book main cover (cork color) */}
              <rect x="28" y="14" width="46" height="68" rx="4" fill="#D7A76E" stroke="#B45309" strokeWidth="2" />
              {/* Spine line */}
              <line x1="36" y1="14" x2="36" y2="82" stroke="#92400E" strokeWidth="2" />
              {/* Elastic band */}
              <line x1="64" y1="14" x2="64" y2="82" stroke="#374151" strokeWidth="3" />
              {/* Bookmark ribbon */}
              <path d="M48 82 L48 90 L52 87 L56 90 L56 82 Z" fill="#34A853" />
              {/* Bamboo pen diagonal */}
              <line x1="68" y1="30" x2="82" y2="76" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'tote':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Handles */}
              <path d="M40 38 C40 12, 60 12, 60 38" stroke="#D1D5DB" strokeWidth="3.5" fill="none" />
              {/* Bag Body */}
              <polygon points="26,38 74,38 70,86 30,86" fill="#FDFBF7" stroke="#D1D5DB" strokeWidth="2.5" />
              {/* Logo print */}
              <circle cx="50" cy="58" r="8" fill="#4285F4" opacity="0.15" />
              <text x="50" y="62" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1A73E8" fontFamily="sans-serif">G</text>
            </svg>
          </div>
        );

      case 'sleeve':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Felt sleeve body */}
              <rect x="22" y="24" width="56" height="52" rx="6" fill="#4B5563" stroke="#374151" strokeWidth="2" />
              {/* Flap */}
              <polygon points="22,28 78,28 50,50" fill="#374151" />
              {/* Magnetic snap button */}
              <circle cx="50" cy="54" r="3" fill="#9CA3AF" />
              {/* Stitched edge */}
              <rect x="25" y="27" width="50" height="46" rx="4" stroke="#6B7280" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            </svg>
          </div>
        );

      case 'keychain':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Metal Ring */}
              <circle cx="50" cy="24" r="12" stroke="#9CA3AF" strokeWidth="3" fill="none" />
              {/* Link */}
              <rect x="48" y="34" width="4" height="8" rx="2" fill="#9CA3AF" />
              {/* Play button pendant */}
              <rect x="30" y="42" width="40" height="28" rx="6" fill="#EA4335" stroke="#D1D5DB" strokeWidth="2" />
              <polygon points="46,50 58,56 46,62" fill="#FFFFFF" />
            </svg>
          </div>
        );

      case 'mug':
        return (
          <div className="relative flex items-center justify-center">
            <svg
              className={`${iconSizeClass} transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Handle */}
              <path d="M64 40 C76 40, 76 66, 64 66" stroke="#3DDC84" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* Mug Body */}
              <rect x="28" y="32" width="38" height="46" rx="6" fill="#A7F3D0" stroke="#059669" strokeWidth="2.5" />
              {/* Rim */}
              <ellipse cx="47" cy="32" rx="19" ry="3" fill="#059669" />
              {/* Android Face */}
              <circle cx="42" cy="50" r="1.5" fill="#065F46" />
              <circle cx="52" cy="50" r="1.5" fill="#065F46" />
              <path d="M43 56 C45 58, 49 58, 51 56" stroke="#065F46" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-2xl">
              G
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {renderGraphic()}
    </div>
  );
};
