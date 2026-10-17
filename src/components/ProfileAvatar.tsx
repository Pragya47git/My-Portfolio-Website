import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, User, Upload, Check } from 'lucide-react';

interface ProfileAvatarProps {
  className?: string;
  size?: 'hero' | 'about' | 'compact';
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className = '', size = 'hero' }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('pragya_profile_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('pragya_profile_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  if (size === 'about') {
    return (
      <div className="relative group">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          onClick={triggerUpload}
          className="w-20 h-20 rounded-2xl overflow-hidden border-2 shadow-md cursor-pointer relative flex items-center justify-center bg-slate-100 dark:bg-slate-800 transition-transform group-hover:scale-105"
          style={{ borderColor: 'var(--color-primary)' }}
          title="Click to select your Pragya.jpg"
        >
          {photoUrl ? (
            <img src={photoUrl} alt="Pragya Dwivedi" className="w-full h-full object-cover" />
          ) : (
            <DefaultAvatarIllustration />
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
            <Camera className="w-5 h-5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Morphing Blob Mask Container (Bedimcode signature shape) */}
      <div
        className="relative w-full h-full rounded-[45%_55%_70%_30%/40%_60%_40%_60%] border-4 shadow-2xl overflow-hidden transition-all duration-500 group cursor-pointer"
        style={{
          borderColor: 'var(--color-primary)',
          backgroundColor: 'var(--color-primary-light-bg)',
        }}
        onClick={triggerUpload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Click to select or upload Pragya.jpg photo"
      >
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="Pragya Dwivedi - AI Engineer"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative">
            <DefaultAvatarIllustration />
            <div className="absolute bottom-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Camera className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
              <span>Select Pragya.jpg</span>
            </div>
          </div>
        )}

        {/* Hover Overlay with Upload Action */}
        <div
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-xs flex flex-col items-center justify-center text-white transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Camera className="w-8 h-8 mb-2" />
          <span className="text-xs font-semibold px-3 py-1 bg-white/20 rounded-full">
            {photoUrl ? 'Change Photo' : 'Select Pragya.jpg'}
          </span>
        </div>
      </div>
    </div>
  );
};

/* High quality SVG Portrait matching Pragya's uploaded photo:
   Dark tied back hair, middle part, gentle smile, nose stud, gray knit sweater */
const DefaultAvatarIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 300 300"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary-light-bg)" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d89a72" />
          <stop offset="100%" stopColor="#ca875c" />
        </linearGradient>
        <linearGradient id="sweaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e5e5ea" />
          <stop offset="100%" stopColor="#d1d1d6" />
        </linearGradient>
      </defs>

      <rect width="300" height="300" fill="url(#bgGlow)" />

      {/* Knit Sweater Body */}
      <path
        d="M 40 300 C 50 240, 90 220, 110 215 C 130 250, 170 250, 190 215 C 210 220, 250 240, 260 300 Z"
        fill="url(#sweaterGrad)"
      />
      {/* Knit Texture Cable patterns */}
      <path
        d="M 60 270 Q 75 250 80 300 M 95 240 Q 105 260 110 300 M 190 300 Q 195 260 205 240 M 220 300 Q 225 250 240 270"
        stroke="#bcbcc0"
        strokeWidth="3"
        fill="none"
      />
      {/* V-neck collar & Inner Shirt */}
      <path d="M 125 215 L 150 255 L 175 215 Z" fill="#ffffff" />
      <path
        d="M 110 215 Q 150 265 190 215"
        stroke="#c4c4c8"
        strokeWidth="6"
        fill="none"
      />
      {/* Sweater Button */}
      <circle cx="150" cy="275" r="7" fill="#b0b0b5" stroke="#8e8e93" strokeWidth="2" />

      {/* Neck */}
      <path d="M 128 175 L 128 220 L 172 220 L 172 175 Z" fill="#c38357" />

      {/* Head / Face */}
      <ellipse cx="150" cy="150" rx="60" ry="68" fill="url(#skinGrad)" />

      {/* Dark Hair (Pulled back, middle parted) */}
      <path
        d="M 90 145 C 85 95, 120 70, 150 72 C 180 70, 215 95, 210 145 C 205 105, 180 82, 150 82 C 120 82, 95 105, 90 145 Z"
        fill="#1e1815"
      />
      {/* Hair side contours */}
      <path
        d="M 90 145 C 88 120, 100 95, 120 85 C 135 105, 115 135, 95 155 Z"
        fill="#1a1412"
      />
      <path
        d="M 210 145 C 212 120, 200 95, 180 85 C 165 105, 185 135, 205 155 Z"
        fill="#1a1412"
      />

      {/* Ears & Earrings */}
      <ellipse cx="88" cy="155" rx="7" ry="11" fill="#ca875c" />
      <circle cx="89" cy="160" r="2" fill="#ffffff" stroke="#c0c0c0" strokeWidth="0.5" />
      <ellipse cx="212" cy="155" rx="7" ry="11" fill="#ca875c" />
      <circle cx="211" cy="160" r="2" fill="#ffffff" stroke="#c0c0c0" strokeWidth="0.5" />

      {/* Eyebrows */}
      <path
        d="M 112 128 Q 128 123 138 128"
        stroke="#1a1412"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 162 128 Q 172 123 188 128"
        stroke="#1a1412"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eyes */}
      <ellipse cx="126" cy="140" rx="9" ry="6" fill="#ffffff" />
      <circle cx="126" cy="140" r="5" fill="#2c1a0e" />
      <circle cx="127.5" cy="138.5" r="1.5" fill="#ffffff" />

      <ellipse cx="174" cy="140" rx="9" ry="6" fill="#ffffff" />
      <circle cx="174" cy="140" r="5" fill="#2c1a0e" />
      <circle cx="175.5" cy="138.5" r="1.5" fill="#ffffff" />

      {/* Nose & Stud */}
      <path
        d="M 150 134 L 147 158 Q 150 162 154 158"
        stroke="#b57348"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tiny Nose Stud on right nostril */}
      <circle cx="157" cy="157" r="1.8" fill="#ffd700" stroke="#b8860b" strokeWidth="0.5" />

      {/* Warm Smile with Teeth */}
      <path
        d="M 132 178 Q 150 196 168 178 Q 150 186 132 178 Z"
        fill="#ffffff"
      />
      <path
        d="M 130 177 Q 150 198 170 177"
        stroke="#9e3d3d"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
