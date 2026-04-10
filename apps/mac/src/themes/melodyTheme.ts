/**
 * 美乐蒂主题配置
 * Melody Theme Configuration
 */

/**
 * 美乐蒂主题颜色配置
 */
export const melodyColors = {
  // 主色调 - 美乐蒂粉色系
  primary: '#E91E63',      // 主粉色
  primaryLight: '#F8BBD0', // 浅粉色
  primaryDark: '#C2185B',  // 深粉色
  
  secondary: '#9C27B0',    // 紫色
  secondaryLight: '#E1BEE7',
  secondaryDark: '#7B1FA2',
  
  accent: '#FF4081',       // 强调粉色
  accentLight: '#FF80AB',
  accentDark: '#F50057',
  
  // 背景色
  background: '#FCE4EC',   // 浅粉色背景
  backgroundLight: '#FFFFFF',
  backgroundDark: '#F8BBD0',
  
  // 表面色
  surface: '#FFFFFF',
  surfaceVariant: '#F5F5F5',
  
  // 文本色
  textPrimary: '#3C3C3C',
  textSecondary: '#757575',
  textDisabled: '#BDBDBD',
  
  // 成功/错误/警告
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  
  // 特殊效果
  glow: 'rgba(233, 30, 99, 0.3)',
  shadow: 'rgba(233, 30, 99, 0.2)',
  overlay: 'rgba(252, 228, 236, 0.8)',
};

/**
 * 美乐蒂主题字体配置
 */
export const melodyTypography = {
  fontFamily: {
    sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    serif: '"SF Pro Display", Georgia, serif',
    mono: '"SF Mono", Menlo, Monaco, Consolas, monospace',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

/**
 * 美乐蒂主题间距配置
 */
export const melodySpacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
};

/**
 * 美乐蒂主题圆角配置
 */
export const melodyBorderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

/**
 * 美乐蒂主题阴影配置
 */
export const melodyShadows = {
  sm: '0 1px 2px 0 rgba(233, 30, 99, 0.05)',
  md: '0 4px 6px -1px rgba(233, 30, 99, 0.1), 0 2px 4px -1px rgba(233, 30, 99, 0.06)',
  lg: '0 10px 15px -3px rgba(233, 30, 99, 0.1), 0 4px 6px -2px rgba(233, 30, 99, 0.05)',
  xl: '0 20px 25px -5px rgba(233, 30, 99, 0.1), 0 10px 10px -5px rgba(233, 30, 99, 0.04)',
  '2xl': '0 25px 50px -12px rgba(233, 30, 99, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(233, 30, 99, 0.06)',
};

/**
 * 美乐蒂主题动画配置
 */
export const melodyAnimations = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easings: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
  keyframes: {
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    glow: {
      '0%, 100%': { boxShadow: '0 0 5px rgba(233, 30, 99, 0.5)' },
      '50%': { boxShadow: '0 0 20px rgba(233, 30, 99, 0.8)' },
    },
  },
};

/**
 * 美乐蒂主题图标配置
 */
export const melodyIcons = {
  pet: '🎵',           // 美乐蒂宠物图标
  points: '⭐',        // 积分图标
  streak: '🔥',        // 连续学习图标
  achievement: '🏆',   // 成就图标
  correct: '✅',       // 正确图标
  wrong: '❌',         // 错误图标
  sound: '🔊',         // 声音图标
  music: '🎶',         // 音乐图标
  shop: '🛍️',         // 商店图标
  settings: '⚙️',      // 设置图标
  user: '👤',          // 用户图标
  star: '🌟',          // 星星图标
  heart: '❤️',         // 爱心图标
  flower: '🌸',        // 花朵图标
};

/**
 * 美乐蒂主题音乐配置
 */
export const melodyMusic = {
  background: {
    id: 'melody_theme',
    name: '美乐蒂主题曲',
    description: '轻柔的钢琴曲，陪伴学习时光',
    volume: 0.3,
  },
  effects: {
    correct: {
      id: 'correct_sound',
      name: '正确音效',
      description: '答对时的欢快音效',
      volume: 0.5,
    },
    wrong: {
      id: 'wrong_sound',
      name: '鼓励音效',
      description: '答错时的鼓励音效',
      volume: 0.4,
    },
    levelUp: {
      id: 'level_up',
      name: '升级音效',
      description: '升级时的庆祝音效',
      volume: 0.6,
    },
    points: {
      id: 'points_earned',
      name: '积分音效',
      description: '获得积分时的音效',
      volume: 0.5,
    },
  },
};

/**
 * 完整的美乐蒂主题配置
 */
export const melodyTheme = {
  colors: melodyColors,
  typography: melodyTypography,
  spacing: melodySpacing,
  borderRadius: melodyBorderRadius,
  shadows: melodyShadows,
  animations: melodyAnimations,
  icons: melodyIcons,
  music: melodyMusic,
  
  // 组件特定样式
  components: {
    button: {
      primary: {
        backgroundColor: melodyColors.primary,
        color: '#FFFFFF',
        hoverBackground: melodyColors.primaryDark,
        activeBackground: melodyColors.accentDark,
      },
      secondary: {
        backgroundColor: melodyColors.secondary,
        color: '#FFFFFF',
        hoverBackground: melodyColors.secondaryDark,
        activeBackground: '#6A1B9A',
      },
      accent: {
        backgroundColor: melodyColors.accent,
        color: '#FFFFFF',
        hoverBackground: melodyColors.accentDark,
        activeBackground: '#C51162',
      },
    },
    card: {
      backgroundColor: melodyColors.surface,
      borderColor: melodyColors.primaryLight,
      boxShadow: melodyShadows.md,
    },
    input: {
      backgroundColor: melodyColors.backgroundLight,
      borderColor: melodyColors.primaryLight,
      focusBorderColor: melodyColors.primary,
      focusBoxShadow: `0 0 0 3px ${melodyColors.glow}`,
    },
  },
};

/**
 * 获取美乐蒂主题的CSS变量
 */
export function getMelodyThemeCssVars(): Record<string, string> {
  return {
    '--color-primary': melodyColors.primary,
    '--color-primary-light': melodyColors.primaryLight,
    '--color-primary-dark': melodyColors.primaryDark,
    '--color-secondary': melodyColors.secondary,
    '--color-secondary-light': melodyColors.secondaryLight,
    '--color-secondary-dark': melodyColors.secondaryDark,
    '--color-accent': melodyColors.accent,
    '--color-accent-light': melodyColors.accentLight,
    '--color-accent-dark': melodyColors.accentDark,
    '--color-background': melodyColors.background,
    '--color-background-light': melodyColors.backgroundLight,
    '--color-background-dark': melodyColors.backgroundDark,
    '--color-surface': melodyColors.surface,
    '--color-surface-variant': melodyColors.surfaceVariant,
    '--color-text-primary': melodyColors.textPrimary,
    '--color-text-secondary': melodyColors.textSecondary,
    '--color-text-disabled': melodyColors.textDisabled,
    '--color-success': melodyColors.success,
    '--color-error': melodyColors.error,
    '--color-warning': melodyColors.warning,
    '--color-info': melodyColors.info,
    '--color-glow': melodyColors.glow,
    '--color-shadow': melodyColors.shadow,
    '--color-overlay': melodyColors.overlay,
  };
}

/**
 * 应用美乐蒂主题到文档
 */
export function applyMelodyTheme(): void {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  const vars = getMelodyThemeCssVars();
  
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  
  // 添加美乐蒂主题类
  document.body.classList.add('melody-theme');
}

/**
 * 移除美乐蒂主题
 */
export function removeMelodyTheme(): void {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  const vars = getMelodyThemeCssVars();
  
  Object.keys(vars).forEach(key => {
    root.style.removeProperty(key);
  });
  
  document.body.classList.remove('melody-theme');
}

export default melodyTheme;